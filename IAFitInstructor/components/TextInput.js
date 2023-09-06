import { StyleSheet, View, TextInput as NewTextInput, Button } from 'react-native'
import React from 'react'

const TextInput = ({textValue, onHandleChangeItem, addItem}) => {
  return (
    <View style={styles.inputContainer}>
    <NewTextInput 
      placeholder='Nuevo producto..'
      style={styles.input}
      placeholderTextColor='#399e44'
      value={textValue}
      onChangeText={onHandleChangeItem}>
    </NewTextInput>
    <Button title='+ADD' color="#000" onPress={addItem}></Button>
  </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },

})