import { StatusBar } from 'expo-status-bar';
import React , {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth,API,graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import {getUser} from './graphql/queries';
import {createUser} from './graphql/mutations';
try{
Amplify.configure(config);
}catch(e){
  console.log(e)
}

const randomImage=[
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
]


const App=()=> {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
    
        const getRandomImages=()=>{
          return randomImage[Math.floor(Math.random()* randomImage.length)];
        }

        // run this snippet only after first time app is mounted
        try{
        useEffect(()=>{
          const fetchUser= async () => {
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
        const userData= await API.graphql(
          graphqlOperation(getUser,{id: userInfo.attributes.sub})
        );
        
        if(userData.data.getUser){
          console.log("User is already registered in database");
          return;
        }
        const newUser={
          id:userInfo.attributes.sub,
          name:userInfo.username,
          imageUri:getRandomImages(),
          status:"Hey there I'm using whatsapp",
        }

       await API.graphql(graphqlOperation(
         createUser,
         {input:newUser}
       ))


        // If there is no user in DB with the id create new user

          }
          fetchUser();
        },[]);
      }catch(e){
        console.log(e);
      }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);