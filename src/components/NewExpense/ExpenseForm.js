import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpanseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	//Use one state insted passing object
	// const [userInput,setUserInput]=useState({
	// 	enteredTitle:'',
	// 	enteredAmount:'',
	// 	enteredDate:''
	// });
	const titleChange = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle:event.target.value
		// })
		// setUserInput((prevState)=>{
		// 	return {...userInput,setUserInput:event.target.value};
		// });
	};
	const amountChange = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount:event.target.value
		// })
	};
	const dateChange = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate:event.target.value
		// })
	};
	const submitForm = (event) => {
		event.preventDefault(); //To prevent default method that not to reload page again
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		console.log(expenseData);
	};
	return (
		<form onSubmit={submitForm}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2021-01-01"
						max="2022-12-31"
						value={enteredDate}
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
