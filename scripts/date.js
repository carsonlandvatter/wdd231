const currentYear = document.querySelector("#current-year");
const date = new Date().getFullYear();

currentYear.textContent = `${date}`;

//LAST MODIFIED:
const lastModified = document.querySelector("#lastModified");

const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

const modifiedDate = new Date(document.lastModified).toLocaleString('en-US', options);

lastModified.textContent =  `Last Modification: ${modifiedDate}`;