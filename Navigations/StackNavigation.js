import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Importing Screens
import OAuthLogin from '../Screens/OAuthLogin';
import UserInfo from '../Screens/UserInfo';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="OAuthLogin" component={OAuthLogin}/>
        <Stack.Screen name = "BottomNavigation" component={BottomNavigation}
          options={{
            headerShown:false,
          }}
        />
        {/* <Stack.Screen name = "UserInfo" component={UserInfo}/> */}
  </Stack.Navigator>
  )
}

export default StackNavigation