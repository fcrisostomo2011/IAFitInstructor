import {StyleSheet, View, Text, FlatList as NewFlatList } from 'react-native'
import React from 'react'

const FlatList = ({itemslist, renderListItem}) => {
  return (
    <View style={styles.listContainer}>
           <NewFlatList 
           data={itemslist}
           renderItem={renderListItem}
           keyExtractor={item => item.id} 
           
           >
             
           </NewFlatList>

          </View>
  )
}

export default FlatList

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 25,
      },
})