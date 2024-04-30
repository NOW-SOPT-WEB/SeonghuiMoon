import Card from "@/components/Card/Card";
import { useState } from "react";
import BasicImg from "@/assets/images/basicMaru.webp";

interface CardType {
  id: number;
  imgSrc: string;
}

const CardContainer = ({ id, imgSrc }: CardType) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      id={id}
      imgSrc={isFlipped ? imgSrc : BasicImg}
      onClickCard={onClickCard}
    />
  );
};

export default CardContainer;
