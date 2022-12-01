const Inputs = (props) => {
  return (
    <div key={props.keys}>
      <label htmlFor={props.id}>{props.name}:</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        onChange={props.change}
        name={props.name}
        value={props.value}
      />
    </div>
  );
};
export default Inputs;
