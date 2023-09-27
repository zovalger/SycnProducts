const fs = require("fs");
const text = fs.readFileSync("./src/products.txt", "utf-8");

fs.existsSync("./out") || fs.mkdirSync("./out");

const res = text
	.split("\n")
	.map((line) => line.trim().toLocaleLowerCase().split("\t"))
	.map((product) => {
		const p = product[0]
			? {
					keywords: [],
					currencyType: "USD",
					name: product[0].trim(),
					cost: product[1] ? parseFloat(product[1].replace(",", ".")) : 0,
			  }
			: undefined;

		console.log(p);

		return p;
	})
	.filter((product) => !!product);

fs.writeFileSync("./out/dataProducts.json", JSON.stringify(res));
