// =============================

//load page when window is loaded with
    // score at 0
    // timer set to 20 sec

//when user clicks start:
    //timer -- counts down by one sec increments and stops at 0
//when user selects an answer:
    //first check if timer is >0
    //record user input for each question and compare against correct answer


    //When the timer reaches zero
// after time stops:
    //display correct answer next to incorrect selections

window.onload = function() {
    $("#playBtn").on("click", timer.start);
    $('.correct-answer').hide(); // Hide the correct answers when the page loads
}
var count = function(){
    timer.time--
}

var score = 0;
var clockrunning = false;
var intervalID;
var timer = {
    time:8,
    start:function(){
        if(!clockrunning) {
            intervalID = setInterval(function(){ // Store the interval so we can stop the timer later. Also update the timer element on HTML
                timer.time--
                $("#ptimer").text(timer.time);

                if(timer.time === 0){ // Time ran out. This is a place to run end of game functions
                    clearInterval(intervalID);
                    checkAnswers();
                }
            },1000);
        }
    },
}

function checkAnswers(){
    $('.correct-answer').show();
    var questions = Array.from($('.custom-select'));
    console.log(questions);

    if(questions[0].value == 1){ //compare the question against the correct answer
        score++
    }
    else{
        //highlight the right answer
        // $('#answer1').text('Correct answer: whatever') -  only display the right answer if they got question wrong
    }

    // The rest of the answer checks

    $('#pscore').text(score + ' / 5');

    


}
    




    
// if($("#question1 option:selected").text() == 5) {   
// }
// else{
    
// }
// )
//     $("#question2 option:selected").text();
//     $("#question3 option:selected").text();
//     $("#question4 option:selected").text();
//     $("#question5 option:selected").text();

//     //show score as x/5 correct





// $("#playBtn").on("click", stopwatch.count);
  
//   var intervalId;
  
//   // prevents the clock from being sped up unnecessarily
//   var clockRunning = false;
  
//   // Our stopwatch object
//   var stopwatch = {
  
//     time: 20},
  
//     start: function() {
  
//       // DONE: Use setInterval to start the count here and set the clock to running.
//       if (!clockRunning) {
//         intervalId = setInterval(stopwatch.count, 1000);
//         clockRunning = true;
//       }
//     },
//     stop: function() {
  
//       // DONE: Use clearInterval to stop the count here and set the clock to not be running.
//       clearInterval(intervalId);
//       clockRunning = false;
//     },

//     count: function() {
  
//       // DONE: increment time by 1, remember we cant use "this" here.
//       stopwatch.time--;

//     },


