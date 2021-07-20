'use strict';

const playerE01 = document.querySelector('player--0')
const playerE02 = document.querySelector('player--1')
const score0EL = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')




//Starting conditions

const scores = [0, 0]
let currentScore = 0 
let activePlayer = 0 

score0EL.textContent = 0
score1EL.textContent = 0
current0El.textContent = 0
current1El.textContent = 0

   diceEl.classList.add('hidden')




btnRoll.addEventListener('click', ()=> {
   //1. Generating a random dice roll 
   const dice = Math.trunc(Math.random()* 6) + 1

   //2. Display the Dice 
   diceEl.classList.remove('hidden')
   diceEl.src = `dice-${dice}.png`

   //3. Check for a rolled 1: if true, switch to next player
   if (dice !== 1) {
      //Add dice to current score
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore

      current0El.textContent = currentScore
   } else {
      //Switch to next player
     activePlayer = activePlayer === 0 ? 1 : 0
   }
})