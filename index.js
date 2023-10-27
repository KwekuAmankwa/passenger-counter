let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEL.textContent = count
}

function save(){
    let previous = count + " - "
    saveEl.textContent += previous
    count = 0
    countEL.textContent = count
}

// welcome message with js
// let welcomeEL = document.getElementById("welcome-el")

// let name = "Hello Kweku, "
// let greeting = "Welcome to Scrimba!"

// welcomeEL.innerText = name + greeting 