import { styled } from "styled-components";
import Button from "../button/Button";

interface ModalInterface {
  modalText: string;
  onClose: () => void;
}

const Modal = ({ modalText, onClose }: ModalInterface) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalText>{modalText}</ModalText>
        <Button
          text="다시 게임하기"
          color="var(--sub-color)"
          onClick={onClose}
        />
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 30%;
  height: 25%;
  background-color: var(--main-color);
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalText = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export default Modal;
