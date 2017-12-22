// script for countdown clock
// function for countdown
function countdown() {
 // declaring variables 
 // gets new date
 var now = new Date();

 // gives the clock a date to countdown for
 var eventDate = new Date(2018, 2, 16);

 // gets current time 
 var currentTime = now.getTime();

 var eventTime = eventDate.getTime();

 // remaining time
 var remainingTime = eventTime - currentTime;

 // dividing time 
 var s = Math.floor(remainingTime / 1000);
 var m = Math.floor(s / 60);
 var h = Math.floor(m / 60);
 var d = Math.floor(h / 24);

 h %= 24;
 m %= 60;
 s %= 60;

 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;

 // gets the ids
 document.getElementById("days").textContent = d;
 document.getElementById("days").innerText = d;

 document.getElementById("hours").textContent = h;
 document.getElementById("minutes").textContent = m;
 document.getElementById("seconds").textContent = s;

 setTimeout(countdown, 1000);
}
countdown();