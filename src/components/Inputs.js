import "./inputvalid.css";
const Inputs = (props) => {
  const blur = props.error ? "blur" : "";
  return (
    <div key={props.keys}>
      <label htmlFor={props.id}>{props.name}:</label>
      <br />
      <input
        className={blur}
        type={props.type}
        id={props.id}
        onChange={props.change}
        name={props.name}
        onBlur={props.blure}
        value={props.value}
      />
      {props.error && <small>Inputs are not valid</small>}
    </div>
  );
};
export default Inputs;
