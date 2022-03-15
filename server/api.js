import { Router } from "express";
import pool from "./db";
const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});
router.get("/all", (_, res) => {
	const selectAllShoesQuery =
				"SELECT shoes.id as shoesId,productName,category,imgLinks,productUserType,price,explanation,colour,amount,size from shoes INNER JOIN stock AS s ON s.shoeId = shoes.id ORDER BY shoesId;";
			pool.query(selectAllShoesQuery, [	],(error,result)=>{
					if (error) {
						return res.status(500).send({ msg: "Database ERROR!!!" });
					}
					res.send(result.rows)
				})
		
});

export default router;
