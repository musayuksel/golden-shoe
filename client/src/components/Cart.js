import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Cart.css";
import updateStockAmount from "../utils/updateStockAmount";
import CartItem from "./CartItem";
import LoadingAnimation from "./LoadingAnimation";
import { applyVoucher, findTotalPrice } from "../utils/cartHelperFucntions";

export default function Cart() {
	const [cartItems, setCartItems] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isAmountChange, setIsAmountChange] = useState(false);
	const [voucherAmount, setVoucherAmount] = useState(0);
	const [voucherCode, setVoucherCode] = useState("");

	// if amount of item change, update localstorage
	useEffect(() => {
		const cartItemsLocalStorage = JSON.parse(
			localStorage.getItem("gs-cart") || "[]"
		);
		setCartItems(cartItemsLocalStorage);
	}, [isAmountChange]);

	// if item of cart change, update localstorage
	useEffect(
		() => localStorage.setItem("gs-cart", JSON.stringify(cartItems)),
		[cartItems]
	);
	// if amount of item change, update Total price
	const totalPrice = findTotalPrice(cartItems);

	// if any item deleted from cart update state
	function deleteItemFromCart(localId) {
		const itemDeletedCart = cartItems.filter((item) => item.localId != localId);
		setCartItems(itemDeletedCart);
	}

	const navigate = useNavigate();
	function handleCheckout() {
		setIsSubmitting(true);
		updateStockAmount(setIsSubmitting, navigate, setCartItems);
	}
	async function handleVoucher(event) {
		event.preventDefault();
		const voucher = await applyVoucher(voucherCode);
		if (voucher > 0) {
			setVoucherAmount(voucher);
			setVoucherCode("");
		}
	}

	const allItems = cartItems.map((item) => (
		<CartItem
			key={item.localId}
			item={item}
			deleteItemFromCart={deleteItemFromCart}
			setIsAmountChange={setIsAmountChange}
		/>
	));
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
						<form onSubmit={handleVoucher}>
							<input
								type="text"
								value={voucherCode}
								placeholder="Enter your vouchers code"
								onChange={(e) =>
									setVoucherCode(e.target.value.toUpperCase().trim())
								}
							/>
							<button type="submit">Add Voucher</button>
						</form>
					</div>
				</article>
				<button onClick={() => handleCheckout()}>CHECKOUT</button>
			</section>
		</>
	);
}
