import moment from 'moment';
import React from 'react';
import {Text,View,StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import {ChatRoom } from '../types';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../navigation';

export type ChatListItemProps ={
    ChatRoom:ChatRoom,
}


const ChatListItem = (props:ChatListItemProps) =>{
    const {ChatRoom}=props;
    const user=ChatRoom.users[1];

    const navigation =useNavigation();

    const GoToChatRoomScreen =()=>{
       navigation.navigate('ChatRoom',
       {
           id:ChatRoom.id,
           name:user.name,
           image:user.imageUri,
    })
    };
    
    
    const isMonthAgo=()=>{
        const currentDate=moment().format('YYYY-MM-DD');
        const lastMessageDate=moment(ChatRoom.lastMessage.createdAt).format('YYYY-MM-DD');
        return moment(currentDate).diff( lastMessageDate,'month') >= 2;
    }
       return (
        <TouchableWithoutFeedback onPress={GoToChatRoomScreen}>
            <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri:user.imageUri}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={2} style={styles.lastMessage}>{ChatRoom.lastMessage.content}</Text>
                </View>
            </View>
            
             <Text style={styles.time}>
                { isMonthAgo() ? moment(ChatRoom.lastMessage.createdAt).format('DD-MM-YYYY') : moment(ChatRoom.lastMessage.createdAt).fromNow() }
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