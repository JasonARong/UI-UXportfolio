
// UI Alien
// Eye shift
/*
let eyeIn = document.getElementById('eyeIn');
let eyeOut = document.getElementById('eyeOut');

//shift svg function
const shift = (image, maxTranslation, rangeX, rangeY) => {
          
    const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
    
    image.animate({ 
      translate: currentTranslation, 
    }, { duration: 750, fill: 'forwards', easing: 'ease' });
}

window.onmousemove = e => {
    let rect = eyeOut.getBoundingClientRect()
    let radius = 1000;
    
    let centerX = rect.left + (rect.width / 2);
    let centerY = rect.top + (rect.height / 2);
    
    let rangeX = (e.clientX - centerX) / radius;
    let rangeY = (e.clientY - centerY) / radius;
    
    if(rangeX<1.1 && rangeY<1.1){
        shift(eyeIn, 8, rangeX, rangeY);
        shift(eyeOut, 5, rangeX, rangeY);
        // console.log(rangeX);
        // console.log(rangeY);
    }
}

document.body.onmouseleave = () => {
    shift(eyeIn, 8, -0.45, 0.);
    shift(eyeOut, 5, -0.45, 0);
}

//blush & smiling, talking to UI alien opacity
let UIalienS = document.getElementById('UIalienS');
let blushes = document.querySelectorAll('#blush rect');
let eyeClose = document.getElementById('eyeClose');
let eyeOpen = document.getElementById('eyeOpen');
let outputElement = document.getElementById('output');

eyeClose.style.opacity = 0;

UIalienS.addEventListener('mouseover', () => {
    // console.log(event);
    eyeOpen.style.opacity = 0;
    eyeClose.style.opacity = 1;
    blushes.forEach((blush)=>{
        blush.style.fill = '#F1B7FF'
    });

    //output
    outputElement.style.opacity = 1;
});

UIalienS.addEventListener('mouseout', () => {
    eyeOpen.style.opacity = 1;
    eyeClose.style.opacity = 0;
    blushes.forEach((blush)=>{
        blush.style.fill = '#C2C2C2'
    });
    
    outputElement.style.opacity = 0;
    
});


//UI alien talking
let strings = [ 'Hello! How\'s going?', 
                'Welcome to Jiecheng\'s protfolio.', 
                'He is an awesome UI/UX Designer.',
                'I hope you enjoy his works!'];
const otherProjectStrings = [
                'Here are some more projects.',
                'Please Enjoy!'  
                ];                
let currentIndex = 0;
let typingTimer; //timer for the typewriter effect.

let path = window.location.pathname;
console.log( path );
if(path=='/otherProjects.html'){
    strings = otherProjectStrings;
}

//charIndex: the curr index of the char in the string
function typeString(str, charIndex) { 
    if (charIndex < str.length) {
        // update content with string with one new char each time 
        outputElement.textContent = str.substring(0, charIndex + 1);
        charIndex++;
        typingTimer = setTimeout(() => {
            typeString(str, charIndex);
        }, 25);
    } else {
        clearTimeout(typingTimer);
    }
}


UIalienS.addEventListener('click', () =>{
    clearTimeout(typingTimer);
    
    typeString(strings[currentIndex], 0);
    currentIndex = (currentIndex + 1) % strings.length;
});


*/



/* ----- Top Navigation Bar ----- */
const topNavBar = document.querySelector('#topNav');
const topNavSections = document.querySelectorAll('.topNavSections');
const topNavItems = document.querySelectorAll('.topNavItems');
// Nav shrinking when reach this section
const shrinkSectionName = document.querySelector('.shrinkSection').getAttribute('id');
// allow Nav to hide when reach a specific section
// const allowHide = topNavBar.classList.contains('allowHide');
const allowHideSectionName = document.querySelector('.allowHideSection').getAttribute('id');
const offset = 50;

let allowHide = false;
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset
    // Highlight Nav items
    console.log(allowHide)
    if(allowHide){
        if (prevScrollpos < currentScrollPos) {
            
            topNavBar.classList.add('hide');
        }else{
            topNavBar.classList.remove('hide');
            
        }
    }
    prevScrollpos = currentScrollPos;

    topNavSections.forEach((topNavSection)=>{
        let sectionDistance = topNavSection.offsetTop;
        let sectionName = topNavSection.getAttribute('id');

        topNavItems.forEach((topNavItem) => {
            let ItemName = topNavItem.getAttribute('data-item');
            
            // Scroll close to bottom light light contact nav
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - offset*3){
                changeNavHightlight('contact', ItemName, topNavItem, 'chosen');
            }
            // when Scroll distance > a sections distance to the page's top
            else if(currentScrollPos > sectionDistance - offset){
                changeNavHightlight(sectionName, ItemName, topNavItem, 'chosen');   
                
                // Shrinking
                if(sectionName == shrinkSectionName){
                    if(!topNavBar.classList.contains('shrink')){ // shrink
                        topNavBar.classList.add('shrink');
                    }
                }

                // Allow Hiding                
                if(sectionName == allowHideSectionName){
                    allowHide = true;
                }
                
            }
            // when Scroll distance < a sections distance to the page's top
            else{ 
                if(sectionName == ItemName && topNavItem.classList.contains('chosen')){
                    topNavItem.classList.remove('chosen');
                }
                if(sectionName == shrinkSectionName){
                    if(topNavBar.classList.contains('shrink')){ // shrink
                        topNavBar.classList.remove('shrink');
                    }
                }
                // Disallow Hiding                
                if(sectionName == allowHideSectionName){
                    allowHide = false;
                }
            }
        });
    });
});

function changeNavHightlight(sectionName, ItemName, topNavItem, className){
    if(ItemName == sectionName){
        if(!topNavItem.classList.contains(className)){
            topNavItem.classList.add(className);
        } 
    }else{ // remove blue dot for any other items
        if(topNavItem.classList.contains(className)){
            topNavItem.classList.remove(className);
        } 
    }
}



/*

const projectsNav = document.querySelector('#projectsNav');
const contactNav = document.querySelector('#contactNav');

const introSection = document.querySelector('#introduction');
const contactSection = document.querySelector('#contact');
const introSectionDistance = introSection.offsetTop;

window.addEventListener("scroll", () => {    
    // scroll to intro section, shrink the nav bar, hightlight project nav
    if(window.pageYOffset > introSectionDistance - offset){
        if(!topNavBar.classList.contains("shrink")){ // shrink
            topNavBar.classList.add("shrink");
        }
        if(!projectsNav.classList.contains("chosen")){ // hightlight project nav
            projectsNav.classList.add("chosen");
        }

        // Scroll close to bottom light light contact nav, remove project nav highlight
        if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - offset*3){
            console.log('scrolled to bottom');
            if(!contactNav.classList.contains("chosen")){ // hightlight contact nav
                contactNav.classList.add("chosen");
            }
            if(projectsNav.classList.contains("chosen")){ // remove project nav hightlight
                projectsNav.classList.remove("chosen");
            }
        }else{
            if(contactNav.classList.contains("chosen")){ // remove contact nav highlight
                contactNav.classList.remove("chosen");
            }
        }

    }else{
        if(topNavBar.classList.contains("shrink")){ // expand
            topNavBar.classList.remove("shrink");
        } 
        if(projectsNav.classList.contains("chosen")){ // remove project nav hightlight
            projectsNav.classList.remove("chosen");
        }
    }


});
*/


