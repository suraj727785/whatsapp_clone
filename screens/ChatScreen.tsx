import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';
import { Text, View } from '../components/Themed';
import chatRooms from '../dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <FlatList
     style={{width:'100%'}}
      keyExtractor={chatRooms=>chatRooms.id}
      data={chatRooms}
      renderItem={({item})=>{
          return <ChatListItem ChatRoom={item} />
      }}/>
      
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
