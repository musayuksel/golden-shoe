CREATE TABLE shoes(
	id serial PRIMARY KEY,
	productName VARCHAR (255) UNIQUE NOT NULL,
	imgLinks VARCHAR (255) UNIQUE NOT NULL,
	category VARCHAR (255) NOT NULL,
	productUserType VARCHAR( 255 ) NOT NULL,
	price DECIMAL NOT NULL,
	explanation VARCHAR(5000) NOT NULL
);
CREATE TABLE stock(
	id serial PRIMARY KEY,
	size DECIMAL NOT NULL,
	colour VARCHAR (25) NOT NULL,
	amount INT NOT NULL,
	shoeId INT NOT NULL REFERENCES shoes(id)
);


INSERT INTO shoes(productName,imgLinks,category,productUserType,price,explanation) VALUES ('Ultraboost 4.0','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkhFFNV9khc5kv3os6yA88btP_94oqGZFvA&usqp=CAU','Running','Mens',85.99,'Ultraboost technology that make you feel like you are walking on air. Stocking only the most sought-after footwear, they source and curate some of the most hard to find sneakers from around the world.');

INSERT INTO stock(size,colour,amount,shoeId) VALUES (5.5,'Black',5,1);
INSERT INTO stock(size,colour,amount,shoeId) VALUES (6,'White',2,1);
INSERT INTO stock(size,colour,amount,shoeId) VALUES (6,'Blue',0,1);
INSERT INTO stock(size,colour,amount,shoeId) VALUES (6.5,'Blue',2,1);
