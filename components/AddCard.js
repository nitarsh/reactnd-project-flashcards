import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'
import * as Actions from '../actions'

class AddCard extends Component {
    static navigationOptions = ({ navigation }) => ({ title: 'Add Card' })

    constructor(props) {
        super(props);
        this.state = { question: 'sdfdsf', answer: '' };
    }

    onSubmit = () => {
        const { title, addQuestionToDeck } = this.props
        const { question, answer } = this.state
        addQuestionToDeck(title, { question, answer })
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.newDeck}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(question) => this.setState({ question })}
                    value={this.state.question}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(answer) => this.setState({ answer })}
                    value={this.state.answer}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    newDeck: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 300
    },
    textInput: {
        height: 40,
        borderColor: grey,
        borderWidth: 1,
        margin: 5,
        width: 150
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: pink,
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        color: white,
        fontSize: 18
    }
});


function mapDispatchToProps(dispatch) {
    return {
        addQuestionToDeck: (title, question) => dispatch(Actions.addQuestionToDeck(title, question))
    }
}

export default connect(() => { return {} }, mapDispatchToProps)(AddCard)