var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");

var hh = document.getElementById("hh")
var mm = document.getElementById("mm")
var ss = document.getElementById("ss")

setInterval(() =>{

let hr_dot = document.querySelector('.hr_dot')
let min_dot = document.querySelector('.min_dot')
let sec_dot = document.querySelector('.sec_dot')


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

if(h > 12) {
    h = h-12;
}

if(h == 0){
    h = 12
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>Hours</span>";
minutes.innerHTML = m  + "<br><span>Minutes</span>";
seconds.innerHTML = s  + "<br><span>Seconds</span>";
ampm.innerHTML = am;

hh.style.strokeDashoffset = 440 - (440 * h) / 12; 
mm.style.strokeDashoffset = 440 - (440 * m) / 60; 
ss.style.strokeDashoffset = 440 - (440 * s) / 60; 

hr_dot.style.transform = `rotate(${h * 30}deg)`
min_dot.style.transform = `rotate(${m * 6}deg)`
sec_dot.style.transform = `rotate(${s * 6}deg)`

})