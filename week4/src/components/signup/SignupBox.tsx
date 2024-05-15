import { styled } from "styled-components";
import Button from "@/components/button/Button";
import InputForm from "@/components/input/Input";
import useInputVaild from "@/hooks/useInputVaild";
import { axiosJoin } from "@/api/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { validatePassword } from "@/utils/validatePassword";
import { validatePhoneNumber } from "@/utils/formatPhoneNumber";

const SignupBox = () => {
  const navigate = useNavigate();

  const userIdRef = useRef<HTMLInputElement>(null);
  const userPwRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const userPnRef = useRef<HTMLInputElement>(null);

  const [userIdError, setUserIdError] = useState(false);
  const [userPwError, setUserPwError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [userPnError, setUserPnError] = useState(false);

  const onClickLoginBtn = async () => {
    setUserIdError(false);
    setUserPwError(false);
    setUserNameError(false);
    setUserPnError(false);

    if (!userId.trim()) {
      setUserIdError(true);
      userIdRef.current?.focus();
      alert("ID를 입력해주세요.");
      return;
    } else if (!userPw.trim()) {
      setUserPwError(true);
      userPwRef.current?.focus();
      alert("비밀번호를 입력해주세요.");
      return;
    } else if (!userName.trim()) {
      setUserNameError(true);
      userNameRef.current?.focus();
      alert("닉네임을 입력해주세요.");
      return;
    } else if (!userPn.trim()) {
      setUserPnError(true);
      userPnRef.current?.focus();
      alert("전화번호를 입력해주세요.");
      return;
    }

    const passwordError = validatePassword(userPw);
    if (passwordError) {
      alert(passwordError);
      return;
    }

    const phoneNumberError = validatePhoneNumber(userPn);
    if (phoneNumberError) {
      alert(phoneNumberError);
      return;
    }

    try {
      const response = await axiosJoin(userId, userPw, userName, userPn);
      const headerId = response.headers["location"];
      alert("회원가입이 완료되었습니다.");
      navigate(`/main/${headerId}`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response)
        alert(error.response.data.message);
    }
  };

  const {
    value: userId,
    handleChange: handleIdChange,
    handleBlur: handleIdBlur,
  } = useInputVaild("", "userId");

  const {
    value: userPw,
    detail: userPwDetail,
    handleChange: handlePwChange,
    handleBlur: handlePwBlur,
  } = useInputVaild("", "userPw");

  const {
    value: userName,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
  } = useInputVaild("", "userName");

  const {
    value: userPn,
    detail: userPnDetail,
    handleChange: handlePnChange,
    handleBlur: handlePnBlur,
  } = useInputVaild("", "userPn");

  return (
    <LoginBoxStyled>
      <LoginTitle>회원가입</LoginTitle>
      <LoginFormWrapper>
        <InputForm
          label="ID"
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleIdChange}
          onBlur={handleIdBlur}
          ref={userIdRef}
          isFocus={userIdError}
        />
        <InputForm
          label="PW"
          type="text"
          id="userPw"
          name="userPw"
          value={userPw}
          onChange={handlePwChange}
          onBlur={handlePwBlur}
          detailText={userPwDetail}
          ref={userPwRef}
          isFocus={userPwError}
        />
        <InputForm
          label="닉네임"
          type="text"
          id="userNickname"
          name="userNickname"
          value={userName}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          ref={userNameRef}
          isFocus={userNameError}
        />
        <InputForm
          label="전화번호"
          type="tel"
          id="userPn"
          name="userPn"
          value={userPn}
          onChange={handlePnChange}
          onBlur={handlePnBlur}
          detailText={userPnDetail}
          ref={userPnRef}
          isFocus={userPnError}
        />
      </LoginFormWrapper>
      <LoginBtnWrapper>
        <Button
          onClick={onClickLoginBtn}
          text="회원가입"
          color="var(--sub-color)"
        />
        <Button
          onClick={() => navigate(-1)}
          text="뒤로가기"
          color="var(--sub-color)"
        />
      </LoginBtnWrapper>
    </LoginBoxStyled>
  );
};

const LoginBoxStyled = styled.div`
  width: 40rem;
  height: 35rem;
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

const LoginFormWrapper = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LoginBtnWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export default SignupBox;
