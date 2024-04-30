import { styled } from "styled-components";

interface ButtonInterfage {
  onClick: () => void;
  text: string;
  color: string;
}

const Button = ({ onClick, text, color }: ButtonInterfage) => {
  return (
    <ButtonStyled onClick={onClick} color={color}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ color: string }>`
  width: 10rem;
  height: 4rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 1.5rem;
`;

export default Button;
