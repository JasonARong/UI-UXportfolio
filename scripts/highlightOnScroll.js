//Highlight menu items on scroll
let sections = document.querySelectorAll('.majorSections');
let currMenu = document.querySelectorAll('#currentMenu a');

window.addEventListener("scroll", () => {
    sections.forEach((sectionElement) => {
        let sectionDistance = sectionElement.offsetTop;
        if(window.pageYOffset > sectionDistance -50){
            let sectionName = sectionElement.getAttribute("id");
            currMenu.forEach((menuItem) => {
                let menuItemName = menuItem.getAttribute('data-item');
                if(sectionName == menuItemName){
                    if(!menuItem.classList.contains("active")){
                        menuItem.classList.add("active");
                    }                    
                }else{
                    menuItem.classList.remove("active");
                }
            });
        }
    });
});


// currMenu.forEach((menuItem) => {
//     menuItem.addEventListener('click', ()=>{
//         if(!menuItem.classList.contains("active")){
//             menuItem.classList.add("active");
//         } 
//     });
// });