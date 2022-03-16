import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";
import "./styles/Main.css";
const App = () => (
	<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/men" element={<About />} />
			<Route path="/women" element={<About />} />
			<Route path="/kids" element={<About />} />
		</Routes>
	</>
);

export default App;
