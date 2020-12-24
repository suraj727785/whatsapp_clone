import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactsListItem from '../components/ContactsListItem';
import { Text, View } from '../components/Themed';
import users from '../dummy-data/Users';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
     <FlatList
     style={{width:'100%'}}
      keyExtractor={users=>users.id}
      data={users}
      renderItem={({item})=>{
          return <ContactsListItem user={item} />
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
