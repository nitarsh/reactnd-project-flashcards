import React, { Component } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'
import * as Actions from '../actions'

class NewDeck extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'sdfdsf' };
    }

    onSubmit = () => {
        const {addNewDeck} = this.props
        addNewDeck(this.state.text)
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
        justifyContent: 'space-around',
        height: 300
    },
    itemText: {
        textAlign: 'center',
        color: nearBlack
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
        addNewDeck: (title) => dispatch(Actions.addNewDeck(title))
    }
}

export default connect(() => { return {} }, mapDispatchToProps)(NewDeck)