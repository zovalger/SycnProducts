const { config } = require("dotenv");

config();

module.exports = {
	URL_SERVER: process.env.URL_SERVER || "http://localhost:5000",
};
