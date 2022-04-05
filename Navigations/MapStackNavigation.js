import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Map from '../Screens/Map'
import GeoloacationScreen from '../Screens/GeoloacationScreen'

const MapStack = createNativeStackNavigator();

const MapStackNavigation = () => {
  return (
    <MapStack.Navigator>

        <MapStack.Screen name='GeoloacationScreen' component={GeoloacationScreen}/>
        <MapStack.Screen name='Map' component={Map}/>
        

    </MapStack.Navigator>
  )
}

export default MapStackNavigation