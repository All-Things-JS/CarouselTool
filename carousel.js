let container = document.getElementById("carousel");
let leftArrow = document.getElementById("btnLeftArrow");
let rightArrow = document.getElementById("btnRightArrow");
let pausePlay = document.getElementById("btnPausePlay");
let svgPlay = document.getElementById("PlayIcon");
let svgPause = document.getElementById("PauseIcon");
const imageTiming = 5;
let statePlay = true;
let numNames = 4;
let itter = 0;

let listOfImages = ["img1_planet.png","img2_robot.png","img3_slime.png","img4_digitalspace.png"];
numNames = listOfImages.length;

let interval = setInterval(() => changeBackground(true), imageTiming * 1000);
container.style.backgroundImage = "url(./images/img1_planet.png)";

btnPausePlay.onclick = (event) => {
    statePlay = !statePlay;

    if(statePlay){
        svgPause.style.display = "block";
        svgPlay.style.display = "none";
        interval = setInterval(() => changeBackground(true), imageTiming * 1000);
    } else {
        svgPause.style.display = "none";
        svgPlay.style.display = "block";
        clearInterval(interval);
    }
    

}

function changeBackground(forward) {
    if(forward){
      itter = (itter + 1) % listOfImages.length;
      container.style.backgroundImage = "url(./images/" + listOfImages[itter] + ")";
      console.log(itter);
    }
    else{
      itter = (itter - 1 + listOfImages.length) % listOfImages.length;
      container.style.backgroundImage = "url(./images/" + listOfImages[itter] + ")";
      console.log(itter);
    }
}
