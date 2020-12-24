import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';


const NewMessageButton= ()=>{
  const navigation=useNavigation();

  const onPress=()=>{
     navigation.navigate('Contacts')
  }
  
    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name='android-messages' size={28} color='white'/>
          </TouchableOpacity>
        </View>
    
    );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:Colors.light.tint,
    width:50,
    height:50,
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    alignSelf:'flex-end',
    bottom:15,
    right:15,
  }

});

export default NewMessageButton;