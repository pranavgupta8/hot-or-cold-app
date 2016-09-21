
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
  		newGame();
  	});

	randomNumberGenerator();

	$("#guessButton").click(function(){

		i += 1;
		$("span#count").text(i);

		guessNumber = $("#userGuess").val();
		
		$('ul#guessList').append('<li>' + guessNumber + '</li>');

		hotOrCold();

	});  	

});

var randomNumber;
var guessNumber;
var i = 0;

function newGame() {

	$('h2#feedback').text('Make your Guess!');
	$('span#count').text('0');
	$('ul#guessList').text('');
	$("#userGuess").val("");
	
	i = 0;
	
	randomNumberGenerator();
}

function randomNumberGenerator() {

	randomNumber = Math.floor(Math.random() * 100);
}

function hotOrCold() {

	var difference = Math.abs(randomNumber - guessNumber);

	if(difference > 50) $('h2#feedback').text("Ice Cold!");
	else if(difference<=50 && difference>30) $('h2#feedback').text("Cold!");
	else if(difference<=30 && difference>20) $('h2#feedback').text("Warm!");
	else if(difference<=20 && difference>10) $('h2#feedback').text("Hot!");
	else if(difference<=10 && difference>=1) $('h2#feedback').text("Very Hot!");
	else if(difference == 0) { 
		$('h2#feedback').text("Right Guess!");
		alert("Smart Pants! Yoouuuuuu Guessed It!");
		newGame();
	}
}	
