const seatContainer = document.getElementById('seats');
const count = document.getElementById('count');
const total = document.getElementById('total');
const price = 2000;

// Ստեղծում ենք 6x8 ցանց
for (let i = 0; i < 48; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateUI();
        }
    });
    seatContainer.appendChild(seat);
}

function updateUI() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * price;
}

document.getElementById('bookBtn').addEventListener('click', () => {
    const selected = document.querySelectorAll('.seat.selected');
    selected.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
    });
    updateUI();
});