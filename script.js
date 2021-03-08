'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore =0;

const displayMessage=function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //const messge = document.querySelector('.message');
    const displayScore = document.querySelector('.score');


    if(!guess) {
        displayMessage('No number!!');
    }
    //win the game
    else if(guess === secretNumber){
            displayMessage("Correct Number!!");
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // number is too high
    }else if(guess > secretNumber){

        if(score > 1){
            displayMessage('The number is too high!!');
            score--;
            displayScore.textContent = score;
        } else{
            displayMessage('You lost the game!!');
        }

    
    // number is too low
    }else if(guess < secretNumber ){
        if(score > 1){
            displayMessage('The number is too low!!');
            score--;
            displayScore.textContent = score;
        } else{
            displayMessage('You lost the game!!');
         }   
         console.log("I am here", typeof guess, guess)

        // no number
    }
})


// again button handdler 
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})


  // number is different 

    // }else if (guess !== secretNumber){
    //     if(score > 1){
    //         messge.textContent = guess > secretNumber ? 'The number is too high!!' : 'The number is too low!!';
    //         score--;
    //         displayScore.textContent = score;
    //     } else{
    //         messge.textContent =  'You lost the game!!';
    //     }

    // }


