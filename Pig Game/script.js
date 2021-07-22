'use strict';

//Select Variables 

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0EL = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')


const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


let scores, currentScore, activePlayer, playing




//Create innitialize function 

const init = function () {
  scores = [0, 0]
  currentScore = 0 
  activePlayer = 0 
  playing = true


  score0EL.textContent = 0
  score1EL.textContent = 0 
  current0El.textContent = 0 
  current1El.textContent = 0 

diceEl.classList.add('hidden')
player0El.classList.remove('player--winner')
player1El.classList.remove('player--winner')
player0El.classList.add('player--active')
player1El.classList.remove('player--active')
  
}

init()


//Create switchPlayer 

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0 
  activePlayer = activePlayer === 0 ? 1 : 0 
  player0El.classList.toggle('player--active')                   
  player1El.classList.toggle('player--active')                   
}


//1. Generating a random dice roll 
btnRoll.addEventListener('click', () => {
  if (playing){
  const dice = Math.trunc(Math.random()* 6) + 1
  console.log(dice)
  //Display the dice
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`


    if (dice !== 1 ) {
      //Check if rolled 1, if true add dice to current score
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
})

//btnHold function

btnHold.addEventListener('click', () => {
  //1. Add current score to player's score 
  scores[activePlayer] += currentScore
  // scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  // 2. Check is the player's score is >= 100
  if (scores[activePlayer] >= 20){
    //Finish the game 
    diceEl.classList.add('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    playing = false 
  } else {
    switchPlayer()
  }

})

     
btnNew.addEventListener('click', init)
     
  
     
     

         
         
  
   
 
     
     
 
  
 






 






 //Finish the game 






//Switch to the next player 





//New game button














// const player0El = document.querySelector('.player--0')
// const player1El = document.querySelector('.player--1')
// const score0EL = document.querySelector('#score--0')
// const score1EL = document.querySelector('#score--1')
// const current0El = document.querySelector('#current--0')
// const current1El = document.querySelector('#current--1')

// const diceEl = document.querySelector('.dice')
// const btnNew = document.querySelector('.btn--new')
// const btnRoll = document.querySelector('.btn--roll')
// const btnHold = document.querySelector('.btn--hold')

// let scores, currentScore, activePlayer, playing 

// const init = function () {
// //Starting conditions
// scores = [0, 0]
// currentScore = 0 
// activePlayer = 0 
// playing = true

// score0EL.textContent = 0
// score1EL.textContent = 0
// current0El.textContent = 0
// current1El.textContent = 0

// diceEl.classList.add('hidden')
// player0El.classList.remove('player--winner')
// player1El.classList.remove('player--winner')
// player0El.classList.add('player--active')
// player1El.classList.remove('player--active')

// }

// init()


// const switchPlayer = () => {
//     //Switch to next player
//     document.getElementById(`current--${activePlayer}`).textContent = 0
//     currentScore = 0
//     activePlayer = activePlayer === 0 ? 1 : 0
//     player0El.classList.toggle('player--active')
//     player1El.classList.toggle('player--active')
// }


// btnRoll.addEventListener('click', ()=> {
//    if(playing) {
//    //1. Generating a random dice roll 
//    const dice = Math.trunc(Math.random() * 6) + 1
//    console.log(dice)

//    //2. Display the Dice 
//    diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//    //3. Check for a rolled 1: if true, switch to next player
//    if (dice !== 1) {
//      // Add dice to current score
//      currentScore += dice;
//      document.getElementById(
//        `current--${activePlayer}`
//      ).textContent = currentScore;
      
//    } else {
//      switchPlayer()
     
//    }
// }
// })

// btnHold.addEventListener('click', ()=> {
//    // 1. Add current score to active player's score
//    scores[activePlayer] += currentScore;
//    // scores[1] = scores[1] + currentScore

//    document.getElementById(`score--${activePlayer}`).textContent =
//      scores[activePlayer];

//    // 2. Check is the player's score is >= 100
//    if (scores[activePlayer] >= 20) {
//        //Finish the game 
//        diceEl.classList.add('hidden')
//        playing = false
//        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
//        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
//    } else {
//     //Switch to the next player 
//     switchPlayer()
//    }
   
// })

// //New game button
// btnNew.addEventListener('click', init) 
   
