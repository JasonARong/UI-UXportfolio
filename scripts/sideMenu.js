const sideMenuCheckBox = document.querySelector('#sideMenuCheckBox');
const sideMenu = document.querySelector('#sideMenu');
const main = document.querySelector('main');
const iconArrow = document.querySelector('#iconArrow');

sideMenuCheckBox.addEventListener('click', () => {
    if (sideMenuCheckBox.checked) {
        // collapse side menu
        if(!sideMenu.classList.contains('collapse')){
            sideMenu.classList.add('collapse');
        }
        // center main element
        if(!main.classList.contains('center')){
            main.classList.add('center');
        }
        // flip arrow icon to point right
        if(!iconArrow.classList.contains('pointRight')){
            iconArrow.classList.add('pointRight');
        }
    } else {
        if(sideMenu.classList.contains('collapse')){
            sideMenu.classList.remove('collapse');
        }
        if(main.classList.contains('center')){
            main.classList.remove('center');
        }
        if(iconArrow.classList.contains('pointRight')){
            iconArrow.classList.remove('pointRight');
        }
    }
});


//Highlight menu items on scroll
const majorSections = document.querySelectorAll('.majorSections');
const contentListItems = document.querySelectorAll('#outerContentList li');
console.log(contentListItems.length);

window.addEventListener("scroll", () => {
    // Loop over each major section
    majorSections.forEach((majorSection)=>{
        let sectionDistance = majorSection.offsetTop;
        let offSet = 50;

        // Scroll to the section's position
        if(window.pageYOffset > sectionDistance - offSet){
            let sectionName = majorSection.getAttribute("id");

            // Looper over all contentListItems to find the corresponding item
            contentListItems.forEach((contentListItem) => {
                let ItemName = contentListItem.getAttribute('data-item');

                // Found the item, add blue dot
                if(sectionName == ItemName){
                    if(!contentListItem.classList.contains("current")){
                        contentListItem.classList.add("current");
                    }                    
                }else{ // remove blue dot for any other items
                    if(contentListItem.classList.contains("current")){
                        contentListItem.classList.remove("current");
                    } 
                }
                
            });
        }
    });

});