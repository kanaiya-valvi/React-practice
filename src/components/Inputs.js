const Inputs = (props) => {
  console.log(props.data)
  return (
    // <div key={props.keys}>
    //   <label htmlFor={props.id}>{props.name}:</label>
    //   <br />
    <input key={props.data} type={props.type} id={props.id} name={props.name} />
    // </div>
  );
};
export default Inputs;
