import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Cart.css";
import updateStockAmount from "../utils/updateStockAmount";
import CartItem from "./CartItem";
import LoadingAnimation from "./LoadingAnimation";

export default function Cart() {
	const [cartItems, setCartItems] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isAmountChange, setIsAmountChange] = useState(false);
	const [voucherAmount, setVoucherAmount] = useState(0);
	useEffect(() => {
		const cartItemsLocalStorage = JSON.parse(
			localStorage.getItem("gs-cart") || "[]"
		);
		setCartItems(cartItemsLocalStorage);
	}, [isAmountChange]);

	const totalPrice = cartItems.reduce(
		(total, curr) => total + +curr.price * curr.choosedAmount,
		0
	);
	useEffect(
		() => localStorage.setItem("gs-cart", JSON.stringify(cartItems)),
		[cartItems]
	);
	function deleteItemFromCart(localId) {
		const itemDeletedCart = cartItems.filter((item) => item.localId != localId);
		setCartItems(itemDeletedCart);
	}
	const allItems = cartItems.map((item) => (
		<CartItem
			key={item.localId}
			item={item}
			deleteItemFromCart={deleteItemFromCart}
			setIsAmountChange={setIsAmountChange}
		/>
	));

	const navigate = useNavigate();
	function handleCheckout() {
		setIsSubmitting(true);
		updateStockAmount(setIsSubmitting, navigate, setCartItems);
	}

	return (
		<>
			<LoadingAnimation isLoading={isSubmitting} />
			<section className="cart-page">
				<article className="cart-header">
					<h2>Your Bag</h2>
					<p>
						Items in your bag are not reserved – check out now to make them
						yours.
					</p>
				</article>
				<article className="cart-items-container">{allItems}</article>
				<article className="cart-summary">
					<p>Order Summary</p>
					<div className="amount">
						<p>3 items</p>
						<p>{`£${Math.round(totalPrice * 100) / 100}`}</p>
					</div>
					<div className="cart-summary-delivery">
						<p>Delivery</p>
						<p>FREE</p>
					</div>
					<div className="cart-summary-total">
						<p>TOTAL</p>
						<p>{`£${Math.round(totalPrice * 100) / 100 - voucherAmount}`}</p>
					</div>
					<div className="cart-summary-vouchers">
						<input
							type="text"
							name=""
							id=""
							placeholder="Enter your vouchers code"
						/>
						<button>Add</button>
					</div>
				</article>
				<button onClick={() => handleCheckout()}>CHECKOUT</button>
			</section>
		</>
	);
}
