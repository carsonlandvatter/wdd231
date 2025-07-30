//NON PROFIT MODAL

//Select button to open
const openNonprofit = document.querySelector("#open-np");
//Select modal to open
const nonprofit = document.querySelector("#np-modal");
//Select button to close
const closeNp = document.querySelector('#closeNp');


//Add event Listeners for opening and closing the modals.
openNonprofit.addEventListener('click', () => {
    nonprofit.showModal();
});

closeNp.addEventListener('click', () => {
    nonprofit.close();
})

//BRONZE MODAL

//Select button to open
const openBronze = document.querySelector("#open-bronze");
//Select modal to open
const bronze = document.querySelector("#bronze-modal");
//Select button to close
const closeBronze = document.querySelector('#closeBronze');


//Add event Listeners for opening and closing the modals.
openBronze.addEventListener('click', () => {
    bronze.showModal();
});

closeBronze.addEventListener('click', () => {
    bronze.close();
})

//SILVER MODAL

//Select button to open
const openSilver = document.querySelector("#open-silver");
//Select modal to open
const silver = document.querySelector("#silver-modal");
//Select button to close
const closeSilver = document.querySelector('#closeSilver');


//Add event Listeners for opening and closing the modals.
openSilver.addEventListener('click', () => {
    silver.showModal();
});

closeSilver.addEventListener('click', () => {
    silver.close();
})

//GOLD

//Select button to open
const openGold = document.querySelector("#open-gold");
//Select modal to open
const gold = document.querySelector("#gold-modal");
//Select button to close
const closeGold = document.querySelector('#closeGold');


//Add event Listeners for opening and closing the modals.
openGold.addEventListener('click', () => {
    gold.showModal();
});

closeGold.addEventListener('click', () => {
    gold.close();
})
