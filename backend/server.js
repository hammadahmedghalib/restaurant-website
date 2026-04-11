const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send("Backend is running ✅");
});

// Order route
app.post('/order', (req, res) => {
    console.log("DATA RECEIVED:", req.body);

    const { name, order } = req.body;

    if (!name || !order) {
        return res.status(400).json({ message: "Missing data" });
    }

    res.json({
        message: `Order received for ${order} by ${name}`
    });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});