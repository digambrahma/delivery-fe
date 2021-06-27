import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Revenue from '../screens/Revenue'
import Feather from 'react-native-vector-icons/Feather'
import tabsStyles from '../styles/tabs.styles'
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Revenue" component={Revenue}  />
      </Tab.Navigator>
    )
}

function MyTabBar({ state, descriptors, navigation }) {
    const [home, setHome] = useState(false)
    const [profile, setProfile] = useState(false)
    const [revenue, setRevenue] = useState(false)

  return (
     <View style={tabsStyles.footer}>
            <Pressable style={tabsStyles.footerItem} onPress={() => {navigation.navigate('Home');
             setHome(!home); setProfile(false); setRevenue(false)
             } }>
                <Feather style={[tabsStyles.icon, home ? tabsStyles.styleColor: '']} name="home" />
                <Text style={[tabsStyles.footerText, home ? tabsStyles.styleColor : '']}>Home</Text>
            </Pressable>

            <Pressable style={tabsStyles.footerItem} onPress={() => {navigation.navigate('Revenue'); 
            setRevenue(!revenue) ; setProfile(false); setHome(false)}}>
                <Feather style={[tabsStyles.icon, revenue ? tabsStyles.styleColor : '']} name="dollar-sign" />
                <Text style={[tabsStyles.footerText, revenue ? tabsStyles.styleColor : '']}>Revenue</Text>
            </Pressable>

            <Pressable style={tabsStyles.footerItem} onPress={() => {navigation.navigate('Profile');
             setProfile(!profile) ; setRevenue(false); setHome(false)}}>
                <Feather style={[tabsStyles.icon, profile ? tabsStyles.styleColor : '']} name="user" />
                <Text style={[tabsStyles.footerText, profile ? tabsStyles.styleColor : '']}>Profile</Text>
            </Pressable>
        </View>
  );
}


export default Tabs
