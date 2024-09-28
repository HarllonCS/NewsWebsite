// Small screen
const screenSM = matchMedia('(max-width: 767.98px)')
// Medium screen
const screenMD = matchMedia('(min-width: 768px) and (max-width: 991.98px)')
// Large screen
const screenLG = matchMedia('(min-width: 992px)')

// Create a section
const section = document.createElement('section')
section.className = 'mt-md-5'
// Create a space for breaking news
const divNews = document.createElement('div')
divNews.className = 'news'

// Function to get a pseudorandom integer number
function RandomInt(min, max) {
    const rand = Math.random()
    const minCeil = Math.ceil(min)
    const maxFloor = Math.floor(max)

    return Math.floor(rand * (maxFloor - minCeil + 1) + minCeil)
}

// Function to generate the cards of the news
function generateCards() {
    const cardRow = []
    
    const cardStuff = [
        card = [],
        cardImg = [],
        cardBody = [],
        cardFooter = []
    ]

    // for (let i = 0; i < 10; i++) {}
}

generateCards()
// const ev = 'change'
// screenLG.addEventListener(ev, () => generateImages())
// screenMD.addEventListener(ev, () => generateImages())
// screenSM.addEventListener(ev, () => generateImages())