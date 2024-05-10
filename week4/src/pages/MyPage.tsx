import { styled } from "styled-components";
import MyInfo from "@/components/myInfo/MyInfo";

const MyPage = () => {
  return (
    <MyPageWrapper>
      <MyInfo />
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MyPage;
