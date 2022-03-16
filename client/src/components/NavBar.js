import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<header>
			<nav>
				<img
					src="https://st4.depositphotos.com/5040187/19757/v/600/depositphotos_197571666-stock-illustration-logo-swoosh-global-red-letter.jpg"
					alt="logo"
					className="logo"
				/>
				<ul>
					<li>
						<Link to="/men">MEN</Link>
					</li>
					<li>
						<Link to="/women">WOMEN</Link>
					</li>
					<li>
						<Link to="/kids">KIDS</Link>
					</li>
				</ul>
				<div className="searchContainer">
					<input type="text" />
				</div>
				<div className="card"></div>
			</nav>
		</header>
	);
}
