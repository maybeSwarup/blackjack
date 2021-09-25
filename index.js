// window.addEventListener('load', () => {
//     startGame()
//     registerSW()
// })

// function registerSW() {
//     if ('serviceWorker' in navigator) {
//         try {
//             navigator.serviceWorker.register('/sw.js')
//         } catch (e) {
//             console.log('SW registration failed')
//         }
//     }
// }

let player = {
    name: "Player",
    chips: 200
}

let chipsEl = document.getElementById("chips-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let startBtn = document.getElementById("start-btn")
let cardBtn = document.getElementById("card-btn")
let cards = []
let cardCount = 0, sum = 0

function startGame() {
    cardBtn.disabled = false
    cards = []
    cardCount = 0, sum = 0
    messageEl.innerHTML = "Want to play a round?"
    cardsEl.innerHTML = "Cards: "
    sumEl.innerHTML = "Sum: "
    chipsEl.innerHTML = player.name + "'s" + " Chips: $" + player.chips
}

function checkSum() {
    if (sum > 21) {
        console.log("game over")
        return "You're out of the game!"
    } else if (sum == 21) {
        console.log("game won")
        return "You've got a Blackjack!"
    } else {
        console.log("draw new card")
        return "Draw new card"
    }
}

function newCard() {
    cards.push(Math.floor(Math.random() * (12 - 2) + 2))
    console.log(cards[cardCount])
    cardsEl.innerHTML += " " + cards[cardCount]
    sum += cards[cardCount]
    if (sum >= 21) cardBtn.disabled = true
    sumEl.innerHTML = "Sum: " + sum
    messageEl.innerHTML = checkSum()
    cardCount++
}

if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
}