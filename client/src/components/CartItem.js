import React from "react";
import { nanoid } from "nanoid";

export default function CartItem({ item }) {
	const stockNumberAmount = item.stock.filter(
		(shoe) => +shoe.size === item.choosedSize
	);
	const amountOptions = Array(
		stockNumberAmount[0].amount <= 5 ? stockNumberAmount[0].amount : 5
	)
		.fill(null)
		.map((_, index) => (
			<option key={nanoid(4)} value={index + 1}>
				{index + 1}
			</option>
		));
	return (
		<div className="cart-item">
			<img
				src="https://cdn.picpng.com/running_shoes/running-shoes-background-36306.png"
				// src={item.imgLink}
				alt={item.productName}
			/>
			<div className="cart-item-explanations">
				<p>{item.productName}</p>
				<p>{item.category}</p>
				<p>{item.choosedSize}</p>
				<select name="itemCount">{amountOptions}</select>
				<p>{item.price}</p>
				<button>Close</button>
			</div>
		</div>
	);
}
