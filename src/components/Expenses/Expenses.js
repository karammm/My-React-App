import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2019");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const FilteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			{/* controlling own custom component */}
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList items={FilteredExpense} />
		</Card>
	);
};
export default Expenses;
