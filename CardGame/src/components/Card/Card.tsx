import { styled } from "styled-components";

interface CardInterface {
  id: number;
  imgSrc: string;
  onClickCard: () => void;
}

const Card = ({ id, imgSrc, onClickCard }: CardInterface) => {
  return (
    <CardStyled id={id} imgSrc={imgSrc} onClick={onClickCard}></CardStyled>
  );
};

const CardStyled = styled.div`
  width: 12rem;
  height: 15rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid black;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;
export default Card;
