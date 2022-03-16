import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import logo from "./logo.svg";

export function Home() {
	async function fetchData(endPoint, methodObj = { method: "GET" }) {
		const response = await fetch(`/api${endPoint}`, methodObj);
		return response;
	}
	const [message, setMessage] = useState("Loading...");
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

	return (
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>
	);
}

export default Home;
