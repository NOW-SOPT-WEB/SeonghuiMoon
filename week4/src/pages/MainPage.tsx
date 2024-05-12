import { styled } from "styled-components";
import Header from "@/components/header/Header";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const onClickSignUpBtn = () => {
    navigate("/signup");
  };
  const { userId } = useParams();
  const onClickMypageBtn = () => {
    navigate(`/mypage/${userId}`);
  };

  return (
    <MainPageWrapper>
      <Header />
      <LoginBtnWrapper>
        <Button
          onClick={onClickMypageBtn}
          text="내 정보"
          color="var(--sub-color)"
          isClicked={false}
        />
        <Button
          onClick={onClickSignUpBtn}
          text="회원가입"
          color="var(--sub-color)"
          isClicked={true}
        />
      </LoginBtnWrapper>
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

const LoginBtnWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;
export default MainPage;
