'use strict';
let message = document.querySelector('.message');
let scoreHtml = document.querySelector('.score');
let guess = document.querySelector('.guess');
let score = 20;
localStorage.setItem('highScore', 0);
// guess.value = 0;
let highScore = document.querySelector('.highscore');
function getRandom() {
  let random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
  return random;
}
let random = getRandom();
//call another function when game gets over
function checkGameOver() {
  if (score > 1) return true;
  else return false;
}
//High Score
function setHs() {
  let hs = Number(localStorage.getItem('highScore'));
  console.log(typeof hs);
  if (score >= hs) {
    hs = score;
    console.log(hs, 'hs');
    localStorage.setItem('highScore', hs);
  }
  highScore.innerHTML = hs;
  score = 20;
  return score;
}
//Reset and gameOver
function gameOver(x) {
  //setHs();
  if (!x) {
    score = 0;

    //score = 20;
    //document.body.style.backgroundColor = 'black';
    scoreHtml.innerHTML = setHs();
  }
  guess.value = '';
  random = getRandom();
  message.innerHTML = 'Start Guessing🤷‍♀️';
}
//Actions on wining
function msg(x) {
  if (x) {
    // document.querySelector('.number').innerHTML = random;
    document.body.style.backgroundColor = 'green';
    // alert('YouWon😎');
  } else alert('YouLose😢');
  return;
}
function checkAns(diff) {
  if (checkGameOver()) {
    if (diff === 0) {
      msg(true);
      gameOver(true), 1000;
    } else if ((diff >= 0 && diff <= 3) || (diff >= -3 && diff <= 0)) {
      message.innerHTML = 'Close guess🙌';
      score--;
      scoreHtml.innerHTML = score;
    } else {
      message.innerHTML = 'Not even close🤣';
      score--;
      scoreHtml.innerHTML = score;
    }
  } else {
    msg(false);
    gameOver(true);
  }
}
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (guess === '') message.innerHTML = 'Abe Numbe r toh daal😕';
  else checkAns(guess - random);
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor =
    'rgb(' + [34, 34, 34].join(',') + ')';
  gameOver(false);
});
