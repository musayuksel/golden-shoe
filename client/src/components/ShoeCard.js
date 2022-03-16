import React from "react";

export default function ShoeCard({ shoe }) {
	//find how many differen color
	const colourArr = shoe.stock.map((eachShoe) => eachShoe.colour);
	const colourAmount = [...new Set(colourArr)].length;
	const colourText = `${colourAmount} Colour${colourAmount > 1 && "s"}`;
	return (
		<li>
			<img src={shoe.imgLink} alt={shoe.productName} />
			<div className="shoe-info-containter">
				<p>{shoe.productName}</p>
				<p>{shoe.category}</p>
				<p>{shoe.price}</p>
				<p>{colourText}</p>
			</div>
		</li>
	);
}
