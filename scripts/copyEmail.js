// Copy Email Button
let copyEmailBtn = document.querySelectorAll('.copyEmail');

// Function to copy text to clipboard
function copyToClipboard(text) {
    // Create a textarea element to temporarily hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select and copy the text from the textarea
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
}

for(let i=0; i<copyEmailBtn.length; i++){
    // console.log(copyEmailBtn[i]);
    copyEmailBtn[i].addEventListener('click', () => {
        //console.log('clicked');
        copyToClipboard('jic045@ucsd.edu');
        alert("Copied Email to Clipboard!");
    });
}