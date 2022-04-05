import { View, Text ,Button, Image} from 'react-native';
import React, { useState } from 'react';
import {launchCamera, launchImageLibrary }from 'react-native-image-picker'; 

const Profile = () => {

  const [imageUri, setimageUri] = useState('https://reactjs.org/logo-og.png');

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  const OpenGallery= async() => {
      try{
          await launchImageLibrary(options, (response) =>
          {
            console.log('Response=', response)
            const source =response.assets[0].uri;
            setimageUri(source);
          })
        
      }catch(err){
        console.warn(err);
      }
    
  }

  const OpenImg = async() => {
    try{
        await launchCamera(options, (response) =>
        {
          console.log('Response=', response);

          const source =response.assets[0].uri;
          setimageUri(source);
          // console.log(source)
        })
      
    }catch(err){
      console.warn(err);
    }
  
}

  return (
    <View>
    <Image
          source={{uri:imageUri}}
          style={{
            margin:50,
            justifyContent:'center',
            alignItems:'center',
            height:300,
            width:300,
            borderWidth:1,
            borderColor:'black',
            borderRadius:300
          }}
        />
    <View style={{justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
        <View style={{margin:20}}>
          <Button title='Open Camera' color="#2e8b57" onPress={OpenImg}/>
        </View>

        <View>
          <Button title='Open Gallery' color="#00bfff" onPress={OpenGallery}/>
        </View>

    </View>
    </View>
  )
}

export default Profile


// try {
//   const granted = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.CAMERA,
//     {
//       title: "Cool Photo App Camera Permission",
//       message:
//         "Cool Photo App needs access to your camera " +
//         "so you can take awesome pictures.",
//       buttonNeutral: "Ask Me Later",
//       buttonNegative: "Cancel",
//       buttonPositive: "OK"
//     }
//   );
//   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     console.log("You can use the camera");
//   } else {
//     console.log("Camera permission denied");
//   }
// } catch (err) {
//   console.warn(err);
// }


// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   } else {
//     const source = { uri: response.uri };

//     // You can also display the image using data:
//     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//   }
// });