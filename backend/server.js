const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

const FILE = 'orders.json';

// create file if not exists
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]");
}

// Home route
app.get('/', (req, res) => {
    res.send("Restaurant Backend Running on Render ✅");
});

// Save order
app.post('/order', (req, res) => {
    const orders = JSON.parse(fs.readFileSync(FILE));

    orders.push({
        id: Date.now(),
        name: req.body.name,
        order: req.body.order
    });

    fs.writeFileSync(FILE, JSON.stringify(orders, null, 2));

    res.json({ message: "Order saved successfully ✅" });
});

// Get orders
app.get('/orders', (req, res) => {
    const orders = JSON.parse(fs.readFileSync(FILE));
    res.json(orders);
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});