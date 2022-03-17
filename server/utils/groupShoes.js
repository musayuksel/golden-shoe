//for each shoe add stock key and assign array of object [{color:"white", size:"6.5",amoung:5},{color:"white", size:"7",amoung:2}]
export default function groupShoes(arr) {
	return arr.reduce((eachShoes, currentShoe) => {
		if (eachShoes[currentShoe.shoesid]) {
			eachShoes[currentShoe.shoesid].stock.push({
				colour: currentShoe.colour,
				size: currentShoe.size,
				amount: currentShoe.amount,
			});
		} else {
			eachShoes[currentShoe.shoesid] = {
				shoesId: currentShoe.shoesid,
				productName: currentShoe.productname,
				category: currentShoe.category,
				productUserType: currentShoe.productusertype,
				price: currentShoe.price,
				explanation: currentShoe.explanation,
				imgLink: currentShoe.imglinks,
				stock: [
					{
						colour: currentShoe.colour,
						size: currentShoe.size,
						amount: currentShoe.amount,
					},
				],
			};
		}
		return eachShoes;
	}, {});
}
