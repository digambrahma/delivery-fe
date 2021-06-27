import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import footerStyles from '../styles/footer.styles'

export default function Header() {
    const [home, setHome] = useState(false)
    const [profile, setProfile] = useState(false)
    const [revenue, setRevenue] = useState(false)

    return (
        <View style={footerStyles.footer}>
            <Pressable style={footerStyles.footerItem} onPress={() => setHome(!home)}>
                <Feather style={[footerStyles.icon, home ? footerStyles.styleColor: '']} name="home" />
                <Text style={[footerStyles.footerText, home ? footerStyles.styleColor : '']}>Home</Text>
            </Pressable>

            <Pressable style={footerStyles.footerItem} onPress={() => setRevenue(!revenue)}>
                <Feather style={[footerStyles.icon, revenue ? footerStyles.styleColor : '']} name="dollar-sign" />
                <Text style={[footerStyles.footerText, revenue ? footerStyles.styleColor : '']}>Revenue</Text>
            </Pressable>

            <Pressable style={footerStyles.footerItem} onPress={() => setProfile(!profile)}>
                <Feather style={[footerStyles.icon, profile ? footerStyles.styleColor : '']} name="user" />
                <Text style={[footerStyles.footerText, profile ? footerStyles.styleColor : '']}>Profile</Text>
            </Pressable>
        </View>
    )
}
