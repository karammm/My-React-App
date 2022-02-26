import "./NewExpense.css";
import ExpanseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpensedata) => {
		const entertdData = {
			...enteredExpensedata,
			id: Math.random().toString(),
		};
		props.onAddExpanse(entertdData);
        setIsEditing(false);
	};
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpanseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};
export default NewExpense;
