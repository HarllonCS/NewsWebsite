import randInt from './random.js'
import genCards from './generateCards.js'

// Small screen
const screenSM = matchMedia('(max-width: 767.98px)')
// Medium screen
const screenMD = matchMedia('(min-width: 768px) and (max-width: 991.98px)')

const main = document.getElementById('container')
const section = document.createElement('section')
section.classList.add('mt-md-5')
// Create a space for breaking news
const divNews = document.createElement('div')
divNews.classList.add('container-news')

// Function rows for cards
function generateNews() {
    divNews.innerHTML = ''

    const row = []

    for (let x = 0; x < 9; x++) {
        row[x] = document.createElement('div')
        row[x].classList.add('d-md-flex', 'justify-content-between')
        
        if (screenSM.matches) {
            funcCards(row, x, 0)
        } else if (screenMD.matches) {
            funcCards(row, x, 1)
        } else {
            funcCards(row, x, 2)
        }
    }

    row.forEach(rw => divNews.appendChild(rw))
    section.appendChild(divNews)
    main.appendChild(section)
}

let lastAmount
function funcCards(row, x, op) {
    let cardsAmount

    switch (op) {
        case 0:
            genCards(card => {
                card.forEach(cd => row[x].appendChild(cd))
            }, 1)
            break
    
        case 1:
            cardsAmount = randInt(1, 2)

            if (lastAmount == 1 && cardsAmount == 1) {
                cardsAmount = 2
            }

            genCards(card => {
                card.forEach(cd => {
                    if (cardsAmount == 1) {
                        cd.classList.add('card-w')
                    }
                    
                    row[x].appendChild(cd)
                })
            }, cardsAmount)

            lastAmount = cardsAmount
            break
        
        default:
            cardsAmount = randInt(3, 5)

            genCards(card => {
                card.forEach(rw => row[x].appendChild(rw))

                let classNum

                switch (cardsAmount) {
                    case 3:
                        classNum = 2
                        break
                
                    case 4:
                        classNum = 1
                        break
                    
                    default:
                        classNum = 0
                        break
                }

                const classArr = []

                for (let y = 0; y < classNum; y++) {
                    let run = true

                    while (run) {
                        const cardIndex = randInt(0, cardsAmount-1)

                        if (classArr.indexOf(cardIndex) == -1) {
                            card[cardIndex].classList.add('card-w')

                            classArr.push(cardIndex)
                            
                            run = false
                        }
                    }
                }
            }, cardsAmount)
            break
    }
}

generateNews()

const ev = 'change'
screenMD.addEventListener(ev, generateNews)
screenSM.addEventListener(ev, generateNews)