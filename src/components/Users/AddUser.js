import { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
	// When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();
	const addUser = (event) => {
		event.preventDefault();
		const uname = nameInputRef.current.value;
		const uage = ageInputRef.current.value;
		if (uname.trim().length === 0 || uage.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non empty values).",
			});
			return;
		} else if (+uage < 1) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age",
			});
			return;
		}
		props.onAddUser(uname, uage);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<>
			{/* If error is a thing and if it is thn error else using and and model if error would be undefinfed thn nothing will be rendered */}
			{error && (
				<ErrorModel
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUser}>
					{/* htmlFor is a prop name for assigning for attribute toa a label */}
					<label htmlFor="username">User Name</label>
					<input
						id="username"
						type="text"
						placeholder="Please Enter User Name"
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age (years)</label>
					<input
						id="age"
						type="number"
						placeholder="Please provide age"
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};
export default AddUser;
