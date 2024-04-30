import React, { useState } from "react";
import { styled } from "styled-components";
import HeaderContainer from "@/components/HeaderContainer";
import CardgameContainer from "@/components/Card/CardGameContainer";
import Button from "@/components/button/Button";

const MainPage = () => {
  const [numPairs, setNumPairs] = useState(5);
  const handleButtonClick = (pairs: number) => {
    setNumPairs(pairs);
  };
  const [score, setScore] = useState(0);

  return (
    <MainPageStyled>
      <HeaderContainer score={score} numPairs={numPairs} />
      <BtnWrapper>
        <Button
          text="Easy"
          color="var(--sub-color)"
          onClick={() => handleButtonClick(5)}
        />
        <Button
          text="Normal"
          color="var(--sub-color)"
          onClick={() => handleButtonClick(7)}
        />
        <Button
          text="Hard"
          color="var(--sub-color)"
          onClick={() => handleButtonClick(9)}
        />
      </BtnWrapper>
      <CardgameContainer numPairs={numPairs} setScore={setScore} />
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem;
`;
export default MainPage;
