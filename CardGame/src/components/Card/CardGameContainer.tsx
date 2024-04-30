import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { imageData } from "@/assets/data/imageData";
import Card from "@/components/Card/Card";
import BasicImg from "@/assets/images/basicMaru.webp";

interface CardgameContainerInterface {
  numPairs: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  reset: boolean;
}

interface CardType {
  id: number;
  imgSrc: string;
  pairId: number;
}

const CardgameContainer = ({
  numPairs,
  setScore,
  reset,
}: CardgameContainerInterface) => {
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    initCards();
  }, [numPairs, reset]);

  const initCards = () => {
    const selectedImages = imageData
      .sort(() => 0.5 - Math.random())
      .slice(0, numPairs);

    const shuffledCards = selectedImages
      .flatMap((image) => [
        { id: image.id * 2, imgSrc: image.imgSrc, pairId: image.id },
        { id: image.id * 2 + 1, imgSrc: image.imgSrc, pairId: image.id },
      ])
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setOpenedCards([]);
    setMatchedCards([]);
  };

  const isFlipped = (cardId: number) => {
    return openedCards.includes(cardId) || matchedCards.includes(cardId);
  };

  const onClickCard = (cardId: number) => {
    if (matchedCards.includes(cardId) || openedCards.includes(cardId)) {
      return;
    }
    if (openedCards.length === 0) {
      setOpenedCards([cardId]);
    } else if (openedCards.length === 1) {
      const firstCardId = openedCards[0];
      const firstCard = cards.find((card) => card.id === firstCardId);
      const currentCard = cards.find((card) => card.id === cardId);

      if (firstCard && currentCard && firstCard.pairId === currentCard.pairId) {
        setMatchedCards([...matchedCards, firstCardId, cardId]);
        setScore((prevScore) => prevScore + 1);
        setOpenedCards([]);
      } else {
        setOpenedCards([...openedCards, cardId]);
        setTimeout(() => {
          setOpenedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <CardGameStyled>
      {cards.map((card) => (
        <Card
          id={card.id}
          imgSrc={isFlipped(card.id) ? card.imgSrc : BasicImg}
          onClickCard={() => onClickCard(card.id)}
          key={card.id}
        />
      ))}
    </CardGameStyled>
  );
};

const CardGameStyled = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
export default CardgameContainer;
