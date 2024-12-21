let cardNum = 0
// Function to generate cards
export default function generateCards(callback, elements) {
    let dataAOSDelay = 0

    const card = []
    const cardImg = []
    const cardBody = []
    const cardTitle = []
    const cardFooter = []

    for (let y = 0; y < elements; y++) {
        // Create cards
        card[y] = document.createElement('div')
        card[y].classList.add('card')

        dataAOSDelay += 300
        // Data AOS
        card[y].setAttribute('data-aos', 'fade-up')
        card[y].setAttribute('data-aos-delay', dataAOSDelay)
        card[y].setAttribute('data-aos-duration', '1000')

        // Click event
        card[y].addEventListener('click', () => location.href = './newsPage.html')

        cardNum++
        // Create images for cards
        cardImg[y] = document.createElement('img')
        cardImg[y].src = `https://picsum.photos/1?random=${cardNum}`
        cardImg[y].alt = `Image news ${cardNum}`

        // Create bodies for cards
        cardBody[y] = document.createElement('div')
        cardBody[y].classList.add('card-body')

        // Create titles for cards
        cardTitle[y] = document.createElement('h5')
        cardTitle[y].classList.add('card-title')
        cardTitle[y].innerText = `Headline - News ${cardNum}`

        // Create footers for bodies of the cards
        cardFooter[y] = document.createElement('div')
        cardFooter[y].classList.add('card-footer', 'text-secondary')
        cardFooter[y].innerText = 'Update - MM/DD/YYYY'

        // Set titles to bodies
        cardBody[y].appendChild(cardTitle[y])
        // Set images, bodies and footers to cards
        card[y].append(cardImg[y], cardBody[y], cardFooter[y])
    }

    callback(card)
}