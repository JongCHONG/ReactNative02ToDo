import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const ListCard = props => {
  const ShowList = ({ item }) => {
    // console.log(item)
    return (
      <View style={styles.item}>
        <View style={styles.itemTitle}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.itemDescription}>
          <Text>{item.description}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.list}>
        <View style={styles.listtitle}>
          <Text>Title</Text>
        </View>
        <View style={styles.listDescription}>
          <Text>Description</Text>
        </View>
      </View>
      {props.list &&
        <FlatList data={props.list} renderItem={ShowList} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    margin: 10,
    flexDirection: 'row',
  },
  listtitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 200,
    marginHorizontal: 5,
  },
  listDescription: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 200,
    marginHorizontal: 5,
  },
  item: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  itemTitle: {
    width: 200,
    marginHorizontal: 5,
  },
  itemDescription: {
    width: 200,
    marginHorizontal: 5,
  },
})

export default ListCard