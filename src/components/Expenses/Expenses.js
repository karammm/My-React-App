import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2019");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const FilteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	let expensesContent = <p>No Expense Found!!!</p>;
	if (FilteredExpense.length > 0) {
		expensesContent = FilteredExpense.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}
	return (
		<Card className="expenses">
			{/* controlling own custom component */}
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent}
		</Card>
	);
};
export default Expenses;
