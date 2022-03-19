import reactdom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";
import react from "react";
const ErrorModel = (props) => {
	// So basically i split my model into two saparate component backdrop and model overlay as they will work in portals much easier
	const Backdrop = (props) => {
		return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
	};
	const ModelOverlay = (props) => {
		return (
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onConfirm}>Okay</Button>
				</footer>
			</Card>
		);
	};
	return (
		<>
			{reactdom.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{reactdom.createPortal(
				<ModelOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
};
export default ErrorModel;
