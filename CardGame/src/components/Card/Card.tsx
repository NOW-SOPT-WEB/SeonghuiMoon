import { styled } from "styled-components";

interface CardInterface {
  id: number;
  imgSrc: string;
  isFlipped: boolean;
  onClickCard: () => void;
}

const Card = ({ id, onClickCard, isFlipped, imgSrc }: CardInterface) => {
  return (
    <CardStyled
      id={id}
      onClick={onClickCard}
      $isFlipped={isFlipped}
      $imgSrc={imgSrc}
    />
  );
};

const CardStyled = styled.div<{
  $isFlipped: boolean;
  $imgSrc: string;
}>`
  width: 12rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  background-image: url(${({ $imgSrc }) => $imgSrc});
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export default Card;
