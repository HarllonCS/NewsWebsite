import genCards from './generateCards.js'

const cardsAmount = 4

// Callback function generate cards
genCards(card => {
    const container = document.getElementById('containerAside')

    card.forEach(cd => container.appendChild(cd))

}, cardsAmount)