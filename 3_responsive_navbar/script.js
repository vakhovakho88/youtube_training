//make the menu item to toggle the menu

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click', ()=>{
    //it adds class to an object, if the object doesn't have this class
    //if it has it, it will be removed
    navbarLinks.classList.toggle('active');
} )
