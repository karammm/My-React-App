import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpanseForm = () => {
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");
	//Use one state insted passing object
	const [userInput,setUserInput]=useState({
		enteredTitle:'',
		enteredAmount:'',
		enteredDate:''
	});
	const titleChange = (event) => {
		// setEnteredTitle(event.target.value);
		setUserInput({
			...userInput,
			enteredTitle:event.target.value
		})
	};
	const amountChange = () => {
		// setEnteredAmount(event.target.value);
		setUserInput({
			...userInput,
			enteredAmount:event.target.value
		})
	};
	const dateChange = () => {
		// setEnteredDate(event.target.value);
		setUserInput({
			...userInput,
			enteredDate:event.target.value
		})
	};
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" onChange={amountChange} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2021-01-01"
						max="2022-12-31"
						onChange={dateChange}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};
export default ExpanseForm;
