import React, { useState } from "react";
import {
	findStockNumAmount,
	updateStorageAmount,
	dropdownOptions,
} from "../utils/cartItemHelperFunctions";
import { MdClose } from "react-icons/md";
import ImgTag from "./ImgTag";

export default function CartItem({
	item,
	deleteItemFromCart,
	setIsAmountChange,
}) {
	const [choosedAmount, setChoosedAmount] = useState(item.choosedAmount);
	const stockNumberAmount = findStockNumAmount(item);
	const amountOptions = dropdownOptions(stockNumberAmount);
	function selectHandle(event) {
		//find product from local storage and update amount
		updateStorageAmount(item, +event.target.value);
		setTimeout(setChoosedAmount(+event.target.value), 0);
		setIsAmountChange((prev) => !prev);
	}
	function deleteHandle() {
		deleteItemFromCart(item.localId);
	}
	return (
		<div className="cart-item">
			<div className="cart-item-img-container">
				<ImgTag
					userType={item.productUserType.toLowerCase()}
					imgLink={item.imgLink}
					alt={item.productName}
					className={"productImage"}
				/>
			</div>

			<div className="cart-item-explanations">
				<p>{item.productName}</p>
				<p>{item.category}</p>
				<p>size: {item.choosedSize}</p>
				<p className="price">£{item.price}</p>
				<select value={choosedAmount} name="itemCount" onChange={selectHandle}>
					{amountOptions}
				</select>
				<button className="cart-item-close" onClick={deleteHandle}>
					<MdClose />
				</button>
			</div>
		</div>
	);
}
