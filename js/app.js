/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBarFragment = document.createDocumentFragment();
const navBarItems = document.querySelectorAll('.landing__container');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const addNavItems = function () {
    const navBar = document.querySelector('header');
    navBarItems.forEach(navItem => {
        console.log(navItem);
        const nav_Item = navItem.querySelector('h2');
        const li = document.createElement('li');
        
        li.innerHTML = nav_Item;
        console.log(li);
        navBarFragment.appendChild(li);
    });
    navBar.appendChild(navBarFragment);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

addNavItems();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


