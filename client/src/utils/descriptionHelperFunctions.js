import { nanoid } from "nanoid";
// ******* ALL HELPER FUCTIONS FOR Description COMPONENT
export function updateSizeStartPoint(shoe) {
	if (shoe.productUserType) {
		return shoe.productUserType &&
			shoe.productUserType.toLowerCase().includes("kids")
			? 2
			: shoe.productUserType.toLowerCase().includes("women")
			? 3.5
			: 5.5;
	}
}

export function addExplanation(shoe) {
	if (shoe.explanation) {
		return shoe.explanation.split(".").map((exp) => (
			<li className="explanation-item" key={nanoid(5)}>
				{exp}.
			</li>
		));
	}
}

export function findDifferentSizes(stock) {
	return stock.reduce((sizes, curr) => {
		return !sizes.includes(curr.size) && curr.amount > 0
			? sizes.concat(+curr.size)
			: sizes;
	}, []);
}

export const sizesTemplate = Array(12).fill(null);

export function updateLocalStorage(shoe, choosedShoeNum, navigate) {
	const localId = nanoid(4);
	const cartItemsLocalStorage = JSON.parse(
		localStorage.getItem("gs-cart") || "[]"
	);
	const storegeItem = {
		...shoe,
		choosedSize: choosedShoeNum,
		localId,
	};
	cartItemsLocalStorage.unshift(storegeItem);
	localStorage.setItem("gs-cart", JSON.stringify(cartItemsLocalStorage));
	navigate("/cart");
}
