var countDownDate = new Date("Mar 20, 2020 09:00:00").getTime();
var countDownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
},1000);
