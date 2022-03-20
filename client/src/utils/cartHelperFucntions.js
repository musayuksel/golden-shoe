import fetchData from "./fetchData";
export async function applyVoucher(voucherCode) {
	const getObject = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify({ voucherCode: voucherCode }),
	};
	const response = await fetchData("/voucher", getObject);
	if (response.status === 200) {
		const voucherAmount = await response.json();
		return voucherAmount.voucher;
	} else {
		navigate("/error");
	}
}

export function findTotalPrice(cartItems) {
	return cartItems.reduce(
		(total, curr) => total + +curr.price * curr.choosedAmount,
		0
	);
}
