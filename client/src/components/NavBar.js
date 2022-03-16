import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../styles/Logo.png";
import { MdSearch } from "react-icons/md";
export default function Navbar() {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<nav>
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
			</nav>
			<div className="searchContainer">
				<input type="text" placeholder="Search...." />
				<MdSearch style={{ fontSize: "24px" }} />
			</div>
			<div className="card"></div>
		</header>
	);
}
