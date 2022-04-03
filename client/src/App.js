import { Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Description from "./components/Description";
import React, { useState } from "react";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Success from "./components/Success";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import Home from "./pages/Home";
import "./styles/Main.css";
import Return from "./components/Return";
import FaqPage from "./components/FaqPage";
const App = () => {
	const [searchKey, setSearchKey] = useState("");
	return (
		<>
			<Navbar setSearchKey={setSearchKey} />
			<Routes>
				<Route path="/" element={<Home searchKey={searchKey} />} />
				<Route
					path="/shoes/:userType"
					element={<Home searchKey={searchKey} />}
				/>
				<Route path="/shoe/:shoesId" element={<Description />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/success" element={<Success />} />
				<Route path="/return" element={<Return />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<footer>
				<ul className="footer-items-container">
					<li className="footer-item">
						<Link to={"/"}>Delivery</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/faq"}>FAQ</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/return"}>Returns & Refunds</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/"}>Order Tracker</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/"}>Help</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/"}>Store Finder</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/"}>Sitemap</Link>{" "}
					</li>
					<li className="footer-item">
						<Link to={"/"}>Payment</Link>{" "}
					</li>
				</ul>

				<section>
					<section className="social-links">
						<a
							aria-label="go to the Instagram"
							href="https://www.instagram.com/?hl=en"
							target={"_blank"}
						>
							<BsInstagram />
						</a>
						<a
							aria-label="go to the Facebook"
							href="https://en-gb.facebook.com/"
							target={"_blank"}
						>
							<BsFacebook />
						</a>
						<a
							aria-label="go to the Twitter"
							href="https://twitter.com/"
							target={"_blank"}
						>
							<BsTwitter />
						</a>
					</section>
					<p>© Copyright 2022 Golden Shoe</p>
					<a href="https://github.com/musayuksel/golden-shoe" target={"_blank"}>
						Codebase
					</a>
				</section>
			</footer>
		</>
	);
};

export default App;
