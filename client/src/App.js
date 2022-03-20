import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Description from "./components/Description";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Success from "./components/Success";

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
			<Route path="/success" element={<Success />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</>
);

export default App;
