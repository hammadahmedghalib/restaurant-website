const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(cors({ origin: 'https://hammadahmedghalib.github.io' })); // allow frontend
app.use(bodyParser.json());

// Save orders to file
app.post('/order', (req, res) => {
    const { name, phone, order } = req.body;
    const newOrder = { name, phone, order, time: new Date() };
    fs.readFile('orders.json', (err, data) => {
        const orders = err ? [] : JSON.parse(data);
        orders.push(newOrder);
        fs.writeFile('orders.json', JSON.stringify(orders, null, 2), () => {});
    });
    console.log('New Order:', name, phone, order);
    res.json({ message: 'Order received successfully!' });
});

// Save contact messages
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const newMsg = { name, email, message, time: new Date() };
    fs.readFile('messages.json', (err, data) => {
        const msgs = err ? [] : JSON.parse(data);
        msgs.push(newMsg);
        fs.writeFile('messages.json', JSON.stringify(msgs, null, 2), () => {});
    });
    console.log('Contact Message:', name, email, message);
    res.json({ message: 'Message sent successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
