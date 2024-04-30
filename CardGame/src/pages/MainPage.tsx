import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Header from "@/components/Header";
import CardgameContainer from "@/components/Card/CardGameContainer";
import Button from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import {
  GAME_DIFFICULTY_EASY,
  GAME_DIFFICULTY_NORMAL,
  GAME_DIFFICULTY_HARD,
} from "@/constants/gameDifficulty";

const MainPage = () => {
  const [numPairs, setNumPairs] = useState(GAME_DIFFICULTY_EASY);
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (score === numPairs) {
      setShowModal(true);
    }
  }, [score, numPairs]);

  const handleReset = () => {
    setScore(0);
    setReset((prev) => !prev);
  };

  const onClickNum = (pairs: number) => {
    setNumPairs(pairs);
    handleReset();
  };

  const CloseModal = () => {
    setShowModal(false);
    handleReset();
  };

  return (
    <MainPageStyled>
      <Header score={score} numPairs={numPairs} onClickReset={handleReset} />
      <BtnWrapper>
        <Button
          text="Easy"
          color="var(--sub-color)"
          onClick={() => onClickNum(GAME_DIFFICULTY_EASY)}
        />
        <Button
          text="Normal"
          color="var(--sub-color)"
          onClick={() => onClickNum(GAME_DIFFICULTY_NORMAL)}
        />
        <Button
          text="Hard"
          color="var(--sub-color)"
          onClick={() => onClickNum(GAME_DIFFICULTY_HARD)}
        />
      </BtnWrapper>
      <CardgameContainer
        numPairs={numPairs}
        setScore={setScore}
        reset={reset}
      />
      {showModal && (
        <Modal onClose={CloseModal} modalText="게임을 클리어하였습니다!" />
      )}
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
