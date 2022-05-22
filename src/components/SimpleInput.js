import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef=useRef();
  const [enteredNameIsvalid,setenteredNameIsvalid]=useState(false);
  const [enteredNameTouched,setEnteredNameTouched]=useState(false);

  useEffect(()=>{
    console.log('Input Name is valid!');
  },[enteredNameIsvalid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const onFormSubbmissionHandler=event=>{
    event.preventDefault();
    console.log(enteredName);
    setEnteredNameTouched(true);
    if(enteredName===''){
      setenteredNameIsvalid(false);
      return;
    }
    setenteredNameIsvalid(true);
    const enteredValue=nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  }

  const nameInputIsInValid = !enteredNameIsvalid && enteredNameTouched;

  const nameInputClass=nameInputIsInValid? 'form-control invalid':'form-control';
  
  return (
    <form onSubmit={onFormSubbmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {nameInputIsInValid && <p className="error-text">Please Enter a valid Name.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
