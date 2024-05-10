import { styled } from "styled-components";

interface InputFormInterface {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorText?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
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
    <FormInput>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </InputWrapper>
    </FormInput>
  );
};

const FormInput = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  padding: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 3.5rem;
`;

const Input = styled.input`
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.sub_color};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export default InputForm;
