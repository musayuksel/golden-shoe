import { useEffect, useState } from "react";
import "../styles/Home.css";
import ShoeCard from "../components/ShoeCard";
import Categories from "../components/Categories";
import getAndUpdateState from "../utils/getAndUpdateState";
export function Home() {
	const [allShoes, setAllShoes] = useState([]);
	//get data from db and update state
	useEffect(async () => getAndUpdateState("/all", setAllShoes), []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// const [imgURL, setImgURL] = useState("");
	// async function musa() {
	// 	const response = await fetch("http://localhost:3100/1.png");
	// 	console.log(response);
	// 	const image = await response.blob();
	// 	// Create a local URL of that image
	// 	const localUrl = URL.createObjectURL(image);
	// 	setImgURL(localUrl);
	// }
	// useEffect(() => {
	// 	musa();
	// }, []);

	function shoes(shoeArray) {
		return shoeArray.map((shoe) => <ShoeCard key={shoe.shoesId} shoe={shoe} />);
	}
	return (
		<main role="main">
			<img
				style={{ width: "100px", height: "100px", border: "2px solid red" }}
				src={"http://localhost:3100/1.png"}
				// src={"/1.png"}
				alt="TEST"
			/>
			<Categories />
			<ul className="shoe-cards-container">{shoes(allShoes)}</ul>
		</main>
	);
}

export default Home;
