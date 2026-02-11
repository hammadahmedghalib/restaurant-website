function sendOrder() {
fetch('http://localhost:5000/order', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
name: document.getElementById('name').value,
phone: document.getElementById('phone').value,
order: document.getElementById('order').value
})
}).then(res => res.json()).then(data => alert(data.message));
}


function sendMessage() {
fetch('http://localhost:5000/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
name: document.getElementById('cname').value,
email: document.getElementById('email').value,
message: document.getElementById('msg').value
})
}).then(res => res.json()).then(data => alert(data.message));
}