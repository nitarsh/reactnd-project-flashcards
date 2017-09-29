import { SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../actions'

const initialDeckState = {
    Hello1: {
        title: 'Hello1',
        questions: [
            { question: 'question1', answer: 'answer1' },
        ]
    },
    Hello2: {
        title: 'Hello2',
        questions: [
        ]
    },
    Hello3: {
        title: 'Hello3',
        questions: [
            { question: 'question1', answer: 'answer1' },
            { question: 'question2', answer: 'answer2' },
            { question: 'question3', answer: 'answer3' },
        ]
    },
}

function decks(state = initialDeckState, action) {
    switch (action.type) {
        case SAVE_DECK_TITLE:
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    title: action.title
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