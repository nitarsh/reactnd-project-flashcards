import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'

function QuestionsAndAnswers({ card, markCorrect, markIncorrect, isQuestion, toggleQuestion }) {
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

function Results({ result }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>
                Percentage Correct: {result}%
            </Text>
        </View>
    )
}

class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({ title: 'Quiz' })

    constructor(props) {
        super(props);
        this.state = {
            qnNumber: 0,
            numCorrect: 0,
            isQuestion: true
        };
    }

    changeCard = () => {
        this.setState((prevState) => ({
            qnNumber: prevState.qnNumber + 1,
            isQuestion: true
        }))
    }

    markIncorrect = () => {
        this.changeCard()
    }

    markCorrect = () => {
        this.changeCard()
        this.setState((prevState) => ({
            numCorrect: prevState.numCorrect + 1
        }))
    }

    toggleQuestion = () => {
        this.setState((prevState) => ({
            isQuestion: prevState.isQuestion ? false : true
        }))
    }

    render() {
        const { deck } = this.props
        const { qnNumber, numCorrect, isQuestion } = this.state
        const isComplete = (qnNumber === deck.questions.length)
        return (
            <View style={styles.container}>
                {isComplete ?
                    <Results
                        result={Math.round(((numCorrect * 1.0) / deck.questions.length) * 100.0)}
                    /> :
                    <QuestionsAndAnswers
                        card={deck.questions[qnNumber]}
                        markCorrect={this.markCorrect}
                        markIncorrect={this.markIncorrect}
                        isQuestion={isQuestion}
                        toggleQuestion={this.toggleQuestion}
                    />
                }
            </View>

        )
    }

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

function mapStateToProps(state, { navigation }) {
    return {
        deck: state[navigation.state.params.title],
        title: navigation.state.params.title
    }
}

export default connect(mapStateToProps)(Quiz)