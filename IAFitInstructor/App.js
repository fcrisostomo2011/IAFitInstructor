import {  StyleSheet,Button,Text,   
  View, } from 'react-native'
  import Modal from './components/Modal'
  import TextInput from './components/TextInput'
  import FlatList from './components/FlatList'
  import TouchableOpacity from './components/TouchableOpacity' 
//import {MyComponent} from './Components'
import React, { useState } from 'react'
 
export default function App() {
  const [textValue, setTextValue]= useState('')
  const [itemslist, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible,setModalVisible] = useState(false)


  const onHandleChangeItem = (text) => setTextValue(text)
  const addItem = () => {
    if (textValue === ''){
      console.log('entro aqui')
      return
    }

    setItemsList(prevState=>[
      ...prevState,
      {id: Math.random(), value: textValue},
    ]
      )
      setTextValue('')
  }

  const renderListItem = ({item, index}) => (
    <TouchableOpacity onHandleModal = {onHandleModal}  index={index}  item={item}>
      
    </TouchableOpacity>

  )

  const onHandleDelete = () =>{
    console.log(itemSelected)
    let arr = itemslist
    arr.splice(itemSelected,1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const cancel = () =>{
    setModalVisible(false)
  }

  const onHandleModal = index  => {
    console.log(index)
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Shopping List </Text>

        <TextInput textValue={textValue} onHandleChangeItem={onHandleChangeItem} addItem={addItem} >

        </TextInput>
        

        <FlatList itemslist={itemslist}  renderListItem={renderListItem} >

        </FlatList>
          
          <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} cancel={cancel}></Modal>
        
         

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#E7F6FF',
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 25,
  },
  
 
  
  
})

/*
<View style={styles.TextContainer}>
            <Text style={styles.Text}>Item 1</Text>
            </View>

            <View style={styles.TextContainer}>
            <Text style={styles.Text}>Item 2</Text>
            </View>

            <View style={styles.TextContainer}>
            <Text style={styles.Text}>Item 3</Text>
            </View>
            */

            /*
             {itemslist.map(item =>(

            <View style={styles.TextContainer}>
             <Text style={styles.Text}>{item.value}</Text>
            </View>
            ))
            }

             <TouchableOpacity>
            <Text>Hola Mundo</Text>
          </TouchableOpacity>

          <MyComponent></MyComponent>
       
            */