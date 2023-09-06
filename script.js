'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// State Variables
let correctNum = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Check Button event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === correctNum) {
    displayMessage('🎉 Correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // Player Wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber(correctNum);
    document.querySelector('.number').style.width = '30rem';

    // When guess is wrong
  } else if (guess !== correctNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > correctNum ? '⬆️ Too High!' : '⬇️ Too Low!');
    } else {
      displayMessage('💥 You lost the game!');
      displayNumber(correctNum);
      document.querySelector('.score').textContent = 0;
    }
  }

  // // Guess too high
  // else if (guess > correctNum) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '⬆️ Too High!' ;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!!';
  //     document.querySelector('.number').textContent = correctNum;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // // Guess too low
  // }else if (guess < correctNum) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '⬇️ Too Low!';
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!!';
  //     document.querySelector('.number').textContent = correctNum;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Implement Again button
document.querySelector('.again').addEventListener('click', function () {
  // Resets state variables
  score = 20;
  correctNum = Math.trunc(Math.random() * 20) + 1;

  // Resets text/ Background
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
