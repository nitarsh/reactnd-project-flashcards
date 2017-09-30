import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({ title: 'Quiz' })

    constructor(props) {
        super(props);
        this.state = {
            qnNumber: 0,
            numCorrect:0
        };
      }

    render() {
        return (
            <View>
                <Text>This is Quiz screen</Text>
            </View>
        )
    }

}