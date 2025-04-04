/* ----- Top Navigation Bar ----- */
const topNavBar = document.querySelector('#topNav');
const topNavSections = document.querySelectorAll('.topNavSections');
const topNavItems = document.querySelectorAll('.topNavItems');

// Nav shrinking when reach this section
const shrinkSectionName = document.querySelector('.shrinkSection').getAttribute('id');
// allow Nav to hide when reach a specific section
const allowHideSectionName = document.querySelector('.allowHideSection').getAttribute('id');
const offset = 50;

let allowHide = false;
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset
    // Highlight Nav items
    // console.log(allowHide)
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