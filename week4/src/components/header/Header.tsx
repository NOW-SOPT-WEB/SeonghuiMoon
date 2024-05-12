import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <TilteStyled>메인 페이지</TilteStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.main_color};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TilteStyled = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;
export default Header;
