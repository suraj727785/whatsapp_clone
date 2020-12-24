import React from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import ChatRoomData from '../dummy-data/Chats'
import ChatMessage from '../components/ChatMessage';
import { FlatList } from 'react-native-gesture-handler';
import BG from '../assets/images/BG.png';
import ChatInput from '../components/ChatInput';


const ChatRoomScreen = ()=>{
    return(
    <ImageBackground style={{width:'100%', height:'100%'}}source={BG}>
     <FlatList
     keyExtractor={Chats=>Chats.id}
     data={ChatRoomData.messages}
     renderItem={({item})=>{
         return <ChatMessage message={item}/>
    }}
     />
     </ImageBackground>
    );
}

const style=StyleSheet.create({
    
});

export default ChatRoomScreen;