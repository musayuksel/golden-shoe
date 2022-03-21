import React from "react";
import shoe from "../styles/shoesPlaceholderImgs/men/1.jpeg";
export default function Return() {
	return (
		<main>
			<img src={shoe} alt="" />
			<h2>YOUR ORDER</h2>
			<p>
				Enter your order details to check its status, cancel items, or start an
				exchange or return.
			</p>
			<form>
				<input
					type="text"
					placeholder="Enter your vouchers code"
					onChange={(e) => setVoucherCode(e.target.value.toUpperCase().trim())}
				/>
			</form>
		</main>
	);
}
