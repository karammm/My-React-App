import classes from "./Input.module.css";
// {type:'text'}
const Input = (props) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			{/* type="text"  */}
			<input {...props.input} />
		</div>
	);
};
export default Input;
