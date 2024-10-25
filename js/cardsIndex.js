import randInt from './randomInteger.js'
import genCards from './generateCards.js'

// Small screen
const screenSM = matchMedia('(max-width: 767.98px)')
// Medium screen
const screenMD = matchMedia('(min-width: 768px) and (max-width: 991.98px)')
// Large screen
const screenLG = matchMedia('(min-width: 992px)')

const main = document.getElementById('container')
const section = document.createElement('section')
section.classList.add('mt-md-5')
// Create a space for breaking news
const divNews = document.createElement('div')
divNews.classList.add('container-news')

// Rows amount
const newsRows = 15
// Create array for rows
const row = []
// Loop to create rows for cards
for (let i = 0; i < newsRows; i++) {
    // Create rows
    row[i] = document.createElement('div')
    row[i].classList.add('d-md-flex', 'justify-content-md-between')
    
    // Get a amount of cards
    const cardsAmount = randInt(3, 5)

    // Callback function for cards
    genCards(card => {
        let classNum = null

        // Number of classes for each amount of cards
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

        // Set the amount of cards in each row
        card.forEach(cd => row[i].appendChild(cd))

        genBiggerCards(card, classNum)

        divNews.appendChild(row[i])

    }, cardsAmount)
}

// Function to generate bigger cards
function genBiggerCards(card, classNum) {
    // Array for cards indexes
    const cardsIndexes = []

    // Repeat loop according to the "classNum"
    for (let i = 0; i < classNum; i++) {
        
        let run = true

        while (run) {
            const classRand = randInt(0, (card.length - 1))

            // Condition to not repeat the index
            if (cardsIndexes.indexOf(classRand) == -1) {
                card[classRand].classList.add('card-w')

                // Set the number to array "cardsIndexes"
                cardsIndexes.push(classRand)

                run = false
            }
        }
    }
}

section.appendChild(divNews)
main.appendChild(section)

// const ev = 'change'
// screenLG.addEventListener(ev, () => generateImages())
// screenMD.addEventListener(ev, () => generateImages())
// screenSM.addEventListener(ev, () => generateImages())