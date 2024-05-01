import { styled } from "styled-components";

interface ButtonInterfage {
  onClick: () => void;
  text: string;
  color: string;
  isClicked?: boolean;
}

const Button = ({ onClick, text, color, isClicked }: ButtonInterfage) => {
  return (
    <ButtonStyled onClick={onClick} color={color} $isClicked={isClicked}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ color: string; isClicked?: boolean }>`
  width: 10rem;
  height: 4rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  background-color: ${(props) =>
    props.$isClicked ? "var(--point-color)" : props.color};
  color: white;
  font-size: 1.5rem;
`;

export default Button;
