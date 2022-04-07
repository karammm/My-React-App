import Model from "../UI/Model";
import classes from "./Cart.module.css";
const Cart = (props) => {
	const cartItems = (
		<ul className={classes["cart-items"]}>
			{[{ id: "c1", name: "karam", amount: 2, price: 10.0 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Model>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.63</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]}>Close</button>
				<button className={classes.order}>Order</button>
			</div>
		</Model>
	);
};
export default Cart;
