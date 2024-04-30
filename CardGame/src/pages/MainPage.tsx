import React from "react";
import HeaderContainer from "@/components/HeaderContainer";
import { styled } from "styled-components";

const MainPage = () => {
  return (
    <MainPageStyled>
      <HeaderContainer />
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
`;
export default MainPage;
