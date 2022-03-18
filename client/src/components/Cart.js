import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import CartItem from "./CartItem";

export default function Cart() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const cartItemsLocalStorage = JSON.parse(
			localStorage.getItem("gs-cart") || "[]"
		);
		setCartItems(cartItemsLocalStorage);
	}, []);

	useEffect(
		() => localStorage.setItem("gs-cart", JSON.stringify(cartItems)),
		[cartItems]
	);

	const allItems = cartItems.map((item) => (
		<CartItem key={item.localId} item={item} />
	));
	return (
		<section className="cart-page">
			<article className="cart-header">
				<h2>Your Bag</h2>
				<p>
					Items in your bag are not reserved – check out now to make them yours.
				</p>
			</article>
			<article className="cart-items-container">{allItems}</article>
			<article className="cart-summary">
				<p>Order Summary</p>
				<div className="amount">
					<p>3 items</p>
					<p>£100</p>
				</div>
				<div className="delivery">
					<p>Delivery</p>
					<p>FREE</p>
				</div>
				<div className="total">
					<p>TOTAL</p>
					<p>£300</p>
				</div>
				<div className="vouchers">
					<input
						type="text"
						name=""
						id=""
						placeholder="Enter your vouchers code"
					/>
					<button>Add</button>
				</div>
			</article>
			<button onClick={() => setCartItems([])}>CHECKOUT</button>
		</section>
	);
}
