import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //these two lines of code works together
  const enteredNameIsvalid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsvalid && enteredNameTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const onFormSubbmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredNameTouched(true);
    if (!enteredNameIsvalid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputClass = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onFormSubbmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputIsInValid && <p className="error-text">Please Enter a valid Name.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
