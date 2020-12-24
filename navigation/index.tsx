import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors'
import {Octicons,MaterialCommunityIcons, MaterialIcons, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { Text,ColorSchemeName, View,StyleSheet,Image } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator screenOptions={{
       headerStyle:{
         backgroundColor: Colors.light.tint,
         shadowOpacity:0,
         elevation:0,
       },
       headerTintColor:Colors.light.background,
       headerTitleAlign:'left',
       headerTitleStyle:{
         fontWeight:'bold',
       }

        }}>
      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator}
      options={{
        title:'WhatsApp',
        headerRight:() => (
        <View style={{
          flexDirection:'row',
          width:60,
          justifyContent:'space-between',
          marginRight:10,
            }}>
        <Octicons name="search" size={22} color={'white'}/>
        <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
        </View>
        ),
      }} />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({route})=>({
        title: route.params.name,
        headerTitleStyle:{
          marginLeft:5,
          fontWeight:'100',
        },
        headerRight:()=>(
          <View style={{
            flexDirection:'row',
            width:120,
            justifyContent:'space-between',
            marginRight:10,
              }}>
            <FontAwesome5 name="video" size={22} color={'white'}/>
            <MaterialIcons name="call" size={22} color={'white'}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
          </View>
        ),
        headerLeft:()=>(
          <View
          style={{
            flexDirection:'row',
              }}>
          <Ionicons name="arrow-back" size={24} color={'white'} style={styles.backButton} />
          <Image source={{uri:route.params.image}} style={styles.avatar}/>
          </View>
        ),
      })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const styles=StyleSheet.create({
  avatar:{
    height:40,
    width:40,
    marginHorizontal:5,
    borderRadius: 30,
},
backButton:{
  marginTop:8
}
});