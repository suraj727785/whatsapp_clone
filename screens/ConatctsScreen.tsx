import { API, graphqlOperation } from 'aws-amplify';
import  React, { useEffect, useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactsListItem from '../components/ContactsListItem';
import { Text, View } from '../components/Themed';
import { listUsers } from '../graphql/queries';

export default function ContactsScreen() {
    
  const [users,setUsers]= useState([]);
  useEffect(()=>{
     
       const fetchUser= async()=>{
         try{
           const userData= await API.graphql(graphqlOperation(
             listUsers
           ));
           setUsers(userData.data.listUsers.items);

         }
         catch(e){
        console.log(e);
         }

       }

       fetchUser()

  },[]);
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
