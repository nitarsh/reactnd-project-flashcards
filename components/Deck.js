import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title: title
        }
    }

    render() {
        return (
            <View>
                <Text>This is a Deck screen</Text>
            </View>
        )
    }

}