import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button,TextInput, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';

// //Goofgle Sign in packageive-google-signin/google-signin';
import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';



export default function OAuthLogin({navigation}) {
  

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: "80633772739-b0kgu4p941l4kg1i0emidofm7oric4s1.apps.googleusercontent.com", 
     
    });
  }, [])

    const GoogleSignUp = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signIn()
          .then(result => {
            Alert.alert(
              "Welcome",
              "You're Logged In Now",
              [
                { text: "Let's Start", onPress: () => navigation.replace('BottomNavigation') }
              ]
            );
            //  console.log('JSON data=====:',result)
              // setUserImg(result.user.photo)
           }
           );
        
          } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('User cancelled the login flow !');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('Google play services not available or outdated !');    
            // play services not available or outdated
          } else {
            console.log(error)
            alert(error)
          }
        }
      };
 
  
    
  
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Text style={styles.TextN}>Enter Name:</Text>
          <TextInput style={styles.input} placeholder="e.g Yash Dubey" />
  
          <Text style={styles.TextM}>Enter Mobile Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g 9918745589"
            keyboardType="numeric"
          />
  
          <Text style={styles.TextP}>Enter Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g Yash@123"
            keyboardType="visible-password"
          />
  
          <View style={styles.Btn}>
            <Button
              title="Sign IN"
              color="#00bfff"
              onPress={() =>
                Alert.alert('Welcome', 'You Have Successfully Logged in', [
                  {
                    text: 'Continue',
                    onPress: () => navigation.replace('BottomNavigation'),
                  },
                ])
              }
            />
         
          </View>
  
          <GoogleSigninButton
            style={{width: 190, height: 50}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={GoogleSignUp}
          />
  
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundcolor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextN: {
      marginRight: 220,
      color: '#000',
    },
    TextM: {
      marginRight: 165,         
      marginTop: 10,
      color: '#000',
    },
    TextP: {
      marginRight: 200,
      marginTop: 10,
      color: '#000',
    },
    input: {
      borderWidth: 1,
      borderColor: '#00bfff',
      padding: 8,
      margin: 10,
      width: 300,
    },
    Btn: {
      width: 190,
      height: 50,
      marginBottom: 0,
      marginTop: 25,
      // elevation: 22,
      // borderRadius: 100,
    },
  });
  
  
  
  
  
  





































// import React, { useState,useEffect } from 'react';
// import { StyleSheet, Text, View, Button, Image,TextInput, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';

// //Goofgle Sign in packageive-google-signin/google-signin';
// import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';



// export default function OAuthLogin({navigation}) {

//   useEffect(() => {
//     GoogleSignin.configure({
//       androidClientId: "80633772739-b0kgu4p941l4kg1i0emidofm7oric4s1.apps.googleusercontent.com", 
     
//     });
//   }, [])

  
// const GoogleSingUp = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     await GoogleSignin.signIn()
//     .then(result => {
//       Alert.alert(
//         "Welcome",
//         "You're Logged In Now",
//         [
//           { text: "Let's Start", onPress: () => navigation.replace('UserInfo') }
//         ]
//       );
//       //  console.log('JSON data=====:',result)
//         // setUserImg(result.user.photo)
//      }
//      );
  
//     } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//       alert('User cancelled the login flow !');
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       alert('Signin in progress');
//       // operation (f.e. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       alert('Google play services not available or outdated !');    
//       // play services not available or outdated
//     } else {
//       console.log(error)
//       alert(error)
//     }
//   }
// };

//   return(

//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//     <GoogleSigninButton
//               style={{width: 200, height: 50}}
//               size={GoogleSigninButton.Size.Wide}
//               color={GoogleSigninButton.Color.Dark}
//               onPress={GoogleSingUp}
//             />

//     </View>
// )}

