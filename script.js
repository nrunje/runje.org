(function() {
  "use strict";

document.addEventListener('DOMContentLoaded', function() {
  // Creates broad date variable
  var c = document.getElementById('time');

  // Updates clock every second
  setInterval(updateTime,100);

  // UP
  function updateTime() {
    var d = new Date();
    var hours = d.getHours();
    var ampm = "AM";
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    if (hours > 12 && clock.change == true) {
      hours -= 12;
      ampm = "PM"
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    var sepClass = '';
    if (d.getSeconds() % 2 == 1) sepClass = 'trans';

    var sep = "<span class='" + sepClass + "'>:</span>";

    if (clock.change == false) {
      c.innerHTML = hours + ':' + minutes + ':' + seconds;
    } else {
      c.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }
  }

  // Defines clock-button and default change value
  var clock = document.getElementById('clock-button');
  clock.change = false;
  console.log(clock.change);

  // Changes clock (NOTE: clock.change == true means transition to 12-hour)
  function toggleClockChange() {
    if (clock.change == false) {
      clock.change = true;
    } else {
      clock.change = false;
    }
  }

  // Checks if user has elected for time-format change
  document.getElementById("clock-button").onclick = function() {
    toggleClockChange();
    console.log(clock.change);

    if (clock.change == true) {
      document.getElementById('clock-button').textContent = "24-hour time";
    } else if (clock.change == false) {
      document.getElementById('clock-button').textContent = "12-hour time";
    }
  }

});
})();
