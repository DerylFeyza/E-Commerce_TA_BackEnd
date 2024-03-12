const express = require("express");
const app = express();
const auth = require("../auth/auth");
const receiptController = require("../controllers/receipt.controller");

app.get("/history", auth.authVerify, receiptController.getTransactionHistory);
app.get("/:id", auth.authVerify, receiptController.getUserReceipt);
app.delete("/:id", auth.authVerify, receiptController.userDeleteOwnReceipt);

module.exports = app;
