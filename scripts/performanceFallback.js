
// let frameTimes = [];
// const maxSamples = 99999; // Adjust this based on how long you want to average (e.g., 100 frames ~5 sec at 20 FPS)
// const fpsThreshold = 20; // Switch to fallback if the average FPS is below this
// let lastFrameTime = performance.now();

// function checkPerformance() {
//     const now = performance.now();
//     const deltaTime = now - lastFrameTime;
//     lastFrameTime = now;

//     let fps = 1000 / deltaTime;
//     frameTimes.push(fps);

//     if (frameTimes.length > maxSamples) frameTimes.shift(); // Keep only recent FPS values

//     // Calculate the average FPS
//     const avgFps = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;

//     if (avgFps < fpsThreshold) {
//         fallbackToStaticImage();
//     } else {
//         requestAnimationFrame(checkPerformance);
//     }
// }
// setTimeout(() => requestAnimationFrame(checkPerformance), 3000);


const spline3dContent = document.querySelector('spline-viewer');
const fallbackImg = document.querySelector('#fallbackImg');
function fallbackToStaticImage() {
    spline3dContent.style.display = "none";
    fallbackImg.style.display = "block";
}

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

let os = getOS();

if (os == 'Android' || os == 'iOS'){
    fallbackToStaticImage();
}

