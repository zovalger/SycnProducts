const axios = require("axios");
const fs = require("fs");

const { URL_SERVER } = require("./config");

const syncProducts = async () => {
	if (!fs.existsSync("./out"))
		return console.log(
			`directory "/out" no found, execute "npm run formate" first`
		);

	const buffer = fs.readFileSync("./out/dataProducts.json");

	const productsData = JSON.parse(buffer);

	Promise.all(
		productsData.map(async (product) => {
			try {
				await axios.post(`${URL_SERVER}/api/product`, product);
			} catch (error) {
				console.log(error);
			}
		})
	);
};

syncProducts();
