'use strict';

//Variables
const btnShowModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay') 


//Functions Open & Close mdoal 
const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
        
//Loop through showModal
for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', openModal)

//close button & close overlay
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) =>{
    console.log(e.key)
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal()
    }
})
