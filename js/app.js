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
//where the navBar document fragment will be anchored
const navBar = document.querySelector('header');
navBar.classList.toggle('konnichiha',  0 < 1);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const addNavItems = function () {
    const nav_List = navBar.querySelector('ul');
    navBarItems.forEach(navItem => {
        //find the section names to be added to the ul
        const nav_Item = navItem.querySelector('h2');
        //create a list item and append it to the ul in the header
        const li = document.createElement('li');
        li.classList.toggle('menu__link');
        li.innerHTML = nav_Item.textContent;
        nav_List.appendChild(li);

    });
};



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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/*calling the function to build the nav || or maybe make 
a loop that runs whenever the javascript page is loaded */
addNavItems();

// Add class 'active' to section when near top of viewport

/* i would like to use a scroll event listener but I don't want 
something that constantly fires maybe somthing that listens to
a scroll end event if that even exists */



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', activeSection);

