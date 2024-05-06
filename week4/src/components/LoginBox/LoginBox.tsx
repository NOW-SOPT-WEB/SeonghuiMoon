import { styled } from "styled-components";
import MaruImg from "@/assets/images/maru1.png";
import Button from "@/components/button/Button";

const LoginBox = () => {
  const onClickBtn = () => {};
  return (
    <LoginBoxStyled>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginLogo src={MaruImg}></LoginLogo>
      <LoginFormWrapper>
        <LoginForm>
          <Label htmlFor="userId">ID</Label>
          <Input type="text" id="userId" name="userId" />
        </LoginForm>
        <LoginForm>
          <Label htmlFor="password">PW</Label>
          <Input type="password" id="password" name="password" />
        </LoginForm>
      </LoginFormWrapper>
      <LoginBtnWrapper>
        <Button
          onClick={onClickBtn}
          text="로그인"
          color="var(--sub-color)"
          isClicked={false}
        />
        <Button
          onClick={onClickBtn}
          text="회원가입"
          color="var(--sub-color)"
          isClicked={true}
        />
      </LoginBtnWrapper>
    </LoginBoxStyled>
  );
};

const LoginBoxStyled = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.main_color};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const LoginTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

const LoginLogo = styled.img`
  width: 7rem;
`;

const LoginFormWrapper = styled.div`
  width: 100%;
`;

const LoginBtnWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.sub_color};
  border-radius: 0.5rem;
`;
export default LoginBox;
