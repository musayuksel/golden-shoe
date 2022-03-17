import { Router } from "express";
import pool from "./db";
import groupShoes from "./utils/groupShoes";
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
		const shoesGroup = groupShoes(result.rows);
		//convert to an array again
		const shoesGroupArray = Object.keys(shoesGroup).map(
			(shoeId) => shoesGroup[shoeId]
		);

		res.send(shoesGroupArray);
	});
});
// Return specific Shoe
router.get("/shoe/:id", (req, res) => {
	const id = req.params.id;
	const selectAllShoesQuery =
		"SELECT shoes.id as shoesId,productName,category,imgLinks,productUserType,price,explanation,colour,amount,size from shoes INNER JOIN stock AS s ON s.shoeId = shoes.id WHERE shoes.id = $1 ORDER BY shoesId;";
	pool.query(selectAllShoesQuery, [id], (error, result) => {
		if (error) {
			return res.status(500).send({ msg: "Database ERROR!!!" });
		}
		//for each shoe add stock key and assign array of object [{color:"white", size:"6.5",amoung:5},{color:"white", size:"7",amoung:2}]
		const shoesGroup = groupShoes(result.rows);
		//convert to an array again
		const shoesGroupArray = Object.keys(shoesGroup).map(
			(shoeId) => shoesGroup[shoeId]
		);

		res.send(shoesGroupArray);
	});
});

export default router;
