const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 🔥 THIS FIXES YOUR ERROR
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Backend running ✅");
});

app.post('/order', (req, res) => {
    const { name, order } = req.body;

    if (!name || !order) {
        return res.status(400).json({ message: "Missing data" });
    }

    res.json({
        message: `Order received for ${order} by ${name}`
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});