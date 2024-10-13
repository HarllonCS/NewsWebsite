let cardNum = 0
// Function to generate cards
export default function generateCards(callback, elements) {
    let dataAOSDelay = 0
    
    const card = []
    const cardImg = []
    const cardBody = []
    const cardTitle = []
    const cardFooter = []

    for (let i = 0; i < elements; i++) {
        // Create cards
        card[i] = document.createElement('div')
        card[i].classList.add('card')

        dataAOSDelay += 300
        // Data AOS
        card[i].setAttribute('data-aos', 'fade-up')
        card[i].setAttribute('data-aos-delay', dataAOSDelay)
        card[i].setAttribute('data-aos-duration', '1000')

        cardNum++
        // Create images for cards
        cardImg[i] = document.createElement('img')
        cardImg[i].src = `https://picsum.photos/1?random=${cardNum}`
        cardImg[i].alt = `Image news ${cardNum}`

        // Create bodies for cards
        cardBody[i] = document.createElement('div')
        cardBody[i].classList.add('card-body')

        // Create titles for cards
        cardTitle[i] = document.createElement('h5')
        cardTitle[i].classList.add('card-title')
        cardTitle[i].innerText = `Headline - News ${cardNum}`

        // Create footers for bodies of the cards
        cardFooter[i] = document.createElement('div')
        cardFooter[i].classList.add('card-footer', 'text-secondary')
        cardFooter[i].innerText = 'Update - MM/DD/YYYY'

        // Set titles to bodies
        cardBody[i].appendChild(cardTitle[i])
        // Set images, bodies and footers to cards
        card[i].append(cardImg[i], cardBody[i], cardFooter[i])
    }
    
    callback(card)
}