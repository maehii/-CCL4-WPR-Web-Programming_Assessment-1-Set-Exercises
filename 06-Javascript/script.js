// 06. Javascript

const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const totalDisplay = document.getElementById('total');
const calcBtn = document.getElementById('calcBtn');

// calculate total when button is clicked
calcBtn.addEventListener('click', () => {
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // validate input
    if (isNaN(cost) || isNaN(liters) || cost < 0 || liters < 0) {
        alert("Please enter valid positive numbers!");
        return;
    }

    const total = cost * liters;
    totalDisplay.textContent = `total: AED ${total.toFixed(2)} `;
});