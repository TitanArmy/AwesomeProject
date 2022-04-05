import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigations/StackNavigation';
import DrawerNavigation from './Navigations/DrawerNavigation';


const App = () => {
  return (
    <NavigationContainer>
        {/* <DrawerNavigation/> */}
        <StackNavigation/>
     
    </NavigationContainer>
  )
}

export default App