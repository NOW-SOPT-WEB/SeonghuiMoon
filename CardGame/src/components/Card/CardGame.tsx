import React from "react";
import { styled } from "styled-components";
import Button from "@/components/button/Button";

interface CardGameInterface {
  onClickBtn: () => void;
}

const CardGame = ({ onClickBtn }: CardGameInterface) => {
  return (
    <CardGameStyled>
      <BtnWarpper>
        <Button text="Easy" color="var(--sub-color)" onClick={onClickBtn} />
        <Button text="Normal" color="var(--sub-color)" onClick={onClickBtn} />
        <Button text="Hard" color="var(--sub-color)" onClick={onClickBtn} />
      </BtnWarpper>
    </CardGameStyled>
  );
};

const CardGameStyled = styled.div`
  width: 100%;
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnWarpper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem;
`;
export default CardGame;
