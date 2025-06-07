const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    account: { type: String, required: true },
    routing: { type: String, required: true }
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;

