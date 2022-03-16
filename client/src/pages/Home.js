import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../utils/fetchData";
import "../styles/Home.css";
import logo from "./logo.svg";
import ShoeCard from "../components/ShoeCard";

export function Home() {
	const [allShoes, setAllShoes] = useState([]);
	useEffect(async () => {
		try {
			const response = await fetchData("/all");
			const shoes = await response.json();
			console.log({ shoes });
			setAllShoes(shoes);
		} catch (error) {
			console.log(error);
		}
	}, []);
	function shoes(shoeArray) {
		return shoeArray.map((shoe) => <ShoeCard key={shoe.shoesId} shoe={shoe} />);
	}
	return (
		<main role="main">
			<ul>{shoes(allShoes)}</ul>
		</main>
	);
}

export default Home;
