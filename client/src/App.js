import { Link, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Description from "./components/Description";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Success from "./components/Success";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import About from "./pages/About";
import Home from "./pages/Home";
import "./styles/Main.css";
import Return from "./components/Return";
const App = () => (
	<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shoes/:userType" element={<Home />} />
			<Route path="/shoe/:shoesId" element={<Description />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/success" element={<Success />} />
			<Route path="/return" element={<Return />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
		<footer>
			<ul className="footer-items-container">
				<li className="footer-item">
					<Link to={"/"}>Delivery</Link>{" "}
				</li>
				<li className="footer-item">
					<Link to={"/"}>FAQ</Link>{" "}
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
					<a href="https://www.instagram.com/?hl=en" target={"_blank"}>
						<BsInstagram />
					</a>
					<a href="https://en-gb.facebook.com/" target={"_blank"}>
						<BsFacebook />
					</a>
					<a href="https://twitter.com/" target={"_blank"}>
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

export default App;
