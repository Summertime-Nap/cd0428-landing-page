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


/*a function to detect the section with the active class
 and then move the active class to the section above or below
 depending of the amount of the section in viewport*/
const activeSection = function () {
    //find and store all section elements in the document
    const sectionElements = document.querySelectorAll('section');
    //find which section is currently active
    for (section of sectionElements) {
        console.log(section.classList.contains('your-active-class'));
        if (section.classList.contains('your-active-class')) {
            //find the index of the currently active section
            NodeList.prototype.indexOf = Array.prototype.indexOf;
            const activeSectionIndex = sectionElements.indexOf(section);
            const belowIndex = activeSectionIndex + 1;
            const aboveIndex = activeSectionIndex - 1;
            console.log(belowIndex);
            console.log( `above section = ` + sectionElements[aboveIndex]);
            console.log(`below section = ` + sectionElements[belowIndex]);
            
            const activeSectionViewport = section.getBoundingClientRect();
            const activeSectionViewportSum = activeSectionViewport.top + activeSectionViewport.bottom

            
            //compare the sum of the current active class and the section below or above
            if (sectionElements[aboveIndex]) {
                const aboveSection = sectionElements[aboveIndex];
                const aboveSectionSum = aboveSection.top + aboveSection.bottom;
                if (activeSectionViewportSum < aboveSectionSum) {
                    section.classList.toggle('your-active-class');
                    aboveSection.classList.toggle('your-active-class');
                    break;
                }
            } else if (sectionElements[belowIndex]) {
                const belowSection = sectionElements[belowIndex];
                const belowSectionSum = belowSection.top + belowSection.bottom;

                if (activeSectionViewportSum < belowSectionSum) {
                    section.classList.toggle('your-active-class');
                    belowSection.classList.toggle('your-active-class');
                    break;
                }
            }
        };
    };

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

