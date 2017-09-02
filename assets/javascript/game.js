alert("Can you guess what letter am I thinking of? You have nine guesses. Go! ");


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = undefined;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];



document.onkeyup = function(event) {

 
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // referred to  an example of someone elses code for this. I couldn't wrap my head around how to put this into code. I was completely lost and still not sure that i understand it. All i know is that this works.
  
  if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    guessesLeft--;
  }

  // this i was able to get
  if (computerGuess == userGuess) {
    wins++;
    alert("You won!");
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    
  }

 // this i was able to get
  if (guessesLeft == 0) {
    losses++;
    alert("You lost!");
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    
  }

//I was unable to figure out how to get the results to log to the actual browser. I found this in an example that someone else had done for this game and used it and it worked. 
  // Displaying progress to HTML
  var html = "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
  // place html into the game ID
  document.querySelector("#game").innerHTML = html;

}


