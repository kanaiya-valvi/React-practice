const Options = (props) => {
  return (
    <option value={props.values} key={props.id}>
      {props.values}
    </option>
  );
};
export default Options;
