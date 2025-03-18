const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("currentYear");

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

yearElement.textContent = currentYear;