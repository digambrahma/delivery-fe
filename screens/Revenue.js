import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Header from '../screens/Header'
import revenueStyles from '../styles/revenue.styles'

import Feather from 'react-native-vector-icons/Feather'
export default function App() {
  return (
    <SafeAreaView style={revenueStyles.container} >
      <Header />
      <View style={revenueStyles.viewStyle}>
        <Text style={revenueStyles.subheader}>My Earnings</Text>
        <Text style={revenueStyles.liElement}>💸 {'\u20B9'} 2000</Text>
        <Text style={revenueStyles.liElement}>🚚 Orders Delivered</Text>
        <Text style={revenueStyles.liElement}>📦 20</Text>
      </View>
      <View style={{ marginVertical: '1rem' }}>
        <Text style={{ fontSize: '1.2rem' }}>App Version 1.0</Text>
      </View>
    </SafeAreaView>
  );
}

