import { styled } from "styled-components";
import Button from "@/components/button/Button";

interface HeaderInterface {
  onClickResetBtn: () => void;
  score: number;
  numPairs: number;
}

const Header = ({ onClickResetBtn, score, numPairs }: HeaderInterface) => {
  return (
    <HearderStyled>
      <TitleBoxStyled>
        <TitleStyled>마루 카드 맞추기</TitleStyled>
        <ScoreStyled>
          {score} / {numPairs}
        </ScoreStyled>
      </TitleBoxStyled>
      <BtnWrapper>
        <Button
          text="Reset"
          color="var(--sub-color)"
          onClick={onClickResetBtn}
        />
      </BtnWrapper>
    </HearderStyled>
  );
};

const HearderStyled = styled.div`
  width: 100%;
  height: 9rem;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  text-align: center;
  line-height: 1.2;
`;

const TitleStyled = styled.div``;

const ScoreStyled = styled.div``;
const BtnWrapper = styled.div`
  position: fixed;
  right: 2rem;
`;
export default Header;
