import React from "react";
import "../styles/Shoecard.css";
import { Link } from "react-router-dom";
export default function ShoeCard({ shoe }) {
	//find how many differen color
	const colourArr = shoe.stock.map((eachShoe) => eachShoe.colour);
	const colourAmount = [...new Set(colourArr)].length;
	const colourText = `${colourAmount} Colour${colourAmount > 1 && "s"}`;

	return (
		<Link to={`/shoe/${shoe.shoesId}`}>
			<li className="productcard">
				<img
					src="https://cdn.picpng.com/running_shoes/running-shoes-background-36306.png"
					alt={shoe.productName}
				/>
				{/* <img src={shoe.imgLink} alt={shoe.productName} /> */}
				<div className="shoe-info-containter">
					<p className="name">{shoe.productName}</p>
					<p className="category">{shoe.category}</p>
					<p className="color">{colourText}</p>
					<p className="price">£{shoe.price}</p>
				</div>
			</li>
		</Link>
	);
}
