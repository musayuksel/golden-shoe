import React from "react";
import "../styles/Categories.css";
import { MdOutlineFilterList } from "react-icons/md";

export default function Categories() {
	const categoryArr = [
		"All",
		"Sale",
		"Trainers",
		"Running",
		"Gym & Training",
		"Football",
		"Hiking & Outdoor",
		"Walking",
		"Basketball",
		"Tennis",
	];
	const categoryList = categoryArr.map((category) => (
		<li className="category-item" key={category}>
			{category}
		</li>
	));
	return (
		<section className="category-main-container">
			<ul className="category-list-container">{categoryList}</ul>
			<button aria-label="Filter shoes">
				<span>Filter</span> <MdOutlineFilterList />
			</button>
		</section>
	);
}
