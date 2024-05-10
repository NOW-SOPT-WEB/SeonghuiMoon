import { styled } from "styled-components";

interface InputFormInterface {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorText?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputForm = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  errorText,
  onBlur,
}: InputFormInterface) => {
  return (
    <InputFormStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorText && <ErrorTextStyled>{errorText}</ErrorTextStyled>}
      </InputWrapper>
    </InputFormStyled>
  );
};

const InputFormStyled = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  padding: 0.5rem;
  width: 100%;
`;

const LabelStyled = styled.label`
  font-size: 1.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 3.5rem;
`;

const InputStyled = styled.input`
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.sub_color};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ErrorTextStyled = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export default InputForm;
