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
export default function Navbar({ setSearchKey }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const navigate = useNavigate();
	return (
		<header>
			<button
				aria-label="hamburger menu"
				className="hamburger"
				onClick={() => setIsMenuOpen((prev) => !prev)}
			>
				{!isMenuOpen ? <MdOutlineMenu /> : <MdClose />}
			</button>
			<Link className="home-page-link" to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
			<nav className={`${isMenuOpen ? "open" : ""}`}>
				<ul onClick={() => setIsMenuOpen(false)}>
					<li>
						<Link to="/shoes/men">MEN</Link>
					</li>
					<li>
						<Link to="/shoes/women">WOMEN</Link>
					</li>
					<li>
						<Link to="/shoes/kids">KIDS</Link>
					</li>
				</ul>
			</nav>
			<div className="searchContainer">
				<input
					className={`${isSearchOpen ? "open" : ""}`}
					type="text"
					placeholder="Search...."
					onChange={(e) => setSearchKey(e.target.value)}
				/>
				<MdSearch
					onClick={() => setIsSearchOpen((prev) => !prev)}
					style={{ fontSize: "24px" }}
				/>
				<div className="nav-cart-icon">
					<button aria-label="go to the cart" onClick={() => navigate("/cart")}>
						<MdOutlineShoppingBag style={{ fontSize: "30px", color: "#000" }} />
					</button>
				</div>
			</div>
		</header>
	);
}
