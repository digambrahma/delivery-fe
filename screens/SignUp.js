import React from 'react'
import {
  Text,
  View,
  Platform,
  TextInput,
  SafeAreaView,
  Button,
  Pressable
} from 'react-native';

var myBackground = require('./asset/landing.jpg')
export default function App() {
  console.log(myBackground)
  console.log(typeof myBackground)
  return (
    <SafeAreaView style={styles.container} >
          <Text style={styles.header}>Sign up</Text>
        <View style={styles.viewStyle}>
          <TextInput style={styles.input} placeholder={"First Name"}/>
          <TextInput style={styles.input} placeholder={"Last Name"} />
           <TextInput style={styles.input} placeholder={"Phone"}/>
          <TextInput style={styles.input} placeholder={"Email"}/>
          <TextInput style={styles.input} placeholder={"City"}/>
        </View>
         <Pressable style={styles.button} >
        <Text style={styles.text}>Register</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
    justifyContent: 'flexStart',
    alignItems: 'center'
  },
  header: {
    fontSize:50,
    fontWeight:'normal',
    marginVertical:30
  },
   input: {
    height: 40,
    marginVertical: 12,
    width:'100%',
    borderWidth: 1,
    borderRadius:10,
    padding:10,
    backgroundColor:'#EBEBEB',
    borderColor:'white'
  },
  viewStyle: {
    width:'75%'
  },
  button2: {
    marginTop:50,
    color:'red',
  },
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#05FFB0',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
}