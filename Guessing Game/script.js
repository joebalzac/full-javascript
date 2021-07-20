'use strict'

//variables

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

//Functions//message/score/number

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score
}

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number
}

const check = document.querySelector('.check')

//Check & Guess Event Listener
check.addEventListener('click', ()=> {
    const guess = Number(document.querySelector('.guess').value)

    //if no number entered 
    if (!guess) {
        displayMessage("🎲 No Number")


    //if player wins     
    } else if (guess === secretNumber) {
        displayMessage("🎰 WINNER!")
        displayNumber(secretNumber) 
        document.querySelector('body').style.backgroundColor = ('#60b347')  
        document.querySelector('.number').style.width = "30rem"

    //High score change    
      if (score > highscore) {
          highscore = score
          document.querySelector('.highscore').textContent = score
      }

    }  

    // When the guess is Wrong 
    else if (guess !== secretNumber) {
        if (score > 1){
            displayMessage(guess > secretNumber ? '🚀 Too High' : '👇 Too Low')
            score--
            displayScore(score)
        } else {
            displayMessage('😅 YOU LOST!')
            displayScore(0)
        }
    }

})

//Again button 

const again = document.querySelector('.again')

again.addEventListener('click', ()=> {

    score = 20
    secretNumber = Math.trunc(Math.random() * 20 ) + 1
    displayMessage('Start guessing ...')
    displayNumber('?')
    displayScore(score)
    document.querySelector('body').style.backgroundColor = ('#222')
    document.querySelector('body').style.width('15rem')
    document.querySelector('.guess').value = ""

    console.log(secretNumber)
})
