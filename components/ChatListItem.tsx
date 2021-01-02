import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import {ChatRoom } from '../types';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify';

export type ChatListItemProps ={
    ChatRoom:ChatRoom,
}


const ChatListItem = (props:ChatListItemProps) =>{
    
    const {ChatRoom}=props;

   const [otherUser,setOtherUser]=useState(null);
   try{

    useEffect(() =>{
        const getOtherUser= async ()=>{
        const userInfo= await Auth.currentAuthenticatedUser();
        if(ChatRoom.chatRoom.chatRoomUsers.items[0].user.id===userInfo.attributes.sub){
            setOtherUser(ChatRoom.chatRoom.chatRoomUsers.items[1].user);
        }else{
            setOtherUser(ChatRoom.chatRoom.chatRoomUsers.items[0].user);
        }

        }
        getOtherUser();
    },[]);
   }catch(e){
       console.log(e);
   }
    const navigation =useNavigation();

    const GoToChatRoomScreen =()=>{
       navigation.navigate('ChatRoom',
       {
           id:ChatRoom.chatRoom.id,
           name:otherUser.name,
           image:otherUser.imageUri,
    })
    };
    
    const isMonthAgo=()=>{
        const currentDate=moment().format('YYYY-MM-DD');
        const lastMessageDate=moment(ChatRoom.chatRoom.lastMessage.updatedAt).format('YYYY-MM-DD');
        return moment(currentDate).diff( lastMessageDate,'month') >= 2;
    }
    
    const isMyLastMessage= async()=>{
        try{
            const userInfo= await Auth.currentAuthenticatedUser();
        return ChatRoom.chatRoom.lastMessage.user.id===userInfo.attributes.sub
        }catch(e){
            console.log(e);
        }
    }

    if(!otherUser){
        return null;
    }
    
       return (
        <TouchableWithoutFeedback onPress={GoToChatRoomScreen}>
            <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri:otherUser.imageUri}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{otherUser.name}</Text>
                    <Text numberOfLines={2} style={styles.lastMessage}>
                    {ChatRoom.chatRoom.lastMessage.content} 
                    </Text>
                </View>
            </View>
            
             <Text style={styles.time}>
                { isMonthAgo() ? moment(ChatRoom.chatRoom.lastMessage.updatedAt).format('DD-MM-YYYY') : moment(ChatRoom.chatRoom.lastMessage.updatedAt).fromNow() }
                </Text>
            </View>
        </TouchableWithoutFeedback>
        
       );

};

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
        borderBottomWidth:0.3, 
    },
    leftContainer:{
        flexDirection:'row',
    },
    midContainer:{
    justifyContent:'space-around',
    },
    username:{
        fontWeight:'bold',
        fontSize:16,
    },
    
    avatar:{
        height:60,
        width:60,
        marginHorizontal:15,
        borderRadius: 50,
    },
    lastMessage:{
        fontSize:16,
        color:'grey',
    },
    time:{
        fontSize:16,
        color:'grey',
    },
});

export default ChatListItem;