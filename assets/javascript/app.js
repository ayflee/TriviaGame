// =============================

// This code will run as soon as the page loads
window.onload = function() {
    $("#playBtn").on("click", stopwatch.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var stopwatch = {
  
    time: 0,
  
    reset: function() {
  
      stopwatch.time = 0;
  
      // DONE: Change the "display" div to "00:00."
      $("#ptimer").text("0");
  
    },
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time++;

    },

}
