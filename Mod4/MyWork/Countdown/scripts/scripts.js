/*
* Description: Countdown
*
* Author: Neo
*/
"use strict";

function getCountDown(countDownDate) {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#countDown").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // If the count down is finished, commence party
    if (distance < 0) {
      clearInterval(x);
      $("#countDown").text("Graduation day!");
    }
}

$(function() {
    // Graduation Day
    var countDownDate = new Date("September 25, 2019").getTime();

    // Update the count down every 1 second
    setInterval(getCountDown, 1000, countDownDate);
})