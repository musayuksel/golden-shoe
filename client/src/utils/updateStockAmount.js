import fetchData from "./fetchData";
export default async function updateStockAmount(
	setIsSubmitting,
	navigate,
	setCartItems
) {
	const cartItemsLocalStorage = JSON.parse(
		localStorage.getItem("gs-cart") || "[]"
	);
	//Find stockid for choosed sizes(every size has different stock&amount)
	function findSizeStockId(cartItems) {
		return cartItems.map((item) => {
			const stock = item.stock.filter(
				(eachStock) => +eachStock.size === item.choosedSize
			)[0];
			return { stockId: stock.stockid, choosedAmount: item.choosedAmount };
		});
	}
	const sizeStockIds = findSizeStockId(cartItemsLocalStorage);

	const putObject = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({ soldItems: sizeStockIds }),
	};
	const response = await fetchData("/sold", putObject);
	if (response.status === 204) {
		setTimeout(() => {
			setIsSubmitting(false);
			localStorage.setItem("gs-cart", JSON.stringify("[]"));
			setCartItems([]);
			navigate("/success");
		}, 1500);
	}
	if (response.status === 500) {
		setIsSubmitting(false);
		navigate("/error");
	}
}
