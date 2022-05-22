import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef=useRef();
  const [enteredNameIsvalid,setenteredNameIsvalid]=useState(true);
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }
  const onFormSubbmissionHandler=event=>{
    event.preventDefault();
    console.log(enteredName);
    if(enteredName===''){
      setenteredNameIsvalid(false);
      return;
    }
    setenteredNameIsvalid(true);
    const enteredValue=nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  }
  const nameInputClass=enteredNameIsvalid? 'form-control':'form-control invalid';
  return (
    <form onSubmit={onFormSubbmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        {!enteredNameIsvalid && <p className="error-text">Please Enter a valid Name.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
