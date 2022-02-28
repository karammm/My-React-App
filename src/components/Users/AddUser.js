const AddUser = (props) => {
	const addUser = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={addUser}>
			{/* htmlFor is a prop name for assigning for attribute toa a label */}
			<label htmlFor="username">User Name</label>
			<input id="username" type="text" />
			<label htmlFor="age">Age (years)</label>
			<input id="age" type="number" />
			<button type="submit">Add User</button>
		</form>
	);
};
export default AddUser;
