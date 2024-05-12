import { styled } from "styled-components";
import MaruImg from "@/assets/images/maru1.png";
import Button from "@/components/button/Button";
import InputForm from "@/components/input/Input";
import useInputVaild from "@/hooks/useInputVaild";
import { axiosLogin } from "@/api/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginBox = () => {
  const navigate = useNavigate();

  const onClickLoginBtn = async () => {
    let hasError = false;

    if (!userId.trim()) {
      hasError = true;
      setUserIdError("ID를 입력해주세요");
    } else if (!userPw.trim()) {
      hasError = true;
      setUserPwError("비밀번호를 입력해주세요");
    }
    if (!hasError) {
      try {
        const response = await axiosLogin(userId, userPw);
        if (response.data.code === 200) {
          const headerId = response.headers["location"];
          alert("로그인이 완료되었습니다.");
          navigate(`/main/${headerId}`);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response)
          alert(error.response.data.message);
      }
    }
  };

  const onClickSignUpBtn = () => {
    navigate("/signup");
  };

  const {
    value: userId,
    error: userIdError,
    handleChange: handleIdChange,
    handleBlur: handleIdBlur,
    setError: setUserIdError,
  } = useInputVaild("", "userId");

  const {
    value: userPw,
    error: userPwError,
    handleChange: handlePwChange,
    handleBlur: handlePwBlur,
    setError: setUserPwError,
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
          onChange={handleIdChange}
          errorText={userIdError}
          onBlur={handleIdBlur}
        />
        <InputForm
          label="PW"
          type="text"
          id="userPw"
          name="userPw"
          value={userPw}
          onChange={handlePwChange}
          errorText={userPwError}
          onBlur={handlePwBlur}
        />
      </LoginFormWrapper>
      <LoginBtnWrapper>
        <Button
          onClick={onClickLoginBtn}
          text="로그인"
          color="var(--sub-color)"
        />
        <Button
          onClick={onClickSignUpBtn}
          text="회원가입"
          color="var(--sub-color)"
        />
      </LoginBtnWrapper>
    </LoginBoxStyled>
  );
};

const LoginBoxStyled = styled.div`
  width: 24rem;
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
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const LoginBtnWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export default LoginBox;
