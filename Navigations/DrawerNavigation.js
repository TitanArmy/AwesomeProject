import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';


import Products from '../Screens/Products';
import Notification from '../Screens/Notification'

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name="UserInfo" component={BottomNavigation}
        options={{
            headerShown:false,
          }}
           /> */}
        <Drawer.Screen name="Products" component={Products}/>
        <Drawer.Screen name="Notification" component={Notification}/>

    </Drawer.Navigator>
  )
}

export default DrawerNavigation