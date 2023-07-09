export const menShoesTableQuery = `INSERT INTO shoes(id, productName, imgLinks, category, productUserType, price, explanation) 
VALUES 
		(1,'Ultraboost 4.0','1.jpeg','Running','Men',85.99,'Ultraboost technology that make you feel like you are walking on air. Stocking only the most sought-after footwear, they source and curate some of the most hard to find sneakers from around the world.'),
    (2, 'Air Max 270', '2.jpeg', 'Running', 'Men', 120.00, 'The Air Max 270 is the first-ever Air Max sneaker designed specifically for all-day comfort.'),
    (3, 'Chuck Taylor All Star', '3.jpeg', 'Casual', 'Men', 55.00, 'The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity.'),
    (4, 'Old Skool', '4.jpeg', 'Skateboarding', 'Men', 60.00, 'The Old Skool, the Vans classic skate shoe and first to bear the iconic side stripe, has a low-top lace-up silhouette with a durable suede and canvas upper with padded tongue and lining and Vans signature Waffle Outsole.'),
    (5, 'Classic Leather', '5.jpeg', 'Running', 'Men', 75.00, 'The Classic Leather is a timeless sneaker that has been a Reebok favorite since its introduction in the 1980s.'),
    (6, 'Superstar', '6.jpeg', 'Casual', 'Men', 80.00, 'The Superstar is a low-top shoe manufactured by athletic goods company Adidas since 1969.'),
    (7, 'Gel-Kayano 27', '7.jpeg', 'Running', 'Men', 160.00, 'The GEL-Kayano 27 is a stability road running shoe that has been designed for runners who need a little extra support.'),
    (8, 'Chuck 70 High Top', '8.jpeg', 'Casual', 'Men', 85.00, 'The Chuck 70 High Top is a throwback sneaker that draws on vintage details like 14 oz. cotton canvas, higher rubber siding, and a cushioned footbed.'),
    (9, 'Sk8-Hi', '9.jpeg', 'Skateboarding', 'Men', 65.00, 'The Sk8-Hi is a Vans classic skate shoe with a high-top silhouette and signature side stripe.');`;

export const womenShoesTableQuery = `INSERT INTO shoes(id, productName, imgLinks, category, productUserType, price, explanation)
VALUES
  (10,'Nike Air Max 2090','1.jpeg','Running','Women',149.99,'The Nike Air Max 2090 delivers a futuristic look while still paying homage to the iconic Air Max 90. A transparent mesh upper blends with timeless OG features for an edgy, modernized look.'),
  (11,'Adidas Ultraboost 21','2.jpeg','Running','Women',179.99,'Experience the feeling of soft and responsive cushioning with every stride in these womens Ultraboost 21 running shoes. The streamlined design features adidas Primeknit upper that wraps the foot with an engineered fit for targeted support.'),
  (12,'Vans Old Skool','3.jpeg','Skateboarding','Women',59.99,'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe, has a low-top lace-up silhouette with a durable suede and canvas upper with padded tongue and lining and Vans signature Waffle Outsole.'),
  (13,'Converse Chuck Taylor All Star','4.jpeg','Casual','Women',49.99,'The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time.'),
  (14,'Puma Cali Sport Mix','5.jpeg','Casual','Women',69.99,'The Cali Sport Mix takes cues from the original California, a laid-back and effortlessly cool sneaker inspired by West Coast streetwear. The Cali Sport Mix features a mix of materials, a stacked sole, and laid-back design.'),
  (15,'Nike Dunk Low','6.jpeg','Lifestyle','Women',99.99,'The Nike Dunk Low brings a fresh twist to a classic design. This low-top take adds a split-colored sole, a mix of materials on the upper and a special graphic on the sockliner.'),
  (16,'Adidas NMD_R1','7.jpeg','Lifestyle','Women',129.99,'The NMD_R1 combines modern materials with retro runner style. The knit upper is designed to flex and breathe for optimal comfort, while the Boost midsole provides responsive cushioning with every step.'),
  (17,'Skechers Go Walk 5','8.jpeg','Walking','Women',64.99,'The Skechers GOwalk 5 is the most advanced walking shoe ever, with premium materials and innovative technologies that deliver the ultimate walking experience. The lightweight and responsive ULTRA GO cushioning and high-rebound COMFORT PILLAR TECHNOLOGY provide superior comfort.'),
  (18,'New Balance Fresh Foam 1080v11','9.jpeg','Running','Women',149.99,'The Fresh Foam 1080v11 provides luxurious comfort for the long run. This soft, plush shoe features data-driven Fresh Foam technology for an ultra-cushioned, lightweight ride.'),
  (19,'Brooks Adrenaline GTS 22','10.jpeg','Running','Women',129.99,'The Adrenaline GTS 22 is the perfect balance of support and soft cushioning. The DNA LOFT cushioning provides a soft, luxurious feeling underfoot without losing responsiveness or durability, while the GuideRails® support system provides holistic support for your entire body.'),
  (20,'Asics Gel-Kayano 28','11.jpeg','Running','Women',159.99,'The Gel-Kayano 28 delivers superior stability and comfort for long-distance runs. The lightweight and breathable mesh upper provides a comfortable fit, while the Gel technology in the heel and forefoot absorbs shock and enhances cushioning.');`;

export const kidsShoesTableQuery = `INSERT INTO shoes(id, productName, imgLinks, category, productUserType, price, explanation)
VALUES
  (21,'Nike Air Max 270','1.jpeg','Running','Kids',119.99,'The Nike Air Max 270 is the first-ever Air Max sneaker designed specifically for all-day comfort. The upper combines the exaggerated tongue from the Air Max 180 and classic elements from the Air Max 93. This version features a breathable mesh upper with no-sew overlays for a sleek look.'),
  (22,'Adidas Ultraboost 21','2.jpeg','Running','Kids',179.99,'Experience the feeling of soft and responsive cushioning with every stride in these womens Ultraboost 21 running shoes. The streamlined design features adidas Primeknit upper that wraps the foot with an engineered fit for targeted support.'),
  (23,'Vans Old Skool','3.jpeg','Skateboarding','Kids',59.99,'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe, has a low-top lace-up silhouette with a durable suede and canvas upper with padded tongue and lining and Vans signature Waffle Outsole.'),
  (24,'Converse Chuck Taylor All Star','4.jpeg','Casual','Kids',49.99,'The Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time.'),
  (25,'Puma Cali Sport Mix','5.jpeg','Casual','Kids',69.99,'The Cali Sport Mix takes cues from the original California, a laid-back and effortlessly cool sneaker inspired by West Coast streetwear. The Cali Sport Mix features a mix of materials, a stacked sole, and laid-back design.'),
  (26,'Nike Dunk Low','6.jpeg','Lifestyle','Kids',99.99,'The Nike Dunk Low brings a fresh twist to a classic design. This low-top take adds a split-colored sole, a mix of materials on the upper and a special graphic on the sockliner.'),
  (27,'Adidas NMD_R1','7.jpeg','Lifestyle','Kids',129.99,'The NMD_R1 combines modern materials with retro runner style. The knit upper is designed to flex and breathe for optimal comfort, while the Boost midsole provides responsive cushioning with every step.'),
  (28,'Skechers Go Walk 5','8.jpeg','Walking','Kids',64.99,'The Skechers GOwalk 5 is the most advanced walking shoe ever, with premium materials and innovative technologies that deliver the ultimate walking experience. The lightweight and responsive ULTRA GO cushioning and high-rebound COMFORT PILLAR TECHNOLOGY provide superior comfort.'),
  (29,'New Balance Fresh Foam 1080v11','9.jpeg','Running','Kids',149.99,'The Fresh Foam 1080v11 provides luxurious comfort for the long run. This soft, plush shoe features data-driven Fresh Foam technology for an ultra-cushioned, lightweight ride.');`;

export const menStockTableQuery = (
	shoeId
) => `INSERT INTO stock(size, colour, amount, shoeId)
  VALUES
    (5.5, 'Black', 0, ${shoeId}),
    (6, 'Black', 1, ${shoeId}),
    (6.5, 'Black', 1, ${shoeId}),
    (7, 'Black', 1, ${shoeId}),
    (7.5, 'Black', 1, ${shoeId}),
    (8, 'Black', 0, ${shoeId}),
    (8.5, 'Black', 0, ${shoeId}),
    (9, 'Black', 1, ${shoeId}),
    (9.5, 'Black', 1, ${shoeId}),
    (10, 'Black', 1, ${shoeId}),
    (10.5, 'Black', 1, ${shoeId}),
    (11, 'Black', 0, ${shoeId});`;

export const womenStockTableQuery = (
	shoeId
) => `INSERT INTO stock(size, colour, amount, shoeId)
  VALUES
    (3.5, 'Black', 0, ${shoeId}),
    (4, 'Black', 1, ${shoeId}),
    (4.5, 'Black', 0, ${shoeId}),
    (5, 'Black', 0, ${shoeId}),
    (5.5, 'Black', 0, ${shoeId}),
    (6, 'Black', 1, ${shoeId}),
    (6.5, 'Black', 1, ${shoeId}),
    (7, 'Black', 1, ${shoeId}),
    (7.5, 'Black', 1, ${shoeId}),
    (8, 'Black', 0, ${shoeId}),
    (8.5, 'Black', 0, ${shoeId}),
    (9, 'Black', 1, ${shoeId});`;

export const kidStockTableQuery = (
	shoeId
) => `INSERT INTO stock(size, colour, amount, shoeId)
VALUES
    (2, 'Black', 1, ${shoeId}),
    (2.5, 'Black', 0, ${shoeId}),
    (3, 'Black', 1, ${shoeId}),
    (3.5, 'Black', 0, ${shoeId}),
    (4, 'Black', 1, ${shoeId}),
    (4.5, 'Black', 0, ${shoeId}),
    (5, 'Black', 0, ${shoeId}),
    (5.5, 'Black', 0, ${shoeId}),
    (6, 'Black', 1, ${shoeId}),
    (6.5, 'Black', 1, ${shoeId}),
    (7, 'Black', 1, ${shoeId}),
    (7.5, 'Black', 1, ${shoeId});`;
