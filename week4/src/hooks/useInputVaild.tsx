import { useState } from "react";

interface useInputVaildInterface {
  value: string;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  detail: string;
}

type ValidType = "userId" | "userPw" | "userName" | "userPn";

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

  const DetailText = (type: ValidType) => {
    switch (type) {
      case "userPw":
        return "비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다";
      case "userPn":
        return "전화번호 형식은 010-****-****입니다";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError(validate(inputValue, type));
  };

  const [detail] = useState(DetailText(type));

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setError(validate(e.target.value, type));
  };

  return { value, error, detail, handleChange, handleBlur };
}

export default useInputVaild;
