import { styled } from "styled-components";
import Header from "@/components/header/Header";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Header />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background_color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default MainPage;
