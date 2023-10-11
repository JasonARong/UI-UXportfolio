// Drop down menu
let projectBtn = document.querySelectorAll('.projectOptions button');
let dropDown = document.getElementsByClassName('dropDown');
let arrowIcon = document.getElementsByClassName('arrowIcon');

for(let i=0; i<projectBtn.length; i++){
    // Handling no script
    // If script is avaliable the drop down button will be shown
    projectBtn[i].style.display = 'flex';
    projectBtn[i].addEventListener('click', () => {
        arrowIcon[i].classList.toggle('expand');
        if(dropDown[i].style.maxHeight){
            dropDown[i].style.maxHeight = null;
        }
        else{
            dropDown[i].style.maxHeight = dropDown[i].scrollHeight + 'px';
        }
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
let selectedOption = document.querySelector('#selectedOption');
selectedOption.click();

selectedOption.addEventListener('click', () =>{
    console.log('click');
    selectedOption.classList.toggle('selected');
});