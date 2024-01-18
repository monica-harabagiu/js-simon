const countdownHtml = document.getElementById("countdown")


const now = new Date()
console.log(now)

let giorno = now.getDate()
let domani = new Date()

domani.setDate(giorno + 1)
domani.setHours(9, 30, 0, 0)

console.log(domani)


let intervalloDiTempo = Math.floor((domani - now) / 1000)
console.log(intervalloDiTempo)


const counter = setInterval(countdown, 1000)

function countdown() {

    if (intervalloDiTempo === 0) {
        clearInterval(counter)
        intervalloDiTempo = 0
    } else {
        intervalloDiTempo--
    }

    // console.log(intervalloDiTempo)


    //moltiplico 60s per 60m (i secondi in un'ora)
    const ore = Math.floor(intervalloDiTempo / (60 * 60))
    // console.log(ore)
    const minuti = Math.floor(intervalloDiTempo % (60 * 60) / 60)
    // console.log(minuti)
    const secondi = Math.floor(intervalloDiTempo % 60)
    // console.log(secondi)

    console.log(ore, minuti, secondi)

    countdownHtml.innerHTML = `${ore}:${minuti}:${secondi}`
}
