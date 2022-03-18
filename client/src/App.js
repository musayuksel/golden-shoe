import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Description from "./components/Description";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";
import "./styles/Main.css";
const App = () => (
	<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/men" element={<Home />} />
			<Route path="/women" element={<Home />} />
			<Route path="/kids" element={<Home />} />
			<Route path="/shoe/:shoesId" element={<Description />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	</>
);

export default App;
