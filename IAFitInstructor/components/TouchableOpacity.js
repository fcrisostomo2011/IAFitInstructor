import { StyleSheet, View, Text, TouchableOpacity as NewTouchableOpacity } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'

const TouchableOpacity = ({onHandleModal, index, item}) => {
  return (
    
    <NewTouchableOpacity style={styles.itemContainer} onPress={() => onHandleModal(index)}>
         
           <Text style={styles.textItem}>{item?.value || 'elemento lista'}</Text>
          </NewTouchableOpacity>
  )
}

export default TouchableOpacity

const styles = StyleSheet.create({

    itemContainer: {
        height: 40,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#261995',
        shadowColor: '#fe6855',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
      },
      textItem: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#fff',
        fontWeight: '600',
        fontVariant: 'no-common-ligatures',
      },
})