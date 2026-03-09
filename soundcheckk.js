window.onload = function(){

let totalTime = 5 * 60 * 60;
let timer = null;
let running = false;
let pauseCount = 0;

const clock = document.getElementById("clock");
const warning = document.getElementById("warning");
const pauseBoard = document.getElementById("pauseBoard");
const select = document.getElementById("timeOption");

const tick = document.getElementById("tickSound");
const alarm = document.getElementById("alarmSound");

function updateClock(){

let h = Math.floor(totalTime / 3600);
let m = Math.floor((totalTime % 3600) / 60);
let s = totalTime % 60;

h = String(h).padStart(2,"0");
m = String(m).padStart(2,"0");
s = String(s).padStart(2,"0");

clock.innerHTML = h + ":" + m + ":" + s;

}

window.startTimer = function(){

if(!running){

warning.style.display="none";
clock.style.display="block";

running=true;

timer=setInterval(()=>{

if(totalTime>0){

totalTime--;
updateClock();

tick.currentTime=0;
tick.play();

}else{

clearInterval(timer);
alarm.play();

}

},1000);

}

}

window.pauseTimer = function(){

running=false;
clearInterval(timer);

pauseCount++;
pauseBoard.innerHTML="Pause: "+pauseCount;

clock.style.display="none";
warning.style.display="block";

alarm.play();

}

window.restartTimer = function(){

clearInterval(timer);

running=false;
pauseCount=0;

pauseBoard.innerHTML="Pause: 0";
warning.style.display="none";

let hours=select.value;

totalTime=hours*60*60;

clock.style.display="block";

updateClock();

}

select.addEventListener("change",function(){

let hours=this.value;

totalTime=hours*60*60;

updateClock();

});

updateClock();

}