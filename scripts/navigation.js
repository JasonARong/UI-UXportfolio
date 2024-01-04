// Drop down menu
let projectBtn = document.querySelectorAll('.projectOptions button');
let dropDown = document.getElementsByClassName('dropDown');
let arrowIcon = document.getElementsByClassName('arrowIcon');
let selectedOption = document.querySelector('#selectedOption');

let currOpenIndex = -1;

for(let i=0; i<projectBtn.length; i++){
    // Handling no script
    // If script is avaliable the drop down button will be shown
    projectBtn[i].style.display = 'flex';
    projectBtn[i].addEventListener('click', () => {
        arrowIcon[i].classList.toggle('expand');

        // nothing is opened, open the menu that is clicked
        if (currOpenIndex == -1){                        
            dropDown[i].style.maxHeight = dropDown[i].scrollHeight + 'px';
            currOpenIndex = i;

            if(projectBtn[i] == selectedOption){
                selectedOption.classList.remove('selected');
            }
        }
        // click another button, close the currently opened menu
        else if(currOpenIndex != i){
            arrowIcon[currOpenIndex].classList.toggle('expand');
            dropDown[currOpenIndex].style.maxHeight = null;
            
            dropDown[i].style.maxHeight = dropDown[i].scrollHeight + 'px';
            currOpenIndex = i;

            /*console.log('click another button');
            console.log(projectBtn[currOpenIndex]);
            console.log(selectedOption);*/

            // the currently opended menu will be highlighted when closed
            if(projectBtn[currOpenIndex] != selectedOption){                
                selectedOption.classList.add('selected');
            }
            // the clicked menu is the selected  menus, remove the hightlight
            else if(projectBtn[i] == selectedOption){            
                selectedOption.classList.remove('selected');
            }
        }
         // click the currently opened menu, close it
        else if(currOpenIndex == i){            
            dropDown[currOpenIndex].style.maxHeight = null;
            currOpenIndex = -1;

            if(projectBtn[i] == selectedOption){
                selectedOption.classList.add('selected');
            }
        }
        
        // arrowIcon[i].classList.toggle('expand');
        // if(selectedOption.style.maxHeight){
        //     selectedOption.classList.remove('selected');
        // }
        // else{
        //     selectedOption.classList.add('selected');
        // }
    })
}

// Respnsive Design 
// Hamburger menu 
// Prevent scrolling when menu is clicked
let checkBox = document.getElementById('check');
checkBox.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close side menu on click
let menuOptions = document.querySelectorAll('.dropDown a');
menuOptions.forEach((option) => {
    option.addEventListener('click', () => {
        if(checkBox.checked){
            checkBox.click();
        }
    });
});

// click open the menu by default
selectedOption.click();

// toggle gradient background for selected menu
//selectedOption.addEventListener('click', () =>{
    // console.log('click');
    //selectedOption.classList.toggle('selected');
//});