import React from "react"
import { 
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native"
import { TextInput } from "react-native-gesture-handler"

import { Formik } from 'formik'

const ListModal = props => {

  console.log(props)
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
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