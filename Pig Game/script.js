'use strict';

const playerE01 = document.querySelector('player--0')
const playerE02 = document.querySelector('player--1')
const scoreE01 = document.querySelector('score--0')
const scoreE02 = document.querySelector('score--1')
const currentE01 = document.querySelector('current--0')
const currentE02 = document.querySelector('current--1')


const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const dice = document.querySelector('.dice')

let scores, currentScore, activePlayer, playing

//Starting conditions
const init = () => {
   scores = [0, 0]
   currentScore = 0
   activePlayer = 0
   playing = true
}




rollDice.addEventListener('click', ()=>{
   if (playing)
   //Generating a random dice roll
   let dice = Math.trunc(Math.random()* 6) + 1  

})