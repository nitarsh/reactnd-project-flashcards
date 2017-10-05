import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import { QuestionsAndAnswers, Results } from './QuizPages'



class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({ title: 'Quiz' })

    constructor(props) {
        super(props)
        this.state = {
            qnNumber: 0,
            numCorrect: 0,
            isQuestion: true
        }
    }

    changeCard = () => {
        this.setState((prevState) => ({
            qnNumber: prevState.qnNumber + 1,
            isQuestion: true
        }), () => {
            if (this.state.qnNumber === this.props.deck.questions.length)
                clearLocalNotification().then(setLocalNotification)
        })

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

    restartQuiz = () => {
        this.setState({
            qnNumber: 0,
            numCorrect: 0,
            isQuestion: true
        })
    }

    render() {
        const { deck, navigation } = this.props
        const { qnNumber, numCorrect, isQuestion } = this.state
        const isComplete = (qnNumber === deck.questions.length)
        return (
            <View style={styles.container}>
                {isComplete ?
                    <Results
                        result={Math.round(((numCorrect * 1.0) / deck.questions.length) * 100.0)}
                        restartQuiz={this.restartQuiz}
                        backToQuiz={navigation.goBack}
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
    }
});

function mapStateToProps(state, { navigation }) {
    return {
        deck: state[navigation.state.params.title],
        title: navigation.state.params.title,
        navigation: navigation
    }
}

export default connect(mapStateToProps)(Quiz)