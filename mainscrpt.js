console.log("javascript start from here")

function redirectToGame1() {
    window.open('Game - 1/Memory Card Game/Memory Cards Game [Demo 1]/memorycardgame.html', '_blank'); // Adjust the path accordingly
  }
function redirectToGame2() {
    window.open('Game - 2/Typing Speed Test Game in JavaScript/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame3() {
    window.open('Game - 3/build-hangman-game-html-javascript/Hangman Game/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame4() {
    window.open('Game - 4/Quiz Application with Timer Game/Quiz Application with Timer/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame5() {
    window.open('Game - 5/Word Scramble Game/Word Scramble/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame6() {
    window.open('Game - 6/Tic Tac Toe Game/Tic Tac Toe Javascript game/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame7() {
    window.open('Game - 7/Number Guessing Game/Game using HTML CSS & JavaScript/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame8() {
    window.open('Game - 8/Word Guessing Game/Word Guessing/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame9() {
    window.open('Game - 9/Rock Paper Scissors/Rock Paper Scissors/index.html', '_blank'); // Adjust the path accordingly
}
function redirectToGame10() {
    window.open('Game - 10/Snake Game in JavaScript/Snake Game/index.html', '_blank'); // Adjust the path accordingly
}

// feedback javascrpt code

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${selectedRating}
        We'll use your feedback to improve our customer support
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}


// feedback javascrpt code

function showsidebar(){
    const sidebar = document.querySelector(".navmenu-responsive")
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const hidesidebar = document.querySelector(".navmenu-responsive")
    hidesidebar.style.display = 'none'
}
