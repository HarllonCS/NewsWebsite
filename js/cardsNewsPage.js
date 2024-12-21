import genCards from './generateCards.js'

// Callback function generate cards
genCards(card => {
    const container = document.getElementById('containerAside')

    card.forEach(cd => container.appendChild(cd))
}, 4)