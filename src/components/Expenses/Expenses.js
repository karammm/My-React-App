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
	return (
		<Card className="expenses">
			{/* controlling own custom component */}
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};
export default Expenses;
