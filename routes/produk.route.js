const express = require("express");
const app = express();
const upload = require(`../controllers/upload-foto`);
const produkController = require("../controllers/produk.controller");
const auth = require("../auth/auth");
const { checkRole } = require("../middleware/checkRole");
app.get(
	"/",
	auth.authVerify,
	checkRole(["admin"]),
	produkController.getallProduct
);
app.post("/find", produkController.findProduct);
app.post(
	"/add",
	auth.authVerify,
	checkRole(["seller", "admin"]),
	produkController.addProduct
);
app.delete(
	"/delete/:id",
	auth.authVerify,
	checkRole(["seller", "admin"]),
	produkController.deleteProduct
);
app.put(
	"/update/:id",
	auth.authVerify,
	checkRole(["seller", "admin"]),
	produkController.updateProduct
);

module.exports = app;
