import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../utils/fetchData";
import "../styles/Home.css";
import logo from "./logo.svg";

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

	return <main role="main">MAIN PAGE</main>;
}

export default Home;
