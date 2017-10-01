import * as API from '../utils/api'

export const SET_DECKS = 'SET_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function saveDecks(decks) {
    return {
        type: SET_DECKS, decks
    }
}

export function saveDeckTitle(title) {
    return {
        type: SAVE_DECK_TITLE, title
    }
}

export function addCardToDeck(title, card) {
    return {
        type: ADD_CARD_TO_DECK, title, card
    }
}

export function fetchDecks() {
    return function (dispatch) {
        return API.fetchDecks().then(
            (decks) => {
                console.log('Fetched decks:');
                console.log(decks);
                decks = decks ? JSON.parse(decks) : {}
                return dispatch(saveDecks(decks))
            }
        )
    }
}

export function addNewDeck(title) {
    return function (dispatch) {
        API.addDeckWithTitle({ title })
        return dispatch(saveDeckTitle(title))

    };
}

export function addQuestionToDeck(title, question) {
    return function (dispatch) {
        return API.fetchDecks().then(
            (decks) => {
                deck = JSON.parse(decks)[title]
                questions = deck.questions.concat(question)
                return API.setQuestionsToDeck({title, questions}).then(
                    () => dispatch(addCardToDeck(title, question))
                )
            }
        )
    };
}