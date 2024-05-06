import LoginBox from "@/components/LoginBox/LoginBox";
import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginBox />
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background_color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
