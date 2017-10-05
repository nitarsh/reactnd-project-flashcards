import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'

export function QuestionsAndAnswers({ card, markCorrect, markIncorrect, isQuestion, toggleQuestion }) {
    const { question, answer } = card
    return (
        <View style={styles.container}>
            <Text style={[styles.itemText, styles.itemTitle]}>
                {isQuestion ? question : answer}
            </Text>
            <TouchableOpacity
                style={styles.cleanBtn}
                onPress={() => toggleQuestion()}
            >
                <Text style={[styles.itemText, { color: pink }]}>
                    Show {isQuestion ? 'Answer' : 'Question'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, { backgroundColor: '#07f93d' }]}
                onPress={() => markCorrect()}
            >
                <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, { backgroundColor: '#ff1f08' }]}
                onPress={() => markIncorrect()}
            >
                <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    )
}

export function Results({ result, restartQuiz, backToQuiz }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>
                Percentage Correct: {result}%
            </Text>
            <TouchableOpacity
                style={[styles.btn]}
                onPress={() => restartQuiz()}
            >
                <Text style={styles.btnText}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn]}
                onPress={() => backToQuiz()}
            >
                <Text style={styles.btnText}>Back to Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        textAlign: 'center',
        color: nearBlack,
        marginBottom: 20,
        fontSize: 30
    },
    itemTitle: {
        fontSize: 40
    },
    cleanBtn: {
        justifyContent: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: pink,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    btnText: {
        textAlign: 'center',
        color: white,
        fontSize: 18
    }
});