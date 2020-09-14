import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Note from './Note'

Screen2 = ({ navigation }) => {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         noteArray: [],
    //         noteText: '',
    //     }
    // }
    const [noteArray, setNoteArray] = useState([])
    const [noteText, setNoteText] = useState('')
    const data = noteArray;


    console.log("na", noteArray)
    // let data_arr = noteArray.data
    // console.log(typeof data_arr, "!!!!!")

    let notes = noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={() => deleteNote(val.key)} />
    })


    const addNote = () => {
        console.log("NOTE TEXT", noteText)

        if (noteText) {
            var d = new Date();
            let name=({
                'date': d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                note: noteText,
                key:Math.random()
            });

            console.log("DATA",data)

         
           setNoteText('')
        setNoteArray([...noteArray,name])
        }
       
    }
  
    const deleteNote = (key) => { 
        alert("DELETE")
       
        
         let newArray=data.filter(item=>
            {
                console.log("DEL KEY",key,"ITEM KEY",item.key)
              return item.key!==key
            }
          )
          console.log("DELETE",newArray)

        setNoteArray(newArray)
    }


    return (


        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Headertext}>
                    NOTEE
                     </Text>
            </View>

            <Button onPress={() => navigation.goBack()} title="Go back home" />


            <ScrollView style={styles.Scrollcontainer}>

                {notes}
                
            </ScrollView>

 
            <View style={styles.footer}>
                <TextInput style={styles.textInput}
                    onChangeText={noteText => setNoteText(noteText)}
                    value={noteText}
                    placeholder="TO DO"
                    placeholderTextColor="white" />

            </View>

            <TouchableOpacity style={styles.addButton} onPress={addNote}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>






        </View>









    )
};









const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        header: {
            backgroundColor: '#E91E63',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 10,
            borderBottomColor: '#ddd',
        },
        headerText: {
            color: 'white',
            fontSize: 18,
            padding: 26,
        },
        scrollContainer: {
            flex: 1,
            marginBottom: 100,
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
        },
        textInput: {
            alignSelf: 'stretch',
            color: '#fff',
            padding: 20,
            backgroundColor: '#252525',
            borderTopWidth: 2,
            borderTopColor: '#ededed',
        },
        addButton: {
            position: 'absolute',
            zIndex: 11,
            right: 20,
            bottom: 90,
            backgroundColor: '#E91E63',
            width: 90,
            height: 90,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 8,
        },
        addButtonText: {
            color: '#fff',
            fontSize: 24,
        },

    })


export default Screen2