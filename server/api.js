import { Router } from "express";
import pool from "./db";
import groupShoes from "./utils/groupShoes";
const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});
router.get("/all", (_, res) => {
	const selectAllShoesQuery =
		"SELECT shoes.id as shoesId,productName,category,imgLinks,productUserType,price,explanation,colour,amount,size,s.id as stockid from shoes INNER JOIN stock AS s ON s.shoeId = shoes.id ORDER BY shoesId;";
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
		"SELECT shoes.id as shoesId,productName,category,imgLinks,productUserType,price,explanation,colour,amount,size,s.id as stockid from shoes INNER JOIN stock AS s ON s.shoeId = shoes.id WHERE shoes.id = $1 ORDER BY shoesId;";
	pool.query(selectAllShoesQuery, [id], (error, result) => {
		if (error) {
			console.log(error);
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

//Cart sold items update
router.put("/sold", (req, res) => {
	const soldItems = req.body.soldItems;
	const updateValues = soldItems
		.map((item) => `(${item.stockId},${item.choosedAmount})`)
		.join();

	const selectQuery = `UPDATE stock SET amount = stock.amount-val.soldItemAmount 
	FROM(VALUES ${updateValues}) AS val (stockId,soldItemAmount)
	WHERE stock.id = val.stockId;`;
	pool.query(selectQuery, [], (error, result) => {
		if (error) {
			return res.status(500).send({ msg: "Database ERROR" });
		}
		res.sendStatus(204);
	});
	// console.log({ soldItems, selectQuery });
});

// This endpoint will fill out the DB stock randomly. (0-9)includes
router.get("/stock", (req, res) => {
	const setQuery = "update stock set amount = floor(random() * 10);";
	pool.query(setQuery, [], (error, result) => {
		if (error) {
			console.log(error);
			return res.status(500).send({ msg: "Database ERROR" });
		}
		res.send({ msg: "Database stock updated with new products." });
	});
});
export default router;
