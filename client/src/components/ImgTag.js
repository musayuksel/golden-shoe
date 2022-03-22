import React from "react";

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const imagesWomen = importAll(
	require.context(
		"../styles/shoesPlaceholderImgs/women",
		false,
		/\.(png|jpe?g|svg)$/
	)
);
const imagesMen = importAll(
	require.context(
		"../styles/shoesPlaceholderImgs/men",
		false,
		/\.(png|jpe?g|svg)$/
	)
);
const imagesKids = importAll(
	require.context(
		"../styles/shoesPlaceholderImgs/kids",
		false,
		/\.(png|jpe?g|svg)$/
	)
);
export default function ImgTag({ imgLink, alt, className, userType }) {
	let imgURL = "";
	if (userType === "women") {
		imgURL = imagesWomen[imgLink].default;
	} else if (userType === "kids") {
		imgURL = imagesKids[imgLink].default;
	} else {
		imgURL = imagesMen[imgLink].default;
	}

	return <img src={imgURL} alt={alt} className={className} />;
}
