// Small screen
const screenSM = matchMedia('(max-width: 767.98px)')
// Medium screen
const screenMD = matchMedia('(min-width: 768px) and (max-width: 991.98px)')
// Large screen
const screenLG = matchMedia('(min-width: 992px)')

// Get <main> element
const main = document.getElementsByTagName('main')[0]

// Create a section
const section = document.createElement('section')
section.className = 'mt-md-5'
// Create a space for breaking news
const divNews = document.createElement('div')
divNews.className = 'news'

// Function to get a pseudorandom integer number
const randomInt = (min, max) => {
    const rand = Math.random()
    const minCeil = Math.ceil(min)
    const maxFloor = Math.floor(max)

    return Math.floor(rand * (maxFloor - minCeil + 1) + minCeil)
}

// Function to generate the cards of the news
const generateNews = (callback) => {
    const cardRow = []
    // Set arrays inside of another array
    const cardStuff = [
        card = [],
        cardImg = [],
        cardBody = [],
        cardTitle = [],
        cardFooter = []
    ]

    // Generate rows for the cards
    for (let i = 0; i < 30; i++) {
        cardRow[i] = document.createElement('div')
        cardRow[i].classList.add('d-md-flex', 'justify-content-md-between')

        // Get a pseudorandom number to generate cards in each row
        const cardsQtd = randomInt(3, 5)
        let classNumber = null

        //Get the number of bigger cards in each row
        switch (cardsQtd) {
            case 3:
                classNumber = 2
                break
            case 4:
                classNumber = 1
                break
            default:
                classNumber = 0
                break
        }
        let funcNews = callback(cardStuff, cardsQtd, classNumber)
        // Set cards in row
        for (let j = 0; j < cardsQtd; j++) {
            cardRow[i].appendChild(funcNews[j])
        }
        // Set rows in div
        divNews.appendChild(cardRow[i])
    }
    section.appendChild(divNews)
    main.appendChild(section)
}

// Function to get cards for the first function
let cardNum = 0
generateNews((superArray, elemNum, classNum) => {
    // Array constants that are inside another array
    const card = superArray[0],
        cardImg = superArray[1],
        cardBody = superArray[2],
        cardTitle = superArray[3],
        cardFooter = superArray[4]

    let cardsAOS = 0
    for (let j = 0; j < elemNum; j++) {
        // Create cards
        card[j] = document.createElement('div')
        card[j].classList.add('card')
        // Data AOS configs
        cardsAOS += 300
        card[j].setAttribute('data-aos', 'fade-up')
        card[j].setAttribute('data-aos-delay', cardsAOS)
        card[j].setAttribute('data-aos-duration', '1000')

        // Create images
        cardNum++
        cardImg[j] = document.createElement('img')
        cardImg[j].src = `https://picsum.photos/300/200?random=${cardNum}`
        cardImg[j].alt = `Image news ${cardNum}`
        cardImg[j].classList.add('card-img')
        
        // Create body for the cards
        cardBody[j] = document.createElement('div')
        cardBody[j].classList.add('card-body')
        
        // Create a title for the cards
        cardTitle[j] = document.createElement('h5')
        cardTitle[j].classList.add('card-title')
        cardTitle[j].innerText = `Headline - News ${cardNum}`

        // Create footer for the cards
        cardFooter[j] = document.createElement('div')
        cardFooter[j].classList.add('card-footer', 'text-secondary')
        cardFooter[j].innerText = 'Update - MM/DD/YYYY'

        // Set titles to bodies 
        cardBody[j].appendChild(cardTitle[j])
        // Set images, bodies and footers to cards
        card[j].append(cardImg[j], cardBody[j], cardFooter[j])
    }

    let numRand = null
    const arrayClassNum = []

    // Loop for according to the number of classes
    for (let j = 0; j < classNum; j++) {
        let run = true

        /* While loop in case of the choosen number
        is equal to any of the previous one. */
        while (run) {
            numRand = randomInt(0, (elemNum - 1))
            
            if (arrayClassNum.indexOf(numRand) == -1) {
                card[numRand].classList.add('card-w')

                arrayClassNum.push(numRand)

                run = false
            }
        }
    }
    // Return card as object
    return card
})

// const ev = 'change'
// screenLG.addEventListener(ev, () => generateImages())
// screenMD.addEventListener(ev, () => generateImages())
// screenSM.addEventListener(ev, () => generateImages())