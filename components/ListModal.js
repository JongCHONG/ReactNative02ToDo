import React from "react"
import { 
  StyleSheet,
  View,
  Button,
} from "react-native"
import { TextInput } from "react-native-gesture-handler"

import { Formik } from 'formik'

const ListModal = props => {
  // console.log(props)
  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      onSubmit={values => props.setList(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            placeholder="Title"
          />
          <TextInput
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            placeholder="Description"
          />
          <Button 
            onPress={handleSubmit}
            title="Submit" 
            disabled={values.title.length < 5 ? true : false}
          />
        </View>
      )}
    </Formik>
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