import HeaderContainer from "@/components/HeaderContainer";
import { styled } from "styled-components";
import CardgameContainer from "@/components/Card/CardGameContainer";

const MainPage = () => {
  return (
    <MainPageStyled>
      <HeaderContainer />
      <CardgameContainer />
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
`;
export default MainPage;
