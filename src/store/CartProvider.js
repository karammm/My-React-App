import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

//outside of the component fun bcz this reducer function won't need anythong from that component
const cartReducer = (state, action) => {
		if (action.type === "ADD") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem=state.items[existingCartItemIndex];
		let updatedItems;
		if(existingCartItem){
			const updatedItem={
				...existingCartItem,
				amount:existingCartItem.amount+action.item.amount
			}
			updatedItems=[...state.items];
			updatedItems[existingCartItemIndex]=updatedItem;
		}else{
			//updatedItem={...action.item};
			updatedItems=state.items.concat(action.item); //immutable way brand new array without edition the old array
		}
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	//return new state snapshot
	return defaultCartState;
};

// this Component manages the CartContext data and provide that context to all component that want access to it
const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
