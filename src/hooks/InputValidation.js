import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnterValue] = useState("");

  const valueIsValid = validateValue(enteredValue);

  const valueChangeHenders = (event) => {
    setEnterValue(event.target.value);
  };

  return { value: enteredValue, valueChangeHenders, isValid: valueIsValid };
};

export default useInput;
