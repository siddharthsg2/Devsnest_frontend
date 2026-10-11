var gamerange = document.getElementById('gamerange')
var subtitle = document.getElementById('subtitle')
var gameselect = document.getElementById('gameselect')
var startgame = document.getElementById('startgame')
var counter = document.getElementById('counter')

var openedCards = [];

var matchedCards = 0 ;

let moves = 0;
let lockBoard = false;

gamerange.oninput = function () {
    subtitle.innerHTML = this.value
}

startgame.onclick = () => {
    gameselect.style.display = "none"
    for (let index = 0; index < gamerange.value; index++) {
        const seatelement = document.createElement("div");
        seatelement.setAttribute('id', index)
        seatelement.setAttribute('class', "column is-one-quarter")
        document.getElementById('gcards').insertAdjacentElement('beforeend', seatelement)
    }

    startTime = new Date();
    setTimeout(displaytime, 1000);

    openedCards = [];
    matchedCards = 0;
    moves = 0;
    counter.innerHTML = 0;
    shuffle()
    startlogic()
    arrangeCards()
}

arrangeCards=()=>{
    var cards = document.querySelectorAll(".emojicard")
    if(!cards.length) return
    var board = document.getElementById('gcards')
    var narrow = window.innerWidth < 640
    var cols = cards.length <= 12 ? (narrow ? 3 : 4)
             : cards.length <= 24 ? (narrow ? 4 : 6)
             : (narrow ? 4 : 8)
    var rows = Math.ceil(cards.length / cols)
    var available = window.innerHeight - board.getBoundingClientRect().top - 24
    var gap = 10
    var height = Math.floor(available / rows) - gap
    height = Math.max(36, Math.min(height, 110))
    board.style.setProperty('--cols', cols)
    board.style.setProperty('--card-h', height + 'px')
}

window.onresize = () => arrangeCards()

randomize=(d)=>{
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
      }
      return d
}

shuffle=()=>{
    var emojis = ['🙃', '🤪', '💩', '👻', '⭐', '🍕', '🥩', '🍭', '🍆', '🍑', '👽', '🤖', '👾', '👋', '🐭', '🦕','🦖', '🐉', '🍬', '💦','🍤']
    var she = emojis.sort(()=> 0.5 - Math.random() ).slice(0,gamerange.value/2)
    var rand = randomize(she.concat(she))
    rand.forEach((element, i) => {
        var ele = document.getElementById(i)
        ele.innerHTML = `<div class="bd-notification emojicard hidden animate__animated">${element}</div>`
    });
}

startlogic=()=>{
    var allcards = document.querySelectorAll(".emojicard")
    Array.from(allcards).forEach((element) => {
        element.addEventListener("click", () => {
            if (lockBoard) return
            if (element === openedCards[0]) return
            if (element.classList.contains("match")) return

            element.classList.remove("hidden")
            openedCards.push(element)

            if (openedCards.length === 2) {
                moves++
                counter.innerHTML = moves
                lockBoard = true
                if (openedCards[0].innerText === openedCards[1].innerText) {
                    matchedCards += 2
                    openedCards[0].classList.add("match","animate__bounceIn")
                    openedCards[1].classList.add("match","animate__bounceIn")
                    openedCards = []
                    lockBoard = false
                    if (matchedCards === Number(gamerange.value)) {
                        setTimeout(wingame, 500)
                    }
                } else {
                    setTimeout(function(){
                        openedCards[0].classList.add("hidden","animate__flipInY")
                        openedCards[1].classList.add("hidden","animate__flipInY")
                        openedCards = []
                        lockBoard = false
                    }, 700)
                }
            }
        })
    })
}

wingame=()=>{
    document.getElementById('congo').classList.add('is-active')
    document.getElementById('info').innerText = `You took ${moves} Moves in ${document.getElementById('timer').innerText}`
}

var startTime;

function displaytime() {
    var endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;
    var seconds = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    var minutes = Math.round(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    var hours = Math.round(timeDiff % 24);
    timeDiff = Math.floor(timeDiff / 24);
    var days = timeDiff;

    document.getElementById('timer').innerHTML = minutes + ":" + seconds
    setTimeout(displaytime, 1000);
}
