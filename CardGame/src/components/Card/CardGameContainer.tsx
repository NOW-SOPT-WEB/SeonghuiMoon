import CardGame from "@/components/Card/CardGame";
import { useState, useEffect } from "react";

interface CardgameContainerInterface {
  numPairs: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

interface CardType {
  id: number;
  imgSrc: string;
}

const CardgameContainer = ({
  numPairs,
  setScore,
}: CardgameContainerInterface) => {
  const images = Array.from(
    { length: 9 },
    (_, i) => `/src/assets/images/maru${i + 1}.png`
  );

  const selectedImages: string[] = [];
  while (selectedImages.length < numPairs) {
    const index = Math.floor(Math.random() * images.length);
    const imgSrc = images[index];
    if (!selectedImages.includes(imgSrc)) {
      selectedImages.push(imgSrc);
    }
  }

  const cards: CardType[] = selectedImages.reduce(
    (acc: CardType[], imgSrc: string, index: number) => [
      ...acc,
      { id: index * 2, imgSrc },
      { id: index * 2 + 1, imgSrc },
    ],
    []
  );

  cards.sort(() => Math.random() - 0.5);

  return <CardGame cards={cards}></CardGame>;
};

export default CardgameContainer;
