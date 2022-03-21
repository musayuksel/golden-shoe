import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../styles/Logo.png";
import {
	MdSearch,
	MdOutlineShoppingBag,
	MdOutlineMenu,
	MdClose,
} from "react-icons/md";
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<header>
			<button
				className="hamburger"
				onClick={() => setIsMenuOpen((prev) => !prev)}
			>
				{!isMenuOpen ? <MdOutlineMenu /> : <MdClose />}
			</button>
			<Link className="home-page-link" to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<nav className={`${isMenuOpen ? "open" : ""}`}>
				<ul onClick={() => setIsMenuOpen((prev) => !prev)}>
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
				<input
					className={`${isSearchOpen ? "open" : ""}`}
					type="text"
					placeholder="Search...."
				/>
				<MdSearch
					onClick={() => setIsSearchOpen((prev) => !prev)}
					style={{ fontSize: "24px" }}
				/>
				<div className="nav-cart-icon">
					<button onClick={() => navigate("/cart")}>
						<MdOutlineShoppingBag style={{ fontSize: "30px", color: "#000" }} />
					</button>
				</div>
			</div>
		</header>
	);
}
