import React from 'react'
import {  StyleSheet, Text, View ,  Modal as NewModal, Button } from 'react-native'

const Modal = ({modalVisible, onHandleDelete, cancel}) => {
  return (
    <NewModal transparent={true}   visible={modalVisible} animationType='fade'>
    <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <View style={styles.modalTitle}>
        <Text>
          Eliminar Producto
        </Text>

      </View>
      <View style={styles.modalMessage}>
        <Text>
          ¿Estás seguro de eliminar?
        </Text>

      </View>
      <View style={styles.modalButton}>
        <Button title='confirmar' onPress={onHandleDelete}></Button>
        
      </View>
      <View style={styles.modalButton}>
      <Button title='cancelar' onPress={cancel} color="#ff88ee"></Button>
      </View>
      </View>
      </View>
      </NewModal> 
  )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      modalTitle: {
        backgroundColor: '#ccc',
        color: '#fff',
        fontSize: 18,
      },
      modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalButton: {
        marginTop: 15,
      },

      
})