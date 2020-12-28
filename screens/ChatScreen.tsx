import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import { Text, View } from '../components/Themed';
import chatRooms from '../dummy-data/ChatRooms';
import { getUser } from './queries';

export default function ChatScreen() {
  const [chatRooms,setChatRooms]=useState([]);



  useEffect(()=>{
    const fetchChatRooms= async()=>{
      try{
    const userInfo = await Auth.currentAuthenticatedUser();
     
    const userData = await API.graphql(graphqlOperation(
      getUser,{
        id:userInfo.attributes.sub,
      }
    ));
   // console.log(userData);
    setChatRooms(userData.data.getUser.chatRoomUser.items);


      }
      catch(e){
        console.log(e);
      }
    } 
  
    fetchChatRooms();

  },[])


  return (
    <View style={styles.container}>
     <FlatList
     style={{width:'100%'}}
      keyExtractor={chatRooms=>chatRooms.id}
      data={chatRooms}
      renderItem={({item})=>{
          return <ChatListItem ChatRoom={item} />
      }}/>
     <NewMessageButton />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
