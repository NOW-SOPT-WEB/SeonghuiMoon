import { styled } from "styled-components";
import Button from "@/components/button/Button";

const PwChange = () => {
  const onClickBtn = () => {};
  return (
    <PwChangeWrapper>
      <PwForm>
        <Label htmlFor="userId">기존 비밀번호</Label>
        <Input type="text" id="userId" name="userId" />
      </PwForm>
      <PwForm>
        <Label htmlFor="password">새로운 비밀번호</Label>
        <Input type="password" id="password" name="password" />
      </PwForm>
      <PwForm>
        <Label htmlFor="userId">비밀번호 확인</Label>
        <Input type="text" id="userId" name="userId" />
      </PwForm>
      <Button
        onClick={onClickBtn}
        text="비밀번호 변경"
        color="var(--sub-color)"
        isClicked={false}
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
