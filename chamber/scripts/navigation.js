const navigation = document.getElementById("nav-bar");
const hambutton = document.getElementById("ham-btn");

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
})