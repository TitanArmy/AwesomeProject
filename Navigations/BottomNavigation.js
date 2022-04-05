import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimp from 'react-native-vector-icons/SimpleLineIcons';

import Profile from '../Screens/Profile';
import UserInfo from '../Screens/UserInfo';
import Products from '../Screens/Products';
import ToDo from '../Screens/ToDo';
import Notification from '../Screens/Notification'

import MapStackNavigation from './MapStackNavigation';
import DrawerNavigation from './DrawerNavigation';
// import DrawerNavigation from './DrawerNavigation'

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    
    
    <Tab.Navigator >

        <Tab.Screen name="UserInfo" component={UserInfo}
          options={{
            tabBarLabel :'UserInfo',
            tabBarIcon:() => (
              <IconSimp name="social-google" size={20} color="#333" />
            ),
          }
          } 
        />
    
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel :'Profile',
            tabBarIcon:() => (
              <Icon name='user-o' size={20}  color='#000'/>
            ),
          }
          } 
         />

        <Tab.Screen name="Maps" component={MapStackNavigation} 
          options={{
            headerShown: false,
            tabBarIcon:() => (
              <IconSimp
                style={{
                  // tintColor: focus ? 'red' : 'greed'
                }}
                name="map" size={20}  color='#000' />
            ),
          }
          } 
        />

        <Tab.Screen name ='ToDo' component={ToDo}
          options={{
              tabBarLabel :'ToDo',
              tabBarIcon:() => (
                <IconM name={"sticker-check-outline"} size={15}  color='#000'/>   
              ),
          }
          }
        />

        <Tab.Screen name= 'DrawerNavigation' component={DrawerNavigation}
          options={{
            headerShown:false,
              tabBarLabel :'Products',
              tabBarIcon:() => (
                <Icon name={'dropbox'} size={18}  color='#000'/>   
              ),
          }
          }
        />

    </Tab.Navigator>
  )
}

export default BottomNavigation