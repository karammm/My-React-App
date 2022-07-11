import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitHandler = (userData) =>{
		fetch('https://react-app-d7127-default-rtdb.firebaseio.com/orders.json',{
			method:'POST',
			body: JSON.stringify({
				user: userData,
				orderedItem: cartCtx.items
			})
		});
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

	const modelActions = <div className={classes.actions}>
		<button className={classes["button--alt"]} onClick={props.onClose}>
			Close
		</button>
		{hasItems && <button className={classes.order} onClick={orderHandler} >Order</button>}
	</div>;
	return (
		<Model onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitHandler} onCancel={props.onClose} />}
			{!isCheckout && modelActions}

		</Model>
	);
};
export default Cart;
