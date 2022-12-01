import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHenders = (event) => {
    setEnterValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHenders,
    hasError,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
