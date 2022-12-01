import Inputs from "./Inputs";
import useInput from "../hooks/InputValidation";
const Form = () => {
  const {
    value: enterdName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHenders: nameCahangedHender,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emialIsValid,
    hasError: emailHasError,
    valueChangeHenders: emailChangeHender,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((email) => email.includes("@"));
  const inputfild = [
    {
      key_no: 1,
      name: "name",
      type: "text",
      id: "name",
      change: nameCahangedHender,
      value: enterdName,
      valid: nameIsValid,
      blure: nameBlurHandler,
      error: nameHasError,
    },
    {
      key_no: 2,
      name: "Email",
      type: "email",
      id: "email",
      valid: emialIsValid,
      change: emailChangeHender,
      value: enteredEmail,
      blure: emailBlurHandler,
      error: emailHasError,
    },
  ];
  let formIsValid = false;
  if (nameIsValid && emialIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();
    if (nameIsValid && emialIsValid) {
      console.log(enterdName, enteredEmail);
      resetNameHandler();
      resetEmailHandler();
    } else {
      console.log("somthig is wrong!!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {inputfild.map((data) => (
        <Inputs
          key={data.key_no}
          type={data.type}
          valid={data.valid}
          id={data.id}
          blure={data.blure}
          change={data.change}
          name={data.name}
          value={data.value}
          error={data.error}
        />
      ))}
      <button type="submit" disabled={!formIsValid}>
        submit
      </button>
    </form>
  );
};
export default Form;
