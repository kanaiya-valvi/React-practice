import Inputs from "./Inputs";
const Form = () => {
  const inputfild = [
    { key_no: 1, name: "name", type: "text", id: "name", value: "" },
    { key_no: 2, name: "Email", type: "email", id: "email", value: "" },
    {
      key_no: 3,
      name: "Password",
      type: "password",
      id: "password",
      value: "",
    },
  ];

  return inputfild.map((data, mov) => (
    <form>
      <Inputs
        data={mov.toString()}
        type={data.type}
        id={data.id}
        name={data.name}
      />
    </form>
  ));
};
export default Form;
