const year = document.querySelector('#currentyear');
const today = new Date() /*Grabs the current date and time down to the millisecond.*/

year.innerHTML/*injects the new content into the span.*/ = `<span class="currentyear">${today.getFullYear()}</span>`; /*based on today, it will get the full year using the getFullYear() method*/
//innerHTML can inject or read the HTML.


//Grabs the lastModified id
const modifiedDate = document.querySelector('#lastModified');

//Makes a new instance of Date to be the last modified for the document.
const date = new Date(document.lastModified);
//document.lastModified gets the last date and time that the HTML document was modified.
//We need to separate the month, day, and year into separate strings so that we can display them as MM/DD/YYYY onto the screen. We can do this by making three different variables.
//In the month and day variables, we will need to make them strings so that we can use .padStart to summarize them to only 2 digits.
const month = String(date.getMonth()+ 1).padStart(2, '0');
//We need to add the getMonth() method so that we get only the month from the date variable.
//We also need to add one to the method because Javascript sets January to 0, February to 1, etc.
//Lastly, .padStart is saying for every digit that is under 2 characters, add '0' before it. 
const day = String(date.getDay() + 1).padStart(2, '0');
const modifiedYear = date.getFullYear();

//Do the same thing to get the hours, minutes, and seconds.
const hour = String(date.getHours()).padStart(2, '0');
const minute = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
//changes the innerHTML of modifiedDate using a temperal literal.
modifiedDate.innerHTML = `Last Update: ${month}/${day}/${modifiedYear} ${hour}:${minute}:${seconds}`;

