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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const addNavItems = function () {
    navBarItems.forEach((navItem) => {
        //find the section names to be added to the ul
        const nav_Item = navItem.querySelector('h2');
        //create a list item and append it to the ul in the header
        const li = document.createElement('li');

        li.classList.toggle('menu__link');
        li.innerHTML = nav_Item.textContent;
        li.dataset.nav = navItem.parentElement.dataset.nav;
        li.addEventListener('click', makeViewable);


        nav_List.appendChild(li);

    });
};

// Add class 'active' to section when near top of viewport

const activeSection = function () {
    //find and store all section elements in the document
    const sectionElements = document.querySelectorAll('section');
    //
    const activeObserver = new IntersectionObserver(entries => {
        let activeSection = document.querySelector('.your-active-class');
        let navMenu = document.querySelector('#navbar__list');
        let oldMenuLink = navMenu.querySelector('.active'); 
        entries.sort((a, b) => {return b.intersectionRatio - a.intersectionRatio});
        entries[0].target.classList.toggle('your-active-class', entries[0].target != activeSection);
        let navData = entries[0].target.dataset.nav;
        let newMenuLink = navMenu.querySelector(`[data-nav = "${navData}"]`);
        oldMenuLink.classList.toggle('active', oldMenuLink === true);
        if (newMenuLink) {
            newMenuLink.classList.toggle('active');

        };
        activeSection.classList.toggle('your-active-class');
    });

    sectionElements.forEach(section => activeObserver.observe(section))

};

// Scroll to anchor ID using scrollTO event

const makeViewable = function (element) {
    let activeSection = document.querySelector('.your-active-class');
    let activeMenuLink = document.querySelector('.active');
    activeSection.classList.toggle('your-active-class');
    if (activeMenuLink) {
        activeMenuLink.classList.toggle('active');

    };
    const sectionName = element.target.textContent;
    const sectionContainer = document.querySelector('main');
    const actualSection = sectionContainer.querySelector(`[data-nav = "${sectionName}"]`);
    

    actualSection.scrollIntoView({behavior: "smooth"});
    actualSection.classList.toggle('your-active-class');
    element.target.classList.toggle('active');
};

/**
 * End Main Functions
 * Begin Events
 * 
*/



// Build menu 
document.addEventListener('DOMContentLoaded', addNavItems, true); 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', activeSection);


