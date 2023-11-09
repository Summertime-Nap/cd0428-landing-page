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


//active section helper function
const activeSection = function() {
    //find and store all section elements in the document
    const sections = document.querySelectorAll('section');
    //find which section is currently active
    for (section in sections) {
        if (section.classList === 'your-active-class') {
            //debbuger code over @@@@@@@@@heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeereeeeeeeeeeeeeeeeeee!!!!!!
            console.log(`yabbba dabba dooo`); 
            return section};
    };
    //find the index of the currently active section
    const index = sections.indexOf(section);
    //compare the sum of the .is
}

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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


