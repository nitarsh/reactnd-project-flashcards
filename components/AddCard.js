import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'
import * as Actions from '../actions'

class AddCard extends Component {
    static navigationOptions = ({ navigation }) => ({ title: 'Add Card' })

    constructor(props) {
        super(props);
        this.state = { question: '', answer: '' };
    }

    onSubmit = () => {
        const { title, addQuestionToDeck, goBack } = this.props
        const { question, answer } = this.state
        addQuestionToDeck(title, { question, answer })
        Keyboard.dismiss()
        goBack()
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.newDeck}>
                <Text style={styles.itemText}>Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(question) => this.setState({ question })}
                    value={this.state.question}
                />
                <Text style={styles.itemText}>Answer</Text>
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
        justifyContent: 'center',
        height: 300
    },
    itemText: {
        textAlign: 'center',
        color: nearBlack,
        marginBottom:10
    },
    textInput: {
        height: 40,
        borderColor: grey,
        borderWidth: 1,
        margin: 5,
        width: 250,
        marginBottom: 30
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

function mapStateToProps(state, { navigation }) {
    return {
        title: navigation.state.params.title
    }
}


function mapDispatchToProps(dispatch, { navigation }) {
    return {
        addQuestionToDeck: (title, question) => dispatch(Actions.addQuestionToDeck(title, question)),
        goBack: () => navigation.goBack()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)