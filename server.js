const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const userRoute = require("./routes/user.route");
app.use("/user", userRoute);
const produkRoute = require("./routes/produk.route");
app.use("/produk", produkRoute);
const transaksiRoute = require("./routes/transaksi.route");
app.use("/transaksi", transaksiRoute);

app.listen(PORT, () => {
	console.log(`dah jalan wir ${PORT}`);
});
