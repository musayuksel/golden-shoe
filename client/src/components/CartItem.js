import React from "react";

export default function CartItem({ item }) {
	console.log({ item });
	return (
		<div className="cart-item">
			<img
				src="https://cdn.picpng.com/running_shoes/running-shoes-background-36306.png"
				// src={item.imgLink}
				alt={item.productName}
			/>
			<div className="cart-item-explanations">
				<p>{item.productName}</p>
				<p>{item.choosedColor}</p>
				<p>{item.choosedSize}</p>
				<select name="itemCount">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<p>{item.price}</p>
				<button>Close</button>
			</div>
		</div>
	);
}
