import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
	findStockNumAmount,
	updateStorageAmount,
	dropdownOptions,
} from "../utils/cartItemHelperFunctions";

export default function CartItem({ item }) {
	const [choosedAmount, setChoosedAmount] = useState(item.choosedAmount);
	const stockNumberAmount = findStockNumAmount(item);
	const amountOptions = dropdownOptions(stockNumberAmount);
	function selectHandle(event) {
		//find product from local storage and update amount
		updateStorageAmount(item, +event.target.value);
		setChoosedAmount(+event.target.value);
	}

	return (
		<div className="cart-item">
			<div className="cart-item-img-container">
				<img
					src="https://cdn.picpng.com/running_shoes/running-shoes-background-36306.png"
					// src={item.imgLink}
					alt={item.productName}
				/>
			</div>

			<div className="cart-item-explanations">
				<p>{item.productName}</p>
				<p>{item.category}</p>
				<p>{item.choosedSize}</p>
				<select value={choosedAmount} name="itemCount" onChange={selectHandle}>
					{amountOptions}
				</select>
				<p>{item.price}</p>
				<button>Close</button>
			</div>
		</div>
	);
}
