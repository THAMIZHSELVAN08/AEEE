// COUNTDOWN TIMER
const eventDate = new Date("Feb 22, 2025 00:00:00").getTime();
const timer = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = eventDate - now;
    
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// EVENT DETAILS POPUP
function showEventDetails(eventId) {
    document.getElementById("event-title").innerText = eventId;
    document.getElementById("event-details").classList.add("active");
}

function closeEventDetails() {
    document.getElementById("event-details").classList.remove("active");
}
