import { styled } from "styled-components";
import Button from "@/components/button/Button";
import { axiosPassword } from "@/api/axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PwChange = () => {
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setNewPasswordVerification] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const onClickBtn = async () => {
    if (!previousPassword) {
      alert("기존 비밀번호를 입력하세요.");
      return;
    }
    if (!newPassword) {
      alert("새로운 비밀번호를 입력하세요.");
      return;
    }
    if (!newPasswordVerification) {
      alert("새로운 비밀번호 확인란을 입력하세요.");
      return;
    }
    if (newPassword !== newPasswordVerification) {
      alert("입력한 두 비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      if (userId) {
        const response = await axiosPassword(
          previousPassword,
          newPassword,
          newPasswordVerification,
          userId
        );
        if (response.code === 200) {
          alert("비밀번호 변경이 완료되었습니다.");
          navigate("/");
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response)
        alert(error.response.data.message);
    }
  };

  return (
    <PwChangeWrapper>
      <PwForm>
        <Label htmlFor="previousPassword">기존 비밀번호</Label>
        <Input
          type="text"
          id="previousPassword"
          name="previousPassword"
          onChange={(e) => setPreviousPassword(e.target.value)}
        />
      </PwForm>
      <PwForm>
        <Label htmlFor="newPassword">새로운 비밀번호</Label>
        <Input
          type="text"
          id="newPassword"
          name="newPassword"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </PwForm>
      <PwForm>
        <Label htmlFor="newPasswordVerification">비밀번호 확인</Label>
        <Input
          type="text"
          id="newPasswordVerification"
          name="newPasswordVerification"
          onChange={(e) => setNewPasswordVerification(e.target.value)}
        />
      </PwForm>
      <Button
        onClick={onClickBtn}
        text="비밀번호 변경"
        color="var(--sub-color)"
        isClicked={true}
      />
    </PwChangeWrapper>
  );
};

const PwChangeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PwForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  width: 8rem;
`;

const Input = styled.input`
  width: 60%;
  height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.sub_color};
  border-radius: 0.5rem;
`;
export default PwChange;
