import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'mobileFlashcards:2'

export function formatResults(results) {
    return results === null
        ? setDummyData()
        : setMissingDates(JSON.parse(results))
}

export function fetchDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
}

export function addDeckWithTitle({ title }) {
    return AsyncStorage.getItem(STORAGE_KEY).then(
        (result) => {
            let decks = {}
            if (result) {
                decks = JSON.parse(result)
                decks[title] = {
                    title: title,
                    questions: []
                }
            }
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks)).then(() =>
                AsyncStorage.getItem(STORAGE_KEY).then((result) =>
                    console.log(JSON.parse(result)))
            )
        })
}

export function setQuestionsToDeck({ title, questions }) {
    return AsyncStorage.mergeItem(STORAGE_KEY,
        JSON.stringify({
            [title]: {
                title: title,
                questions: questions
            }
        })
    )
}