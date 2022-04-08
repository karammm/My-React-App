import React from "react";
import CartContext from "./cart-context";

// this Component manages the CartContext data and provide that context to all component that want access to it
const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};
	const removeItemToCartHandler = (item) => {};
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
