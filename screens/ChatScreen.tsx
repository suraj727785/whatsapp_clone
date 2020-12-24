import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import { Text, View } from '../components/Themed';
import chatRooms from '../dummy-data/ChatRooms';

export default function ChatScreen() {
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
