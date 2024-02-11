let container = document.getElementById("carousel");
let leftArrow = document.getElementById("btnLeftArrow");
let rightArrow = document.getElementById("btnRightArrow");
let pausePlay = document.getElementById("btnPausePlay");
let svgPlay = document.getElementById("PlayIcon");
let svgPause = document.getElementById("PauseIcon");
let statePlay = true;
let nextBackground = "";
let lastBackground = "";
let numNames = 4;
let itter = 0;
let listOfImages = ["img1_planet.png","img2_robot.png","img3_slime.png","img4_digitalspace.png"];

const interval = setInterval(changeBackground(true), 500);

numNames = listOfImages.length;
container.style.backgroundImage = "url(./images/img1_planet.png)";

btnPausePlay.onclick = (event) => {
    statePlay = !statePlay;

    if(statePlay){
        svgPause.style.display = "block";
        svgPlay.style.display = "none";
    } else {
        svgPause.style.display = "none";
        svgPlay.style.display = "block";
        clearInterval(interval);
    }
    

}

function changeBackground(forward) {
    
    if(forward){
        
        if(itter >= listOfImages.length-1){
            itter = 0;
        } else {
            itter++;
        }
    }
    else{
        
        if(itter < 1){
            itter = listOfImages.length-1;
        } else {
            itter--;
        }
    }
    container.style.backgroundImage = "url(./images/" + listOfImages[itter] + ")";
}
