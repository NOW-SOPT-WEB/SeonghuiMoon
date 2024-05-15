import { styled } from "styled-components";
import Button from "@/components/button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { axiosInfo } from "@/api/axios";
import PwChange from "@/components/pwChange/PwChange";

const MyInfo = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const onClickSignUpBtn = () => {
    navigate(`/main/${userId}`);
  };
  const [showPwChange, setShowPwChange] = useState(false);
  const onClickTogglePwChange = () => setShowPwChange(!showPwChange);

  const [userInfo, setUserInfo] = useState({
    authenticationId: "",
    nickname: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInfo(userId);
        if (response.data) {
          setUserInfo({
            authenticationId: response.data.authenticationId,
            nickname: response.data.nickname,
            phone: response.data.phone,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) fetchUserInfo();
  }, [userId]);

  return (
    <LoginBoxStyled>
      <LoginTitle>마이 페이지</LoginTitle>
      <PwChangeWrapper>
        <LoginForm>
          <Label htmlFor="userId">ID</Label>
          <BasicInfo>{userInfo.authenticationId}</BasicInfo>
        </LoginForm>
        <LoginForm>
          <Label htmlFor="password">닉네임</Label>
          <BasicInfo>{userInfo.nickname}</BasicInfo>
        </LoginForm>
        <LoginForm>
          <Label htmlFor="userId">전화번호</Label>
          <BasicInfo>{userInfo.phone}</BasicInfo>
        </LoginForm>
      </PwChangeWrapper>
      <Button
        onClick={onClickTogglePwChange}
        text={showPwChange ? "비밀번호 변경⏶" : "비밀번호 변경 ⏷"}
        color="var(--main-color)"
      />
      {showPwChange && <PwChange />}
      <LoginBtnWrapper>
        <Button
          onClick={onClickSignUpBtn}
          text="홈으로"
          color="var(--sub-color)"
        />
      </LoginBtnWrapper>
    </LoginBoxStyled>
  );
};

const LoginBoxStyled = styled.div`
  width: 18rem;
  height: 38rem;
  background-color: ${({ theme }) => theme.colors.main_color};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4rem;
`;

const LoginTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

const PwChangeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  width: 8rem;
`;

const BasicInfo = styled.div``;
export default MyInfo;