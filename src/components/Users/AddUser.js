import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error,setError]=useState();
	const addUser = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title:'Invalid Input',
				message:'Please enter a valid name and age (non empty values).'
			});
			return;
		} else if (+enteredAge < 1) {
			setError({
				title:'Invalid Age',
				message:'Please enter a valid age'
			})
			return;
		}
		props.onAddUser(enteredUserName, enteredAge);
		setEnteredAge("");
		setEnteredUserName("");
	};
	const changeUserName = (event) => {
		setEnteredUserName(event.target.value);
	};
	const ageChange = (event) => {
		setEnteredAge(event.target.value);
	};
	const errorHandler=()=>{
		setError(null);
	}
	return (
		<div>
			{/* If error is a thing and if it is thn error else using and and model if error would be undefinfed thn nothing will be rendered */}
			{error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
		</div>
	);
};
export default AddUser;
