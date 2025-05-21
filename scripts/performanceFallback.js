const spline3dContent = document.querySelector('spline-viewer');
const fallbackImg = document.querySelector('#fallbackImg');

let displayMode = window.getComputedStyle(spline3dContent).display;
console.log(displayMode);

function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }
  
    return os;
}

function fallbackToStaticImage() {
    spline3dContent.style.display = "none";
    fallbackImg.style.display = "block";
}
function use3Danimation() {
    if (getOS() == 'Mac' || getOS() == 'Linux'){
        spline3dContent.style.display = "block";
        fallbackImg.style.display = "none";
    }
}


if (getOS() == 'Windows' || getOS() == 'Android' || getOS() == 'iOS'){
    fallbackToStaticImage();
}

