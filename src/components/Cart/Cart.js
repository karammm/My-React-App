import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
					//bind preconfigures a fn for future execution ans allows you to preconfigure the argument
				/>
			))}
		</ul>
	);
	return (
		<Model onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.order}>Order</button>}
			</div>
		</Model>
	);
};
export default Cart;
