import { useState } from "react";

interface useInputVaildInterface {
  value: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type ValidType = "userId" | "userPw";

function useInputVaild(
  initialValue: string,
  type: ValidType
): useInputVaildInterface {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = (inputValue: string, type: ValidType): string => {
    switch (type) {
      case "userId":
        return !inputValue.trim() ? "ID를 입력해주세요" : "";
      case "userPw":
        return !inputValue.trim() ? "비밀번호를 입력해주세요" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError(validate(inputValue, type));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setError(validate(e.target.value, type));
  };

  return { value, error, handleChange, handleBlur };
}

export default useInputVaild;
