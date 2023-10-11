// click open the menu by default
let selectedOption = document.querySelector('#selectedOption');
selectedOption.click();

selectedOption.addEventListener('click', () =>{
    selectedOption.classList.toggle('selected');
});