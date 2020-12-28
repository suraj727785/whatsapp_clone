import React from 'react';
import {Text,View,StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import { User } from '../types';
import {useNavigation} from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createChatRoom, createChatRoomUser } from '../graphql/mutations';


export type ContactsListItemProps ={
    user:User,
}


const ContactsListItem = (props:ContactsListItemProps) =>{
    const {user}=props;

    const navigation =useNavigation();

     const GoToChatRoomScreen = async ()=>{

    //create a chatRoom
    try{
     const newChatRoomData= await API.graphql(graphqlOperation(
         createChatRoom,{ 
             input:{ }
        }
     ));

     if(!newChatRoomData){
         console.log("Failed to create new chat room");
         return;
     }
    
     const newChatRoom=newChatRoomData.data.createChatRoom;
    //add user to chatRoom
    await API.graphql(graphqlOperation(
        createChatRoomUser,{
            input:{
                userID:user.id,
                chatRoomID:newChatRoom.id
            }
        }
    ));


    //add authenicated user to chatRoom
    const userInfo=await Auth.currentAuthenticatedUser();
    await API.graphql(graphqlOperation(
        createChatRoomUser,{
            input:{
                userID:userInfo.attributes.sub,
                chatRoomID:newChatRoom.id
            }
        }
    ));



    navigation.navigate("ChatRoom",{
        id:newChatRoom.id,
        name:user.name,
        image:user.imageUri,

    })

   }catch(e){
        console.log(e);
   }



    };
    

       return (
        <TouchableWithoutFeedback onPress={GoToChatRoomScreen}>
            <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri:user.imageUri}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                </View>
            </View>
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
        height:50,
        width:50,
        marginHorizontal:15,
        borderRadius: 25,
    },
    status:{
        fontSize:14,
        color:'grey',
    },
});

export default ContactsListItem;