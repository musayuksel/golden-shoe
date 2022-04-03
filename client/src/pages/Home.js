import { useEffect, useState } from "react";
import "../styles/Home.css";
import ShoeCard from "../components/ShoeCard";
import Categories from "../components/Categories";
import getAndUpdateState from "../utils/getAndUpdateState";
import { useParams } from "react-router-dom";

export function Home({ searchKey }) {
	const [allShoes, setAllShoes] = useState([]);
	const [category, setCategory] = useState("");
	const { userType } = useParams();
	// const filterKeyWord = userType !== undefined ? userType : "";
	function filterData() {
		const filteredDataForUsers = allShoes.filter((shoe) => {
			if (userType === undefined) return true;
			return shoe.productUserType.toLowerCase() === userType;
		});
		return filteredDataForUsers.filter(
			(shoe) =>
				(shoe.productUserType.toLowerCase().includes(searchKey.toLowerCase()) ||
					shoe.productName.toLowerCase().includes(searchKey.toLowerCase()) ||
					shoe.category.toLowerCase().includes(searchKey.toLowerCase())) &&
				shoe.category.toLowerCase().includes(category.toLowerCase())
		);
	}
	//get data from db and update state
	useEffect(async () => getAndUpdateState("/all", setAllShoes), []);
	//if user type change, reset category
	useEffect(() => {
		setCategory("");
	}, [userType]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function shoes(shoeArray) {
		return shoeArray.map((shoe) => <ShoeCard key={shoe.shoesId} shoe={shoe} />);
	}
	return (
		<main role="main">
			<Categories setCategory={setCategory} />
			<ul className="shoe-cards-container">{shoes(filterData())}</ul>
		</main>
	);
}

export default Home;
