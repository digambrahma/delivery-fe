import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import headerStyles from '../styles/header.styles'

export default function Header() {
    return (
        <View style={headerStyles.head}>
            <Text style={headerStyles.header}>Pilton Brahma</Text>
            <Text style={headerStyles.smallText}>pilton@test.com </Text>
        </View>
    )
}
