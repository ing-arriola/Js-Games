const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.getElementById('seconds-left')
let score = document.getElementById('score')

let result = 0
let hitPosition
let currentTime = timeleft.textContent
let timerId
const reStartGame = () => {
    result=0
    score.textContent=result
    currentTime=60
    timeleft.textContent = currentTime
    setCountDown()
}

//Showing the mole in a random square after the last time that appear
const randomSquare = () =>{
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}
//Setting each square with an eventListener that wil be triggered 
//when the mouseup event happen
const setSquares = () => {
    square.forEach(element => {
        element.addEventListener('mouseup', () => {
            if (element.id == hitPosition) {
                result+=1
                score.textContent=result
            }
        })
    })
}


const moveMole = () => {
    let timerId = null
    timerId = setInterval(() => {
        randomSquare()
    }, 800);
}

const setCountDown = () => {
    timerId  = setInterval(() => {
        countDown()  
    }, 1000);
}

const countDown = () => {
    currentTime--
    timeleft.textContent = currentTime
    //After 1 minute, the game is over =O
    console.log(currentTime)
    if (currentTime === 0) {
        clearInterval(timerId)
        alert(`Game over, your score is: ${result}`)
        reStartGame()
    }
}




setSquares()
moveMole()
setCountDown()