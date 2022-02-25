import "./NewExpense.css";
import ExpanseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler=(enteredExpensedata)=>{
        const entertdData={
            ...enteredExpensedata,
            id:Math.random().toString()
        };
        props.onAddExpanse(entertdData);
    }
	return (
		<div className="new-expense">
			<ExpanseForm onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	);
};
export default NewExpense;
