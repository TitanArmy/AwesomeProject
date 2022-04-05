import React, {useState,useEffect} from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import MapView, { Marker,Geojson,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


const Map = () => {

  const [lats,setLats] =useState (23.456778)
  const [longs,setLongs] = useState(84.54768)
  
  Geolocation.getCurrentPosition(
    (position) => {
    // console.log(position);
    setLats(position.coords.latitude)
    setLongs(position.coords.longitude)
    },
    (error) => {
    console.log(error.code, error.message);
    },
    { enableHighAccuracy:
    true, timeout:
    15000,maximumAge:
    10000 }
    );

  return(
   
    <View>

       <MapView
          style={{width:'100%',height:'100%'}}
          provider = {PROVIDER_GOOGLE}
          showsUserLocation = {true}
          mapType = 'standard'
          initialRegion ={{longitude:longs,
                           latitude:lats,
                           latitudeDelta: 0.0922,
                           longitudeDelta: 0.0929
                          }}
          >

          <MapView.Marker
            key= '1'
            coordinate={{latitude : lats , longitude : longs}}
            title={'THIS is ME'}
            description={'NOT a Desc'}
          />

          </MapView>
       


    </View>
  )  
}                                                                               

export default Map