const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomCharacters1 = []
let randomCharacters2 = []

let passwordEl = document.getElementById("password")
let passwordEl2 = document.getElementById("password2")
let btn = document.getElementById("btn")

function randomizePassword() {
    for (let i = 0; i <= 14; i++) {
        let getRandomChar1 = Math.floor(Math.random() * characters.length)
        let getRandomChar2 = Math.floor(Math.random() * characters.length)
        randomCharacters1.push(characters[getRandomChar1])
        randomCharacters2.push(characters[getRandomChar2])
    }
}
randomizePassword()


btn.addEventListener("click", () => {
    passwordEl.textContent = randomCharacters1.join('')
    passwordEl2.textContent = randomCharacters2.join('')
})