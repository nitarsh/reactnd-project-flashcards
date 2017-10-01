import { SET_DECKS, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case SET_DECKS:
            return {
                ...action.decks
            }
        case SAVE_DECK_TITLE:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: state[action.title].questions.concat(action.card)
                }
            }
        default:
            return state
    }
}

export default decks