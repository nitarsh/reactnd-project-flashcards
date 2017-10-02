import React, { Component } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'
import * as Actions from '../actions'

class NewDeck extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    goToDeck = (navigation, title) => {
        navigation.navigate('Deck', { title })
    }

    onSubmit = () => {
        const { addNewDeck, navigation } = this.props
        title = this.state.text
        addNewDeck(this.state.text)
        this.setState({ text: '' })
        Keyboard.dismiss()
        this.goToDeck(navigation, title)
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.newDeck}>
                <Text style={styles.itemText}>What is the title of your new Deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
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
        marginBottom: 50
    },
    textInput: {
        height: 40,
        borderColor: grey,
        borderWidth: 1,
        margin: 5,
        width: 150,
        marginBottom: 10
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
        addNewDeck: (title) => dispatch(Actions.addNewDeck(title))
    }
}

export default connect(
    (state, { navigation }) => ({ navigation }),
    mapDispatchToProps
)(NewDeck)