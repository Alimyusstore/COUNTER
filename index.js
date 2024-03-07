// COUNTER 
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const labelCounter = document.getElementById("labelCounter");

let count = 0;

increaseBtn.onclick = function() {
    count++;
    labelCounter.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    labelCounter.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    labelCounter.textContent = count;
}