//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
let intervalID = null;
let countdownActive = false;
let target = -1;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Home time={seconds} intervalID={intervalID} countdownActive={countdownActive}/>);

window.onload = function() {  
    const stopCount = document.getElementById("stopCount");
    const countdown = document.getElementById("countdown");
    const restart = document.getElementById("restart");
    const startNumber = document.getElementById("startNumber");

    stopCount.addEventListener("click", startCount);
    countdown.addEventListener("click", countRegresive);
    restart.addEventListener("click", restartCount);
    startNumber.addEventListener("input", startNumberCount);   
}

function startCount () {   
    if (intervalID) { // Si es algún nº entro, si es null inicio intervalo
        clearInterval(intervalID);
        intervalID = null;
        root.render(<Home time={seconds} intervalID={intervalID} countdownActive={countdownActive}/>);
    } else{
        intervalID = setInterval(()=>{
            countdownActive === false ? ++seconds : seconds--;
            if (seconds === target){
                countdownActive === false ? seconds=startNumber.value : seconds=0;
                clearInterval(intervalID);
                intervalID = null;
                alert("Target Reached");
            }
            root.render(<Home time={seconds} intervalID={intervalID} countdownActive={countdownActive}/>);
        },1000);
    }
}

function restartCount (){
    countdownActive === false || startNumber.value==="" ? seconds = 0 : seconds = parseInt(startNumber.value);
    clearInterval(intervalID);
    intervalID = null;
    root.render(<Home time={seconds} intervalID={intervalID} countdownActive={countdownActive}/>);
}    

function countRegresive (){
    countdownActive = !countdownActive;
    restartCount();
    startNumberCount();
}    

function startNumberCount (){
    if (startNumber.value < 1) startNumber.value="";
    if (startNumber.value) {
        if (countdownActive === false){
            target = parseInt(startNumber.value);
        } else {
            seconds = parseInt(startNumber.value);
            root.render(<Home time={seconds} intervalID={intervalID} countdownActive={countdownActive} />);
            target = -1;
        }    
    } else {
        target = -1;
    }
}    

