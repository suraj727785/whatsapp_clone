import { Ionicons,Fontisto} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
        style:{
        backgroundColor:Colors[colorScheme].tint,
        },
        indicatorStyle:{
          backgroundColor:Colors[colorScheme].background,
          height:4
        },
        labelStyle:{
          fontWeight:'bold',
        },
        showIcon:true,

        }}>
      <MainTab.Screen
        name="Camera"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18}/>,
          tabBarLabel:()=>null,
          
          
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
      />
      <MainTab.Screen
        name="Status"
        component={ChatScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={ChatScreen}
      />
    </MainTab.Navigator>
  );
}


