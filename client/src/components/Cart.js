import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Cart.css";
import updateStockAmount from "../utils/updateStockAmount";
import CartItem from "./CartItem";
import LoadingAnimation from "./LoadingAnimation";
import { applyVoucher, findTotalPrice } from "../utils/cartHelperFucntions";
import { MdOutlineFreeCancellation } from "react-icons/md";

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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
			<div style={{ width: "100%" }}>
				<p className="cancel-slider">
					<span>{<MdOutlineFreeCancellation />}</span>
					You can return your order for any reason, free of charge, within 60
					days.
				</p>
			</div>
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
					<p className="summary">Order Summary</p>
					<div className="amount">
						<p>{`${cartItems.length} item${
							cartItems.length > 1 ? "s" : ""
						}`}</p>
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
							<button
								className={`${voucherCode.length > 0 ? "open" : ""}`}
								type="submit"
							>
								APPLY
							</button>
						</form>
					</div>
				</article>
				<button className="checkout-btn" onClick={() => handleCheckout()}>
					CHECKOUT
				</button>
			</section>
		</>
	);
}
