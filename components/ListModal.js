import React from "react"
import { useForm } from "react-hook-form"
import { 
  Text,
  StyleSheet
} from "react-native"
import { TextInput } from "react-native-gesture-handler"

const ListModal = props => {

  console.log(props)
  return (
    <TextInput 
      style={styles.input}
      placeholder="Titre"
    />
  )
}

export default ListModal

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})