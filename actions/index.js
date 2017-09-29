export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const SAVE_DECK = 'SAVE_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'


export function saveDeck(deckTitle) {
    return {
        type: SAVE_DECK,
        deckTitle
    }
}

export function addCardToDeck(deckTitle, card) {
    return {
        type: SAVE_DECK,
        deckTitle,
        card
    }
}