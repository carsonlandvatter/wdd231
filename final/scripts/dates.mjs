//Get the id for where I will put the full year.
export function showFullYear() {
    const currentYear = document.querySelector('#current-year');

    //create a new instance of the date and get the full year within the date.
    const year = new Date().getFullYear();

    //make the text content of the current year, the full year that we got earlier.
    currentYear.textContent = `${year}`;
}

//LAST MODIFIED

//Get the id for where I will enter the last modified date.
export function showLastModified() {
    const lastModified = document.querySelector('#last-modified');

    //change the dates to be numeric
    const options = {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: 'numeric',
        second: 'numeric'
    }

    //create a new instance of the date for when it was last modified.
    const modifiedDate = new Date(document.lastModified).toLocaleString('en-US', options);

    //toLocaleString is a method that passes in two arguments, the locale (en-US) and what parts to include: options object.

lastModified.textContent = `Last Modification: ${modifiedDate}`;
}