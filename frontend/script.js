// Send Order to backend
function sendOrder() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const order = document.getElementById('order').value.trim();

    if (!name || !phone || !order) {
        alert("Please fill all fields");
        return;
    }

    fetch('https://restaurant-website-1p5e.onrender.com/order', { // <-- live backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, order })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Order response:", data);
        alert(data.message);
    })
    .catch(err => {
        console.error("Error sending order:", err);
        alert("Error sending order. See console for details.");
    });
}

// Send Contact Message to backend
function sendMessage() {
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('msg').value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
    }

    fetch('https://restaurant-website-1p5e.onrender.com/contact', { // <-- live backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Contact response:", data);
        alert(data.message);
    })
    .catch(err => {
        console.error("Error sending message:", err);
        alert("Error sending message. See console for details.");
    });
}
