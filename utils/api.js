import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'mobileFlashcards'

export function formatResults(results) {
    return results === null
        ? setDummyData()
        : setMissingDates(JSON.parse(results))
}

export function fetchDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
}

export function addDeckWithTitle({ title }) {
    return AsyncStorage.mergeItem(STORAGE_KEY,
        JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        })
    )
}

// export function removeEntry(key) {
//     return AsyncStorage.getItem(STORAGE_KEY)
//         .then((results) => {
//             const data = JSON.parse(results)
//             data[key] = undefined
//             delete data[key]
//             AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
//         })
// }