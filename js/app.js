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

//The nodelist containing all available sections
const navBarItems = document.querySelectorAll('.landing__container');
//The navbar
const navBar = document.querySelector('header');
//the unordered list containing the section buttons
const nav_List = navBar.querySelector('ul');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const makeViewable = function (element) {
    const sectionName = element.target.textContent;
    const actualSection = document.querySelector(`[data-nav = "${sectionName}"]`);
    actualSection.scrollIntoView({behavior: "smooth"});
    actualSection.classList.toggle('your-active-class');
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/*calling the function to build the nav || or maybe make 
a loop that runs whenever the javascript page is loaded */
const addNavItems = function () {
    navBarItems.forEach(navItem => {
        //find the section names to be added to the ul
        const nav_Item = navItem.querySelector('h2');
        //create a list item and append it to the ul in the header
        const li = document.createElement('li');
        li.classList.toggle('menu__link');
        li.innerHTML = nav_Item.textContent;
        li.addEventListener('click', makeViewable);
        nav_List.appendChild(li);

    });
};

// Add class 'active' to section when near top of viewport

const activeSection = function () {
    //find and store all section elements in the document
    const sectionElements = document.querySelectorAll('section');
    
    const activeObserver = new IntersectionObserver(entries => {
        let activeSection = document.querySelector('.your-active-class');
        entries.sort((a, b) => {return b.intersectionRatio - a.intersectionRatio});
        entries[0].target.classList.toggle('your-active-class', entries[0].target != activeSection);
        activeSection.classList.toggle('your-active-class');
    });

    sectionElements.forEach(section => activeObserver.observe(section))

};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', addNavItems, true); 

// Scroll to section on link click

//Snav_List.childNodes


// Set sections as active
window.addEventListener('scroll', activeSection);

