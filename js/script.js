const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval, minutes, seconds, milliseconds, isPaused;
clearValues();

startBtn.addEventListener("click",startTimer)
pauseBtn.addEventListener("click",pauseTimer)
resumeBtn.addEventListener("click",resumeTimer)
resetBtn.addEventListener("click",resetTimer)

function startTimer(){
    interval = setInterval(() =>{
        if(!isPaused) {
            milliseconds += 10
            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;                
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }
            setTimer();
        }
    },10)
    startBtn.style.display = "none"; 
    pauseBtn.style.display = "block"; 
}

function pauseTimer(){
    isPaused = true;
    resumeBtn.style.display = "block"; 
    pauseBtn.style.display = "none";     
}

function resumeTimer(){
    isPaused = false
    pauseBtn.style.display = "block"; 
    resumeBtn.style.display = "none";    
}

function resetTimer(){
    clearInterval(interval)

    isPaused = true;
    clearValues();
    setTimer();        
}

function clearValues(){
    isPaused = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0; 
    startBtn.style.display = "block";
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";        
}

function setTimer(){
    millisecondsEl.textContent = formatMilliseconds(milliseconds);
    secondsEl.textContent = formatTime(seconds);
    minutesEl.textContent = formatTime(minutes);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time;
}