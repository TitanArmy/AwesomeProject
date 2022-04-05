import React, { useState,useEffect } from "react";
import {Text,View,FlatList,TouchableOpacity,TextInput,ActivityIndicator,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const Content=() =>{
    const[searchInput,setSearchInput]=useState('');
    const [feed,setFeed]=useState([]);

useEffect(()=> {
    fetch('http://aurora-django-app.herokuapp.com/feed?feed_count=0')
    .then((re)=>re.json())
    .then((re)=>{
        setFeed(re.response);
    })

},[]);


    return(
        <View style ={styles.mainview}>
            {/* <Text style={styles.Heading}>Colors Show</Text>
            <View>
            <TextInput value={searchInput} onChangeText={(val)=>setSearchInput(val)}placeholder={"Enter song title or artist name"} placeholderTextColor={"#000"}style={styles.TextInput}/>
            </View> */}
            <View style={styles.mainPostView}>
             {feed.length<1?
                <ActivityIndicator size={"large"} color={"#2FBBF0"} />
                :
                <FlatList
                data={feed}
                keyExtractor={(item,index)=>{return item.post_id.toFixed()}}
                renderItem={({item,index})=>(
                    <View style={styles.postView}>
                        <Image style={styles.coverPhoto} source={{uri:item.cover_poto}}/>

                        <View style={styles.postTitle}>
                            <View style={styles.imageView}>
                                <Image style={styles.artistPhoto} source={{uri:item.artist_photo}}/>
                                <View style={styles.titleView}>
                                <Text style={styles.artist_name}>{item.post_artist}</Text>
                                <Text style={styles.title}>{item.post_title}</Text>
                                </View>
                            </View>
                            <View>
                                <Icon name="options-vertical" color="#989898"/>
                            </View>
                        </View>
                        {/* {/ <Text>{item.post_id}</Text> /} */}



                    </View>
                )}
                />
             }

            </View > 
                                             

        </View>
    )
}


export default Content; 
const styles =StyleSheet.create({
    
    titleView:{
        marginLeft:15,
    },
    
    // TextInput:{
    //   height:39,
    //   width:'90%',
    //   backgroundColor:'#F0F0F0',
    //   borderRadius:20,
    //   paddingLeft:15,
      
    //   marginBottom:20,
    // },
    TextInputView:{
        display:'flex',
        alignItems:'center'
    },
    postTitle:{
       width:'90%',
       display:'flex',
       justifyContent: 'space-between',
       flexDirection:'row',
       alignItems:'center',
       margin:10,
    },
    mainPostView:{
        width:'100%',
        padding:0,
        marginBottom:1,
    },
    postView:{
        width:'100%',
        alignItems:'center',
       
        
        marginRight:10,


    },
    artistPhoto:{
        backgroundColor:'rgba(0,0,0,0.06)',
        width:50,
        height:50,
        borderRadius:50,

    },
    imageView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    coverPhoto:{
        width:'90%',
        height:200,
        backgroundColor:'rgba(0,0,0,0.06)',
        marginTop:5,
        marginBottom:10,
        borderRadius:10,
    },
    

})