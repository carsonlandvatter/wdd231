//VISITOR MESSAGE

//store the time when the visitor is on a page

//get the time when the last visit was:
//This however, comes back as a string
//We cannot set it to a number get. Once we get it, we can parse it into an integer.

const visitorId = document.getElementById('visitor-message');

//Parsing it into and integer: 
const getVisit = parseInt(localStorage.getItem("lastVisit"));

const now = Date.now()

//get the difference between now and getVisit in milliseconds
const timeDifference = now - getVisit;

//convert milliseconds into days
const daysBetween = (timeDifference / 86400000);
 
//make the comparison
if (!getVisit) {
    visitorId.textContent = `Welcome! Let us know if you have any questions`;
} else if (daysBetween > 0 && daysBetween < 1) {
    visitorId.textContent = `Back so soon! Awesome!`;
} else {
    visitorId.textContent = `You last visited ${Math.floor(daysBetween)} day(s) ago.`
}

//always update, so put this at the bottom instead of the top
localStorage.setItem("lastVisit", Date.now());


//recap: set the current time: localStorage.setItem("lastVisit", Date.now());
//then get it: const lastVisit = parsenInt(localStorage.getItem("lastVisit"));

//"lastVisit" and Date.now() are considered key value pairs. When getting the item, we only need to use one key value pair.
