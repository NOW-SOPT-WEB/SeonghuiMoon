import { styled } from "styled-components";
import CardContainer from "@/components/Card/CardContainer";

interface CardType {
  id: number;
  imgSrc: string;
}

interface CardGameInterface {
  cards: CardType[];
}

const CardGame = ({ cards }: CardGameInterface) => {
  return (
    <CardGameStyled>
      {cards.map((card, index) => (
        <CardContainer id={card.id} imgSrc={card.imgSrc} key={index} />
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

export default CardGame;
