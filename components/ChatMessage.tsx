import moment from 'moment';
import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { Message } from '../types';

export type ChatMessageprops = {
    message:Message;
}

const ChatMessage=(props:ChatMessageprops)=>{
    const {message} = props;
    const isMyMessage=()=>{
        return message.user.id === 'u1';
    }
    return(
     <View style={styles.container}>
         <View style={[styles.messageBox,{
         backgroundColor:isMyMessage() ? '#DCF8C5' : 'white',
         marginRight:isMyMessage() ? 0 :60,
         marginLeft:isMyMessage() ? 60 :0,
        }
        ]}> 
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
         <Text style={styles.message}>{message.content}</Text>
         <Text style={styles.createdAt}>{moment(message.createdAt).format('h:mm a')}</Text>
         </View>
     </View>
    );
}

const styles =StyleSheet.create({
    container:{
        padding:10 
    },
    messageBox:{
        padding:10,
        borderRadius:8,
    },
    name:{
        color:Colors.light.tint,
        fontWeight:'bold',
        marginBottom:5,
    },
    message:{
        fontSize:15
    },
    createdAt:{
        alignSelf:'flex-end',
        fontSize:10,
        color:'grey',
    }

});

export default ChatMessage;