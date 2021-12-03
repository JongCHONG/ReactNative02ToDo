import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import ListModal from './components/ListModal'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [list, setList] = useState([])

  const handleSetList = (e) => {
    // console.log(e)
    setList([...list, e])
  }

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

  console.log(list)
  return (
    <View style={styles.container}>
      {isModalVisible &&  
        <Modal
          animationType="slide"
          transparent={true}
        >
          <ListModal setList={handleSetList} />
          <TouchableOpacity 
            onPress={() => setIsModalVisible(false)}
          >
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </Modal>
      }
      <Button 
        title="Add a list" 
        onPress={() => setIsModalVisible(true)}
      />
      <View>
        <View style={styles.list}>
          <View style={styles.listtitle}>
            <Text>Title</Text>
          </View>
          <View style={styles.listDescription}>
            <Text>Description</Text>
          </View>
        </View>
        {list &&
          <FlatList data={list} renderItem={ShowList} />
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
