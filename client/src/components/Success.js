import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";
export default function Success() {
	let timer = 0;
	const navigate = useNavigate();
	useEffect(() => {
		timer = setTimeout(() => {
			navigate("/");
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	function handleReturnNow() {
		clearTimeout(timer);
		navigate("/");
	}
	const day = new Date();
	let deliveryDay = day.setDate(day.getDate() + 7);
	deliveryDay = day.toLocaleDateString("en");

	return (
		<section className="success">
			<h1>Checkout Success </h1>
			<h2>Thank you for choosing us!!! </h2>
			<h3>Your delivery dates will be {deliveryDay}</h3>
			<p>You will redirect to the home page in 10 seconds...</p>
			<button className="add-to-cart" onClick={handleReturnNow}>
				Return now
			</button>
		</section>
	);
}
