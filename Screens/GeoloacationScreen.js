import { View, Text, Button } from 'react-native';
import React, { useEffect ,useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Map from './Map';

const lats =Map.lats;
const longs =Map.longs;



const GeoloacationScreen = ({navigation}) => {
  const LOCATE = () =>{
      Geolocation.getCurrentPosition(
      (position) => {
        setLats((position.coords.latitude).toFixed(2))
        setLongs((position.coords.longitude).toFixed(2))
      },
      (error) => {
      console.log(error.code, error.message);
      },
      { enableHighAccuracy:
      true, timeout:
      999999,maximumAge:
      99999 }
      );
  }
  const [lats,setLats] =useState (23.456778)
  const [longs,setLongs] = useState(84.54768)  
  // const [locate,setLocate] = useState(0);
  const [temp, setTemp] = useState(0);
  
  const FApi = async() => {
     await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${longs}&units=metric&appid=3a4429fa2cba4d77b86b9c24bf33391f`)
      .then(res => res.json()).then(data =>{
       setTemp(data.main.temp);
        
        })
      }
  
  return (


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',color:'black'}}>
     <View style={{color:'black',marginBottom:100}}>
      
      <Button 
        title='Locate ME on MAP'
        onPress={() => navigation.navigate('Map')}
      />
      </View>
      <Button 
        title='Get Location'
        onPress={LOCATE}
      />
      <Text style={{color:'black',marginBottom:100,marginTop:10}}> You are at Latitude:{lats} & longitude:{longs}</Text>
      <Button
        title='Fetch Weather'
        onPress={FApi}
      />
      <View>

      <Text style={{color:'black',marginBottom:100,marginTop:10}}>It's {temp}°C Today</Text>
                  
      </View>

  </View>
  )
}

export default GeoloacationScreen