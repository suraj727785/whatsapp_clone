import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacityBase, TouchableOpacity} from 'react-native';
import { Value } from 'react-native-reanimated';
import Colors from '../constants/Colors';

const ChatInput = () =>{
    const [message,setMessage]=useState('');

    const onPress=()=>{
        if(!message){
        onPressMicrophone();
        }else{
        onPressSend();
        }
    }
    const onPressMicrophone=()=>{
        console.warn('Microphone');
    }
    const onPressSend=()=>{
        console.warn(`Sendind: ${message}`);
        // sending message to backend
        setMessage('');
    }
    return (
       <View style={styles.container}>
           <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color='grey' style={styles.icon} />
            <TextInput 
            style={styles.textInput}
            value={message}
            placeholder={"Type a message"}
            multiline
            onChangeText={setMessage}
             />
            <Entypo name="attachment" size={24} color='grey' style={styles.icon} />
            {!message &&<Fontisto name="camera" size={24} color='grey' style={styles.icon} />}
           </View>
           <TouchableOpacity onPress={onPress}>
           <View style={styles.buttonContainer}>
           {!message ? <MaterialCommunityIcons name='microphone' size={28} color='white'/>
                     : <MaterialIcons name='send' size={28} color='white'/>
                     }
           </View>
           </TouchableOpacity>
       </View>
    );
}

const styles= StyleSheet.create({
    container:{
     flexDirection:'row',
     margin:10,
     alignItems:'flex-end',
    },
    mainContainer:{
     flexDirection:'row',
     backgroundColor:'white',
     padding:10,
     borderRadius:25,
     marginRight:5,
     flex:1,
     alignItems:'flex-end',
    },
    buttonContainer:{
    backgroundColor:Colors.light.tint,
    borderRadius:50,
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
        fontSize:20
    },
    icon:{
        marginHorizontal:5,
    }

});

export default ChatInput;