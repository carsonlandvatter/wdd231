    
const visitMessage = document.querySelector('#visitor-message');

const lastVisit = parseInt(localStorage.getItem("lastVisit"));

const daysBetween = (Date.now() - lastVisit) / (1000 * 60 * 60 * 24);

if (!daysBetween) {
    visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
} else if (daysBetween < 1) {
    visitMessage.textContent = `Back again so soon! Awesome!`;
} else {
    visitMessage.textContent = `It's been ${Math.floor(daysBetween)} day(s) since you were here last!`;
}

localStorage.setItem("lastVisit", Date.now());