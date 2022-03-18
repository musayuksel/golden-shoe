import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getAndUpdateState from "../utils/getAndUpdateState";
import { nanoid } from "nanoid";
import "../styles/Description.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
	MdOutline360,
	MdLocationOn,
	MdOutlineFreeCancellation,
} from "react-icons/md";
function EachSize({ shoeSize, sizesStock }) {
	return (
		<li>
			<button
				className={`size-item ${!sizesStock.includes(shoeSize) && "disable"}`}
				onClick={() => console.log(shoeSize)}
				disabled={!sizesStock.includes(shoeSize)}
			>
				{`UK ${shoeSize}`}
			</button>
		</li>
	);
}
export default function Description() {
	const { shoesId } = useParams();
	const [[shoe], setShoe] = useState([
		{
			shoesId: 2,
			productName: "Sneakers Skate",
			category: "Outdoor",
			productUserType: "Kids",
			price: "45.99",
			explanation: "Ready, Set, Run...",
			imgLink: "https://api.lorem.space/image/shoes?w=250&h=250",
			stock: [],
		},
	]); //destructure first element of arr
	let explanations = [];
	//get data from db and update state
	//if category===Kids start 2 ,category===Women start 3.5 else start 5 for sizes
	let sizeStartPoint = 5.5;
	useEffect(() => getAndUpdateState(`/shoe/${shoesId}`, setShoe), [shoesId]);

	if (shoe.productUserType) {
		sizeStartPoint =
			shoe.productUserType &&
			shoe.productUserType.toLowerCase().includes("kids")
				? 2
				: shoe.productUserType.toLowerCase().includes("women")
				? 3.5
				: 5.5;
	}
	if (shoe.explanation) {
		explanations = shoe.explanation.split(".").map((exp) => (
			<li className="explanation-item" key={nanoid(5)}>
				{exp}.
			</li>
		));
	}

	//assumption= every shoe has max 12 different size
	//find all sizes from stock
	const sizesStock = shoe.stock.reduce((sizes, curr) => {
		return !sizes.includes(curr.size) && curr.amount > 0
			? sizes.concat(+curr.size)
			: sizes;
	}, []);
	console.log({ sizesStock });
	const sizeTable = Array(12)
		.fill(null)
		.map((_, index) => (
			<EachSize
				sizesStock={sizesStock}
				shoeSize={sizeStartPoint + index / 2}
				key={nanoid(5)}
			/>
		));

	return (
		<>
			<main className="description-main">
				<section className="description-container">
					<p className="cancel-slider">
						<span>
							<MdOutlineFreeCancellation />
						</span>
						You can return your order for any reason, free of charge, within
						<b>60</b> days.
					</p>
					<ul className="description-product-main-infos">
						<li className="name">{shoe.productName}</li>
						<li className="type">{shoe.productUserType}</li>
						<li className="price">£{shoe.price}</li>
					</ul>
					<div className="description-img-container">
						<img
							className="description-img"
							src="https://cdn.picpng.com/running_shoes/running-shoes-background-36306.png"
							alt="img"
						/>
						<button className="img-icons-left">
							<BsArrowLeftCircle />
						</button>
						<button className="img-icons-right">
							<BsArrowRightCircle />
						</button>
						<button className="img-icons-360">
							<MdOutline360 />
						</button>
					</div>
					<ul className="size-items-container">
						<span>Select size</span>
						{sizeTable}
					</ul>
					<Link className="add-to-cart" to={"/cart"}>
						Add To Bag
					</Link>

					<p className="description-free-pickup">Free Pick-up</p>

					<a className="description-find-store" href="">
						Find a Store
						<span>
							<MdLocationOn />
						</span>
					</a>

					<ul className="explanations-container">
						<li>{shoe.productName}</li>
						{explanations}
					</ul>
				</section>
			</main>
		</>
	);
}
