import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";
export default function Success() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	const day = new Date();
	let deliveryDay = day.setDate(day.getDate() + 7);
	deliveryDay = day.toLocaleDateString("en");

	return (
		<section className="success">
			<h1>Checkout Success </h1>
			<h2>Thank you for choosing us!!! </h2>
			<h3>Our delivery dates will be {deliveryDay}</h3>
			<p>You will redirect to the home page in 5 seconds...</p>
			<button className="add-to-cart" onClick={() => navigate("/")}>
				Return now
			</button>
		</section>
	);
}
