import * as API from '../utils/api'

// export const GET_DECKS = 'GET_DECKS'
// export const GET_DECK = 'GET_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'


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

export function addNewDeck(title) {
    return function (dispatch) {
        return API.addDeckWithTitle({ title }).then(
            () => dispatch(saveDeckTitle(title))
        );
    };
}

export function addQuestionToDeck(title, question) {
    return function (dispatch) {
        return API.addQuestionToDeck({ title, question }).then(
            () => dispatch(addCardToDeck(title, question))
        );
    };
}