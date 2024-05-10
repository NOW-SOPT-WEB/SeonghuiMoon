import { styled } from "styled-components";
import MaruImg from "@/assets/images/maru1.png";
import Button from "@/components/button/Button";
import InputForm from "@/components/input/Input";
import useInputVaild from "@/hooks/useInputVaild";

const LoginBox = () => {
  const onClickBtn = () => {};

  const {
    value: userId,
    error: userIdError,
    handleChange: handleUserIdChange,
    handleBlur: handleUserIdBlur,
  } = useInputVaild("", "userId");

  const {
    value: userPw,
    error: userPwError,
    handleChange: handlePwChange,
    handleBlur: handlePasswordBlur,
  } = useInputVaild("", "userPw");

  return (
    <LoginBoxStyled>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginLogo src={MaruImg} alt="loginLogo"></LoginLogo>
      <LoginFormWrapper>
        <InputForm
          label="ID"
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleUserIdChange}
          errorText={userIdError}
          onBlur={handleUserIdBlur}
        />
        <InputForm
          label="PW"
          type="text"
          id="userPw"
          name="userPw"
          value={userPw}
          onChange={handlePwChange}
          errorText={userPwError}
          onBlur={handlePasswordBlur}
        />
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
  display: flex;
  flex-direction: column;
`;

const LoginBtnWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export default LoginBox;
