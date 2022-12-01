import { useState } from "react";
const useInput = () => {
  const [enterValue, setEnterValue] = useState("");
  const [valueIsValid, setValueIsValid] = useState("false");
};

export default useInput;
