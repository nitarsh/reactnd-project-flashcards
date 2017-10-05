import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'

function mapStateToProps(state, { navigation }) {
    return {
        deck: state[navigation.state.params.title],
        title: navigation.state.params.title
    }
}

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return { title }
    }

    render() {
        const { deck, title } = this.props
        const isEmpty = (deck.questions.length === 0)
        return (
            <View style={styles.deck}>
                <Text style={[styles.itemText, styles.itemTitle]}>{deck.title}</Text>
                <Text style={styles.itemText}>{deck.questions.length} cards</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.props.navigation.navigate(
                        'AddCard', { title }
                    )}
                >
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, isEmpty ? styles.btnDisabled : {}]}
                    disabled={isEmpty}
                    onPress={() => this.props.navigation.navigate(
                        'Quiz', { title }
                    )}
                >
                    <Text style={styles.btnText}>Start Quiz</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        textAlign: 'center',
        color: nearBlack,
        marginBottom: 20
    },
    itemTitle: {
        fontSize: 25
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: pink,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    btnDisabled: {
        backgroundColor: grey
    },
    btnText: {
        textAlign: 'center',
        color: white,
        fontSize: 18
    }
});

export default connect(mapStateToProps)(Deck)