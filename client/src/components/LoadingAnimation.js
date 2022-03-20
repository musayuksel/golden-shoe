import React from "react";
import "../styles/Loading.css";
export default function LoadingAnimation({ isLoading }) {
	return (
		<div className={`animation-container ${isLoading && "animate"}`}>
			<div className="loading-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
