import { styled } from "styled-components";
import Button from "@/components/button/Button";

interface HeaderInterface {
  score: number;
  numPairs: number;
  onClickReset: () => void;
}

const Header = ({ score, numPairs, onClickReset }: HeaderInterface) => {
  return (
    <HearderStyled>
      <TitleBoxStyled>
        <TextStyled>마루 카드 맞추기</TextStyled>
        <TextStyled>
          {score} / {numPairs}
        </TextStyled>
      </TitleBoxStyled>
      <BtnWrapper>
        <Button
          text="Reset"
          color="var(--point-color)"
          onClick={onClickReset}
        />
      </BtnWrapper>
    </HearderStyled>
  );
};

const HearderStyled = styled.header`
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

const TextStyled = styled.div`
  font-weight: bold;
`;

const BtnWrapper = styled.div`
  position: fixed;
  right: 2rem;
`;
export default Header;
