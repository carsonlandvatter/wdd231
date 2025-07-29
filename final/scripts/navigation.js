const hamButton = document.querySelector(".ham-btn");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
})

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
})