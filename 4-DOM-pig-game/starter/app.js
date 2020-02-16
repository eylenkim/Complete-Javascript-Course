/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//notes:
/*
// Math.random() will give you a random number but with decimals.
   while Math.floor() will give you an integer/whole number.
   	so Math.floor(Math.random()) will givey you a random whole #
//You have to use '' quotes inside some html when using html elements inside Js
  because if you didn't, it would think that it's a JS element
   */

var scores, roundScore, activePlayer, gamePlaying;

init();

//Dice build
   /** Math.random() generates a random number between 0 and 1.
		Therefore Math.random()*10 generates a random number between 0 and 10, and (Math.random()*10)+1 a number between 1 and 11.
			Math.floor() drops the decimal of this number, and makes it an integer from 0 to 10.
    **/

//Math.floor() drops the decimal of this number, and makes it an integer from 0 to 10.
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//the 'document.' object  will give us access to the dom.
//You are assigning the text content of #current-0 or 1 to the value of dice
//document.querySelector('#current-' + activePlayer).textContent = dice;

//difference between .textContent or .innerHTML: textContent is typing in text. innerHTML is adding html elements
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent; //doesn't equal to anything because it just reads the value of #score-0
//console.log(x);



//Events: notifications that are sents to notify the code that somethign happened on the webpage
//Events are trigging by clicking a button, scrolling down, click something, screen resizing
//Event Listener: a function that performs an action based on a certain event. It waits for a sepcific event to happen
/* 
function btn() {
   // do something here
}
btn();
we dont do btn() but only btn because this is called a callback function
We dont want to call our function in there, we want the event listener to call it for us aka callback function  
  //document.querySelector('.btn-roll').addEventListener('click, btn');
*/


//ALTERNATIVELY, instead of what you did right above, you can make an anonymous function inside the event listener
//however, you can only use this anonymous function here and cannot reuse it
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }


    } 

});


//Event listen for the hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
