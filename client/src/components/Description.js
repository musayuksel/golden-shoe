import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getAndUpdateState from "../utils/getAndUpdateState";
import { nanoid } from "nanoid";

export default function Description() {
	const { shoesId } = useParams();
	const [[shoe], setShoe] = useState([{}]); //destructure first element of arr
	//get data from db and update state
	useEffect(() => getAndUpdateState(`/shoe/${shoesId}`, setShoe), []);
	//assumption= every shoe has max 12 different size
	//if category===Kids start 2 ,category===Women start 3.5 else start 5 for sizes
	let sizeStartPoint = 5.5;
	if (shoe.productUserType) {
		sizeStartPoint =
			shoe.productUserType &&
			shoe.productUserType.toLowerCase().includes("kids")
				? 2
				: shoe.productUserType.toLowerCase().includes("women")
				? 3.5
				: 5.5;
	}

	const sizeTable = Array(12)
		.fill(null)
		.map((_, index) => (
			<li className="size-item" key={nanoid(5)}>
				{`UK ${sizeStartPoint + index / 2}`}
			</li>
		));

	return (
		<section className="description-container">
			<ul>{sizeTable}</ul>
			<img
				className="description-img"
				src="https://api.lorem.space/image/shoes?w=250&h=250"
				alt="img"
			/>
			<h3>{shoesId}</h3>
		</section>
	);
}
