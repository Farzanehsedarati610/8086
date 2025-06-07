const express = require("express");
const { getTransactionDetails } = require("./src/transactions");

const app = express();

app.get("/transaction/:hash", (req, res) => {
    const details = getTransactionDetails(req.params.hash);
    if (!details) return res.status(404).json({ error: "Invalid transaction hash." });
    res.json(details);
});

// ✅ Connect to port 8086
const PORT = 8086;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

