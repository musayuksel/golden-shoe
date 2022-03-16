import { Router } from "express";
import pool from "./db";
const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});
router.get("/all", (_, res) => {
	const selectAllShoesQuery =
		"SELECT shoes.id as shoesId,productName,category,imgLinks,productUserType,price,explanation,colour,amount,size from shoes INNER JOIN stock AS s ON s.shoeId = shoes.id ORDER BY shoesId;";
	pool.query(selectAllShoesQuery, [], (error, result) => {
		if (error) {
			return res.status(500).send({ msg: "Database ERROR!!!" });
		}
		//for each shoe add stock key and assign array of object [{color:"white", size:"6.5",amoung:5},{color:"white", size:"7",amoung:2}]
		const shoesGroup = result.rows.reduce((eachShoes, currentShoe) => {
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
		//convert to an array again
		const shoesGroupArray = Object.keys(shoesGroup).map(
			(shoeId) => shoesGroup[shoeId]
		);

		res.send(shoesGroupArray);
	});
});

export default router;
