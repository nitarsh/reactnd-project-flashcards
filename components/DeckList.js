import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { pink, nearBlack, white, orange, grey, paper } from '../utils/colors'

function mapStateToProps(state) {
  return {
    deckList: Object.values(state).map(e => { e.key = e.title; return e })
  }
}

class DeckList extends Component {

  componentDidMount() {
    console.log(this.props.deckList)
  }

  _renderItem = ({ item }) => {
    console.log(item)
    return (<TouchableOpacity
      onPress={() => this.props.navigation.navigate(
        'Deck',
        { title: item.key }
      )}
    >
      <View style={styles.item}>
        <Text style={[styles.itemText, styles.itemTitle]}>{item.key}</Text>
        <Text style={styles.itemText}>{item.questions.length} cards</Text>
      </View>
    </TouchableOpacity>)
  }


  render() {
    return (
      <View style={styles.deckList}>
        <FlatList
          data={this.props.deckList}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  deckList: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    backgroundColor: white,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 100,
    borderColor: '#888',
    borderBottomWidth: 1
  },
  itemText: {
    textAlign: 'center',
    color: paper
  },
  itemTitle: {
    fontSize: 25,
    color: nearBlack
  }
});
