 import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>Feb 24th 2022</div>
            <div className='expense-item__description'>
                <h2>Carr</h2>
                <div className='expense-item__price'>123123</div>
            </div>
        </div>
    );
}
export default ExpenseItem;