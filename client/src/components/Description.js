import React from "react";
import { useParams } from "react-router-dom";

export default function Description() {
	const { shoesId } = useParams();
	return (
		<div>
			<h3>{shoesId}</h3>
			<h2>Description PAGE WILL GO HERE</h2>
		</div>
	);
}
