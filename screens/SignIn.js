import React from 'react'
import {
  Text,
  View,
  Platform,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
  Linking,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
          <Text style={styles.header}>Sign in</Text>
        <View style={styles.viewStyle}>
          <TextInput style={styles.input} placeholder={"Please enter your mobile no."}/>
        </View>
         <Pressable style={styles.button} >
        <Text style={styles.text}>Send otp</Text>
      </Pressable>
      <Text style={styles.smallText}>Are you new here ? 
      Please <Text style={{color: '#05FFB0'}} onPress={() => Linking.openURL('http://google.com')}>signup</Text>
      </Text>
    </SafeAreaView>
  );
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:200
  },
  header: {
    fontSize:50,
    fontWeight:'normal',
    marginBottom:20
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
    marginVertical:20,
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
  smallText: {
    fontSize:16
  }
}