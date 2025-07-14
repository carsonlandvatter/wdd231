const currentYear = document.getElementById('current-year');
const year = new Date().getFullYear();

currentYear.textContent = `${year}`;

const lastModified = document.getElementById('last-modified');

const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
}

const date = new Date(document.lastModified).toLocaleString('en-US', options);

lastModified.textContent = `Last Modification: ${date}`