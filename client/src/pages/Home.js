import { useEffect, useState } from "react";
import "../styles/Home.css";
import ShoeCard from "../components/ShoeCard";
import Categories from "../components/Categories";
import getAndUpdateState from "../utils/getAndUpdateState";
export function Home() {
	const [allShoes, setAllShoes] = useState([]);
	//get data from db and update state
	useEffect(async () => getAndUpdateState("/all", setAllShoes), []);

	function shoes(shoeArray) {
		return shoeArray.map((shoe) => <ShoeCard key={shoe.shoesId} shoe={shoe} />);
	}
	return (
		<main role="main">
			<Categories />
			<ul className="shoe-cards-container">{shoes(allShoes)}</ul>
		</main>
	);
}

export default Home;
