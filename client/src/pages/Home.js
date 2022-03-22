import { useEffect, useState } from "react";
import "../styles/Home.css";
import ShoeCard from "../components/ShoeCard";
import Categories from "../components/Categories";
import getAndUpdateState from "../utils/getAndUpdateState";
import { useParams } from "react-router-dom";

export function Home() {
	const [allShoes, setAllShoes] = useState([]);
	const { userType } = useParams();

	// const filterKeyWord = userType !== undefined ? userType : "";
	const filteredDataForUsers = allShoes.filter(
		(shoe) => shoe.productUserType.toLowerCase() === userType
	);

	//get data from db and update state
	useEffect(async () => getAndUpdateState("/all", setAllShoes), []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function shoes(shoeArray) {
		return shoeArray.map((shoe) => <ShoeCard key={shoe.shoesId} shoe={shoe} />);
	}
	return (
		<main role="main">
			<Categories />
			<ul className="shoe-cards-container">
				{shoes(userType !== undefined ? filteredDataForUsers : allShoes)}
			</ul>
		</main>
	);
}

export default Home;
