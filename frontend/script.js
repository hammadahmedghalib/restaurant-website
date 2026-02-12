function sendOrder() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const order = document.getElementById('order').value.trim();

  if (!name || !phone || !order) {
    alert("Please fill all fields");
    return;
  }

  fetch('https://hotel-website-2vsk.onrender.com/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, order })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Error sending order: " + err));
}
