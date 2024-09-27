// Small screen
const screenSM = matchMedia('(max-width: 767.98px)')
// Medium screen
const screenMD = matchMedia('(min-width: 768px) and (max-width: 991.98px)')
// Large screen
const screenLG = matchMedia('(min-width: 992px)')

// Get cards
const card = document.querySelectorAll('.card > a')

// Generate images FUNCTION
function generateCards() {
    let cardImg = null

    for (let i = 0; i < card.length; i++) {
        // Create images
        cardImg = document.createElement('img')

        cardImg.src = `https://picsum.photos/300/200?random=${i+1}`
        cardImg.alt = `Image news ${i+1}`
        cardImg.className = 'card-img'
        
        card[i].prepend(cardImg)
    }
}

generateCards()
// const ev = 'change'
// screenLG.addEventListener(ev, () => generateImages())
// screenMD.addEventListener(ev, () => generateImages())
// screenSM.addEventListener(ev, () => generateImages())