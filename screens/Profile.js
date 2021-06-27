import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import Footer from '../screens/Footer'
import Header from '../screens/Header'
import profileStyles from '../styles/profile.styles'

import Feather from 'react-native-vector-icons/Feather'
export default function App() {
  return (
    <SafeAreaView style={profileStyles.container} >
      <Header/>
        <View style={profileStyles.viewStyle}>
          <Text style={profileStyles.subheader}>My Account</Text>
          <Text style={profileStyles.liElement}>
          <Feather style={{...profileStyles.icon, marginRight:10}} name="settings" />Settings</Text>
          <Text style={profileStyles.liElement}>
          <Feather style={{...profileStyles.icon, marginRight:10}} name="info" />About us</Text>
          <Text style={profileStyles.liElement}>
          <Feather style={{...profileStyles.icon, marginRight:10}} name="log-out" />Log out</Text>
        </View>
        <View style={{marginVertical:'1rem'}}>
          <Text style={{fontSize:'1.2rem'}}>App Version 1.0</Text>
        </View>
    </SafeAreaView>
  );
}
