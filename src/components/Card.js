import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.title}</h2>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Card;
