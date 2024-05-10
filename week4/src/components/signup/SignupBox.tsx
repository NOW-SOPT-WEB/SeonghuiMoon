import { styled } from "styled-components";
import Button from "@/components/button/Button";
import InputForm from "@/components/input/Input";
import useInputVaild from "@/hooks/useInputVaild";
import { axiosJoin } from "@/api/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupBox = () => {
  const navigate = useNavigate();
  const onClickLoginBtn = async () => {
    try {
      const response = await axiosJoin(userId, userPw, userName, userPn);
      if (response.data.code === 201) {
        navigate("/main");
      }
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
        />
        <InputForm
          label="닉네임"
          type="text"
          id="userNickname"
          name="userNickname"
          value={userName}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />
        <InputForm
          label="전화번호"
          type="text"
          id="userPn"
          name="userPn"
          value={userPn}
          onChange={handlePnChange}
          onBlur={handlePnBlur}
          detailText={userPnDetail}
        />
      </LoginFormWrapper>
      <LoginBtnWrapper>
        <Button
          onClick={onClickLoginBtn}
          text="회원가입"
          color="var(--sub-color)"
          isClicked={false}
        />
        <Button
          onClick={onClickLoginBtn}
          text="뒤로가기"
          color="var(--sub-color)"
          isClicked={true}
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
