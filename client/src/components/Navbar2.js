import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../styles/Logo.png";
import { MdSearch, MdOutlineShoppingBag } from "react-icons/md";
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
				<MdSearch className="search-icon" style={{ fontSize: "24px" }} />
				<Link to="/cart">
					<MdOutlineShoppingBag style={{ fontSize: "30px", color: "#000" }} />
				</Link>
			</div>
		</header>
	);
}
