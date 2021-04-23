'use strict';

const number = document.querySelector('.number-display');

var guessed = document.querySelector('.user-num');

const btnCheck = document.querySelector('.btn-check');

const btnRestart = document.querySelector('.btn-restart');

const displayMessage =document.querySelector('.message');

const gameScore =document.querySelector('.score');

const highScore = document.querySelector('.highscore');

const left =document.querySelector('.center');
var randomNum = Math.trunc(Math.random()*21);
//temporary
console.log(randomNum);
//temporary

var score = 20;
var peakScore=0;

btnCheck.addEventListener('click',game);
function game(){
  if(score > 1){
    if(guessed.value > 0 && guessed.value < 21){
      console.log('yes');
        if(guessed.value == randomNum){
          displayMessage.textContent = "Your Correct👍";
          document.querySelector('.description').textContent="....🎉🎉Congrats🎉🎉.... ";
          document.body.style.backgroundColor = 'rgb(96, 179, 71)';
          number.textContent =randomNum;
          gameScore.textContent= score;
            if (score > peakScore){
              highScore.textContent=score;
          }
        }else if(guessed.value > randomNum){
          displayMessage.textContent = "Its HIGH";
          score--;
          gameScore.textContent= score;
        }else if (guessed.value < randomNum){
        displayMessage.textContent = "Its LOW";
        score--;
        gameScore.textContent= score;
        }
      }else {
        displayMessage.textContent = "Enter Valid number";
        
      }
  }else{
   displayMessage.textContent = "Wasted";
   document.querySelector('.description').textContent="YOU FAIL👎";
   document.body.style.backgroundColor = 'rgb(139, 0, 0)';
   gameScore.textContent=0;
  }
}


btnRestart.addEventListener('click',function(){
  score=20;
  displayMessage.textContent = "start guessing...";
      document.querySelector('.description').textContent="We will select a random number between 1 - 20.See if you can guess it.";
      document.body.style.backgroundColor = 'black';
      number.textContent ="?";
      gameScore.textContent= 20;
      document.querySelector('.user-num').value='';
})







