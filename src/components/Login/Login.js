import React, { useEffect, useState, useContext, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Store/auth-context";
import Input from "../UI/Input/Input";

//this is outside of the component function
//We did so bcz inside this reducer function
//we won't need any data thats generated inside of the component function
const emailReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: prevState.value, isValid: prevState.value.includes("@") };
	}
	//now return the state which could be an object
	return { value: "", isValid: false };
};
const passwordReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "INPUT_BLUR") {
		return {
			value: prevState.value,
			isValid: prevState.value.trim().length > 6,
		};
	}
	return { value: "", isValid: false };
};

const Login = (pops) => {
	const authCtx = useContext(AuthContext);
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	//object destructuring
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;
	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("Checking form validity");
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);
		return () => {
			console.log("CLEANUP");
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
		// setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
		// setFormIsValid(
		// 	emailState.isValid && event.target.value.trim().length > 6
		// );
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authCtx.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					id="email"
					label="E-Mail"
					type="email"
					isValid={emailIsValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					isValid={passwordIsValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
