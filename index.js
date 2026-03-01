// document.getElementById("count-el").innerHTML=5
// let count = 0+7
// console.log(count)
// let muAge= 36
// console.log(muAge)
// let saveEl= document.getElementById('save-el')
// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)

// function inc(){
//     count+= 1
//     countEl.textContent= count
// }
// function save(){
//     let contr = count+ ' -'
//     saveEl.textContent+=contr
//     countEl. textContent =0
//     count=0


// }
// let countEl = document.getElementById("count-el")
// let us = 42
// let mes= ' you have three new '
// countEl. innerText = us + mes
// countEl.innerText += '😴'
// let myname= 'Андрей'
// let lastname = ' S'
// console.log(myname + lastname)
// let errorpar= document.getElementById("error")
// console.log(errorpar)

// function inces(){
//     console.log("button clicked")
//     errorpar.textContent = "попробуйте ещё раз"

// }
// покер
let cards = []
let sum = 0
let BlackJack= false
let isFlive =false
let mess=""
let messag = document. getElementById("messg-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    Player :"You",
    Playercoinc : 145
}

let PlayerEl = document. getElementById("play-er")
PlayerEl.textContent= player.Player + " : $"+ player.Playercoinc


function getRandom(){
    let randomnum =  Math.floor(Math.random()*13)+1
    if (randomnum>10){
        return 10
    } else if (randomnum === 1){
        return 11
    } else{
        return randomnum
    }


}

function startGame(){
    isFlive= true
    let firsCard = getRandom()
    let secondCard = getRandom()
    cards=[firsCard, secondCard]
    sum=firsCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Карты: "
    for (let i = 0; i< cards.length; i++){
        cardsEl.textContent+=cards[i]+ " "
    }
    
    sumEl.textContent= "Сумма: " + sum

    if (sum <=20){
        mess = "Хотите взять ещё одну карту"
    } else if (sum === 21 ){
        mess="Ураа! У тебя блекДжек"
        BlackJack= true
    } else {
        mess = "Увы ты проиграл!"
        isFlive= false
    }
    messag.textContent= mess

}

function newCard(){
    if(isFlive === false && BlackJack === false){
        let card =getRandom()
        sum+= card
        cards.push(card)
        console.log(card)
        renderGame()
    }

}
// let cardss =[4,7] 
// cardss.push(6) в конец списка 
// cardss. pop()  удаление последнего индекса
// let randomnum= Math.floor(Math.random()*6)