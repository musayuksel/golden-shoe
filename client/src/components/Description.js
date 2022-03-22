import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getAndUpdateState from "../utils/getAndUpdateState";
import { nanoid } from "nanoid";
import "../styles/Description.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import {
	MdOutline360,
	MdLocationOn,
	MdOutlineFreeCancellation,
} from "react-icons/md";
import {
	updateSizeStartPoint,
	addExplanation,
	sizesTemplate,
	updateLocalStorage,
	findDifferentSizes,
} from "../utils/descriptionHelperFunctions";
import EachSizeOfTable from "./EachSizeOfTable";
import ImgTag from "./ImgTag";

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
			imgLink: "1.jpeg",
			stock: [],
		},
	]); //destructure first element of arr
	const [choosedShoeNum, setChoosedShoeNum] = useState(0);

	const explanations = addExplanation(shoe) || [];

	//if category===Kids start 2 ,category===Women start 3.5 else start 5 for sizes
	const sizeStartPoint = updateSizeStartPoint(shoe) || 5.5;

	//get data from db and update state
	useEffect(() => getAndUpdateState(`/shoe/${shoesId}`, setShoe), [shoesId]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	//find all sizes from stock
	const sizesStock = findDifferentSizes(shoe.stock);
	//assumption = every shoe has max 12 different size
	const sizeTable = sizesTemplate.map((_, index) => (
		<EachSizeOfTable
			choosedShoeNum={choosedShoeNum}
			setChoosedShoeNum={setChoosedShoeNum}
			sizesStock={sizesStock}
			shoeSize={sizeStartPoint + index / 2}
			key={nanoid(5)}
		/>
	));
	// Add data to localstorage and redirect to the cart page
	const navigate = useNavigate();
	function handleAddBag() {
		updateLocalStorage(shoe, choosedShoeNum, navigate);
	}

	return (
		<>
			<main className="description-main">
				<section className="description-container">
					<div className="cancel-slider">
						<span>
							<MdOutlineFreeCancellation />
						</span>
						<p>
							You can return your order for any reason, free of charge, within
							<span className="day">60 days.</span>
						</p>
					</div>
					<ul className="description-product-main-infos">
						<li className="name">{shoe.productName}</li>
						<li className="type">{shoe.productUserType}</li>
						<li className="price">£{shoe.price}</li>
					</ul>
					<div className="description-img-container">
						<ImgTag
							userType={shoe.productUserType.toLowerCase()}
							imgLink={shoe.imgLink}
							alt={shoe.productName}
							className={"description-img"}
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
					<button className="add-to-cart" onClick={handleAddBag}>
						Add To Bag
					</button>

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
