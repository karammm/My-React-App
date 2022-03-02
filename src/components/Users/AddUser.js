import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
const AddUser = (props) => {
	const addUser = (event) => {
		event.preventDefault();
	};
	return (
		<Card className={classes.input}>
			<form onSubmit={addUser}>
				{/* htmlFor is a prop name for assigning for attribute toa a label */}
				<label htmlFor="username">User Name</label>
				<input id="username" type="text" />
				<label htmlFor="age">Age (years)</label>
				<input id="age" type="number" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};
export default AddUser;
