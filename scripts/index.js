
// UI Alien
// Eye shift
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
    
    shift(eyeIn, 8, rangeX, rangeY);
    shift(eyeOut, 5, rangeX, rangeY);
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
const strings = ['Hello! How\'s going?', 
                'Welcome to Jiecheng\'s protfolio.', 
                'He is an awesome UI/UX Designer.',
                'I hope you enjoy his works!'];
let currentIndex = 0;
let typingTimer; //timer for the typewriter effect.



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


// Copy Email Button
let copyEmailBtn = document.querySelectorAll('.copyEmail');
for(let i=0; i<copyEmailBtn.length; i++){
    // console.log(copyEmailBtn[i]);
    copyEmailBtn[i].addEventListener('click', () => {
        //console.log('clicked');
        navigator.clipboard.writeText('jic045@ucsd.edu');
        alert("Copied Email to Clipboard!");
    });
}