import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getAndUpdateState from "../utils/getAndUpdateState";

export default function Description() {
	const { shoesId } = useParams();
	const [shoe, setShoe] = useState([]);
	//get data from db and update state
	useEffect(() => getAndUpdateState(`/shoe/${shoesId}`, setShoe), []);

	console.log(shoe);
	return (
		<section className="description-container">
			<img
				className="description-img"
				src="https://api.lorem.space/image/shoes?w=250&h=250"
				alt="img"
			/>
			<h3>{shoesId}</h3>
			<h2>Description PAGE WILL GO HERE</h2>
		</section>
	);
}
