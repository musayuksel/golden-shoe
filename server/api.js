import { Router } from "express";
import pool from "./db";
import groupShoes from "./utils/groupShoes";
import {
	menShoesTableQuery,
	womenShoesTableQuery,
	kidsShoesTableQuery,
	menStockTableQuery,
	womenStockTableQuery,
	kidStockTableQuery,
} from "./utils/initialStockQueries";
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

// This endpoint will check Voucher code
router.post("/voucher", (req, res) => {
	const voucherCode = req.body.voucherCode;
	// pool.query(setQuery, [], (error, result) => {
	if (voucherCode === "ANDDIGITAL") {
		return res.send({ voucher: 10 });
	}
	res.send({ voucher: -1 });
	// });
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
// This endpoint will fill out the DB initial stocks
router.get("/stock-initial", (req, res) => {
	// create men shoes table
	const tableCreateQuery =
		menShoesTableQuery + womenShoesTableQuery + kidsShoesTableQuery;
	pool.query(tableCreateQuery, [], (error) => {
		if (error) {
			console.log(error);
			return res.status(500).send({ msg: "Database ERROR" });
		}
	});
	// initializate stock table for men shoes
	const allShoesQuery =
		"select * from shoes where shoes.productUserType='Men';";
	pool.query(allShoesQuery, [], (error, result) => {
		if (error) {
			console.log(error);
			return res.status(500).send({ msg: "Database ERROR" });
		}
		const allShoes = result.rows;

		const insertStockQuery = allShoes.map(({ id }) => menStockTableQuery(id));
		pool.query(insertStockQuery.join(""), [], (error) => {
			if (error) {
				console.log(error);
				return res.status(500).send({ msg: "Database ERROR" });
			}
			// res.send({ msg: "Database stock updated with new products." });
		});
	});

	// initializate stock table for women shoes
	const allWomenShoesQuery =
		"select * from shoes where shoes.productUserType='Women';";
	pool.query(allWomenShoesQuery, [], (error, result) => {
		if (error) {
			console.log(error);
			return res.status(500).send({ msg: "Database ERROR" });
		}
		const allShoes = result.rows;

		const insertStockQuery = allShoes.map(({ id }) => womenStockTableQuery(id));
		pool.query(insertStockQuery.join(""), [], (error) => {
			if (error) {
				console.log(error);
				return res.status(500).send({ msg: "Database ERROR" });
			}
			// res.send({ msg: "Database stock updated with new products." });
		});
	});

	// initializate stock table for women kids
	const allKidShoesQuery =
		"select * from shoes where shoes.productUserType='Kids';";
	pool.query(allKidShoesQuery, [], (error, result) => {
		if (error) {
			console.log(error);
			return res.status(500).send({ msg: "Database ERROR" });
		}
		const allShoes = result.rows;

		const insertStockQuery = allShoes.map(({ id }) => kidStockTableQuery(id));
		pool.query(insertStockQuery.join(""), [], (error) => {
			if (error) {
				console.log(error);
				return res.status(500).send({ msg: "Database ERROR" });
			}
			res.send({ msg: "Database stock updated with new products." });
		});
	});
});

export default router;
