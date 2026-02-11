const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/order', (req, res) => {
    const { name, phone, order } = req.body;
    console.log('New Order:', name, phone, order);
    res.json({ message: 'Order received successfully!' });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Message:', name, email, message);
    res.json({ message: 'Message sent successfully!' });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
