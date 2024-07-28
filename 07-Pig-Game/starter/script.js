'use strict';

let score0;
let score1;
let rollNumber;
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdGame = document.querySelector('.btn--hold');

const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

//RESET
function reset() {
  score0 = 0;
  score1 = 0;

  score0El.textContent = score0;
  score1El.textContent = score1;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 1;

  diceEl.classList.add('hidden');
  if (!player0Section.classList.contains('player--active')) switchPlayer();
}

reset();

function getCurrentPlayerSection() {
  return document.querySelector('.player--active');
}

function getCurrentPlayerCurrentScoreEl() {
  return getCurrentPlayerSection().querySelector('.current-score');
}

function getCurrentPlayerCurrentScore() {
  return Number(getCurrentPlayerCurrentScoreEl().textContent);
}

function setCurrentPlayerCurrentScore(score) {
  getCurrentPlayerCurrentScoreEl().textContent = score;
}

function getCurrentPlayerTotalScoreEl() {
  return getCurrentPlayerSection().querySelector('.score');
}

function getCurrentPlayerTotalScore() {
  return Number(getCurrentPlayerTotalScoreEl().textContent);
}

function setCurrentPlayerTotaltScore(score) {
  getCurrentPlayerTotalScoreEl().textContent = score;
}

newGame.addEventListener('click', reset);

//SWITCH PLAYER
function switchPlayer() {
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  if (getCurrentPlayerSection().classList.contains('player--0')) {
    player0Section.classList.remove('player--active');
    player1Section.classList.add('player--active');
  } else {
    player1Section.classList.remove('player--active');
    player0Section.classList.add('player--active');
  }
}

//DICE ROLL
rollDice.addEventListener('click', function () {
  rollNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(rollNumber);
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${rollNumber}.png`);
  if (rollNumber === 1) {
    switchPlayer();
  } else {
    setCurrentPlayerCurrentScore(getCurrentPlayerCurrentScore() + rollNumber);
  }
});

holdGame.addEventListener('click', function () {
  debugger;
  setCurrentPlayerTotaltScore(
    getCurrentPlayerTotalScore() + getCurrentPlayerCurrentScore()
  );
  if (getCurrentPlayerTotalScore() >= 100) {
    alert(
      `${getCurrentPlayerSection().querySelector('.name').textContent} wins`
    );
    reset();
  } else {
    switchPlayer();
  }
});
