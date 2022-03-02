import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const addUser = (event) => {
		event.preventDefault();
		console.log(enteredUserName, enteredAge);
		setEnteredAge('');
		setEnteredUserName('');
	};
	const changeUserName = (event) => {
		setEnteredUserName(event.target.value);
	};
	const ageChange = (event) => {
		setEnteredAge(event.target.value);
	};
	return (
		<Card className={classes.input}>
			<form onSubmit={addUser}>
				{/* htmlFor is a prop name for assigning for attribute toa a label */}
				<label htmlFor="username">User Name</label>
				<input
					id="username"
					type="text"
					onChange={changeUserName}
					value={enteredUserName}
					placeholder="Please Enter User Name"
				/>
				<label htmlFor="age">Age (years)</label>
				<input
					id="age"
					type="number"
					onChange={ageChange}
					value={enteredAge}
					placeholder="Please provide age"
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};
export default AddUser;
