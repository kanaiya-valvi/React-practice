import Inputs from "./Inputs";
import useInput from "../hooks/InputValidation";
const Form = () => {
  const {
    value: enterdName,
    isValid: nameIsValid,
    valueChangeHenders: nameCahangedHender,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emialIsValid,
    valueChangeHenders: emailChangeHender,
  } = useInput((value) => value.includes("@"));
  const inputfild = [
    {
      key_no: 1,
      name: "name",
      type: "text",
      id: "name",
      change: nameCahangedHender,
      value: enterdName,
    },
    {
      key_no: 2,
      name: "Email",
      type: "email",
      id: "email",
      change: emailChangeHender,
      value: enteredEmail,
    },
    // {
    //   key_no: 3,
    //   name: "Password",
    //   type: "password",
    //   id: "password",
    //   cahnge: valueChangeHenders,
    //   value: "",
    // },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (nameIsValid && emialIsValid) console.log(enterdName, enteredEmail);
    else console.log("somthig is Wrong!!");
  };

  return (
    <form onSubmit={submitHandler}>
      {inputfild.map((data) => (
        <Inputs
          key={data.key_no}
          type={data.type}
          id={data.id}
          change={data.change}
          name={data.name}
          value={data.value}
        />
      ))}
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
