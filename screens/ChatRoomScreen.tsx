import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import ChatMessage from '../components/ChatMessage';
import { FlatList } from 'react-native-gesture-handler';
import BG from '../assets/images/BG.png';
import ChatInput from '../components/ChatInput';
import { useRoute } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { messagesByChatRoom } from '../graphql/queries';


const ChatRoomScreen = ()=>{

    const [messages,setMessages]=useState([]);
    const [myId,setMyId]=useState(null);

    const route= useRoute();

    useEffect(()=>{
        const fetchMessages=async()=>{
            const messagesData=await API.graphql(
                graphqlOperation(
                    messagesByChatRoom,
                    {
                        chatRoomID:route.params.id,
                        sortDirection:"DESC",
                    }
                )
            )
            setMessages(messagesData.data.messagesByChatRoom.items);

        }
        
        fetchMessages();
    },[]);
    useEffect(()=>{
        const fetchMyId= async()=>{
           const userInfo = await Auth.currentAuthenticatedUser();
           setMyId(userInfo.attributes.sub);

        } 
        
        fetchMyId();   

    },[])

    return(
    <ImageBackground style={{width:'100%', height:'100%'}}source={BG}>
     <FlatList
     keyExtractor={messages=>messages.id}
     data={messages}
     renderItem={({item})=>{
         return <ChatMessage myId={myId} message={item}/>
    }}
    inverted
     />
     <ChatInput
     chatRoomID={route.params.id}
     />
     </ImageBackground>
    );
}

const style=StyleSheet.create({
    
});

export default ChatRoomScreen;