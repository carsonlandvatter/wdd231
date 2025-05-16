//Store the selected elements that we willl use.
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener/*This telss the browser "Wait for this to happen"*/('click'/*This is the event we're listening for*/, () => /*This is the function that runs when the click happens*/{
//We want the navigation to show here or hide.
//We want the hmaburger icon to change from ☰ to X.
//We can do this by adding or removing a class (show) on both elements. 
    mainnav.classList/*Goes through all of the classes to see if 'show' exists or not. if it does, it will be toggled off, if it doesn't, it will be toggled on.*/.toggle('show');
    hambutton.classList.toggle('show');
});