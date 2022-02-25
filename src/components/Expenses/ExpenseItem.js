import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {useState} from 'react';

function ExpenseItem(props){
    //Array distructuring ==> order matters
    //First one should describes the value and the second should update the value
    const [title,setTitle]= useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;