import classes from "./Card.module.css";
const Card = (props) => {
	return (
		// Incomming classes and own classess css
		<div className={`${classes.card} ${props.className}`}>
			{props.children}
		</div>
	);
};
export default Card;
