import { nanoid } from "nanoid";

//find amount of choosed product
export function findStockNumAmount(item) {
	return item.stock.filter((shoe) => +shoe.size === item.choosedSize);
}
//create options for dropdown menu acording to stock amount
export function dropdownOptions(stockNumberAmount) {
	return Array(
		stockNumberAmount[0].amount <= 5 ? stockNumberAmount[0].amount : 5
	)
		.fill(null)
		.map((_, index) => (
			<option key={nanoid(4)} value={index + 1}>
				{index + 1}
			</option>
		));
}
//find product from local storage and update amount
export function updateStorageAmount(item, newAmount) {
	const cartItemsLocalStorage = JSON.parse(
		localStorage.getItem("gs-cart") || "[]"
	);
	const currentShoeIndex = cartItemsLocalStorage.findIndex(
		(shoe) => shoe.localId === item.localId
	);
	cartItemsLocalStorage[currentShoeIndex].choosedAmount = newAmount;
	localStorage.setItem("gs-cart", JSON.stringify(cartItemsLocalStorage));
}
