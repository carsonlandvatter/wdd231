const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');


//Add event Listeners for opening and closing the modals.
openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
})