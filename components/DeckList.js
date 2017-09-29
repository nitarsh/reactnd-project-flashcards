import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

export default class DeckList extends Component {

  _renderItem = ({ item }) =>
    (<TouchableOpacity
      onPress={() => this.props.navigation.navigate(
        'Deck',
        { title: item.key }
      )}

    ><View style={styles.item}>
        <Text style={{ textAlign: 'center' }}>{item.key}</Text>
        <Text style={{ textAlign: 'center' }}>{item.questions.length} cards</Text>
      </View>
    </TouchableOpacity>)

  render() {
    data = [
      { key: 'Hello1', questions: [1, 2, 3] },
      { key: 'Hello2', questions: [1] },
      { key: 'Hello3', questions: [] },
      { key: 'Hello4', questions: [1, 2, 3, 4, 5, 6] },
      { key: 'Hello5', questions: [1, 2, 3] },
      { key: 'Hello6', questions: [1] },
      { key: 'Hello7', questions: [] },
      { key: 'Hello8', questions: [1, 2, 3, 4, 5, 6] },
    ]
    return (
      <View style={styles.deckList}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  deckList: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    backgroundColor: '#ddd',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 100,
    borderColor: '#888',
    borderBottomWidth: 1
  },
});
