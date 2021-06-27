import React, { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Switch,
  ScrollView
} from 'react-native';

import Header from './Header'
import Footer from './Footer'
import dummyData from '../data/Data'
import dummyHistoryData from '../data/historyData'
import homeStyles from '../styles/home.styles'

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [active, setActive] = useState(true)
  const [history, setHistory] = useState(false)

  return (
    <SafeAreaView style={homeStyles.container} >
      <Header />
      <View><Text style={homeStyles.smallText}>Let's deliver some stuffs!
        <Switch
          style={{ float: 'right' }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /></Text></View>

      <View style={{ ...homeStyles.viewStyle, marginTop: 30, marginBottom:15 }}>
        <Text style={[homeStyles.subheader, active ? homeStyles.activeClass : null]}
          onPress={() => {  setActive(true); setHistory(false)}}>Active</Text>
        <Text style={[homeStyles.subheader, history ? homeStyles.activeClass : null]}
          onPress={() => {  setActive(false); setHistory(true)}}>History</Text>
      </View>

      {/* ACTIVE DATA  */}
      {/* {console.log("ACTIVE : " + active)} */}
      { active && dummyData.length === 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: '1.8rem', textAlign: 'center' }}> 
          You don't have any active orders to deliver.</Text></View>: <></>}
      <ScrollView>
    
      { active && dummyData.length > 0 ? dummyData.map((data, index) => {
            return <View key={index} style={homeStyles.content}>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>DATE : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Date}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>PRICE : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>₹ {data.Price}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>ORDER : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Order}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>ADDRESS : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Address}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>FROM : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.From}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>STATUS : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Status}</Text></View>
              </View>
              <View>

              </View>

              <View style={homeStyles.btnContainer}>
                <Pressable style={{ ...homeStyles.button, backgroundColor: 'black' }}
                  onPress={() => alert('Clicked Call')} >
                  <Text style={{ ...homeStyles.text, color: 'white' }}>Call</Text>
                </Pressable>
                <Pressable style={homeStyles.button}
                  onPress={() => alert('Clicked Get Directions')}>
                  <Text style={homeStyles.text}>Get Directions</Text>
                </Pressable>
              </View>

            </View>
          }): <></>}
      </ScrollView>

      {/* HISTORY DATA  */}
      {/* {console.log("HISTORY : " + history)} */}
      {history && dummyHistoryData.length === 0 ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: '1.8rem', textAlign: 'center' }}> 
          You have not delivered anything yet.</Text></View> : <></> }
      <ScrollView >
      { history && dummyHistoryData.length > 0 ? dummyHistoryData.map((data, index) => {
            return <View key={index} style={homeStyles.content}>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>DATE : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Date}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>PRICE : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>₹ {data.Price}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>ORDER : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Order}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>ADDRESS : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Address}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>FROM : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.From}</Text></View>
              </View>
              <View style={homeStyles.dataStyle}>
                <View style={homeStyles.halfWidth}><Text style={homeStyles.contentText}>STATUS : </Text></View>
                <View style={homeStyles.sixtyWidth}><Text style={homeStyles.contentText}>{data.Status}</Text></View>
              </View>
              <View>

              </View>

              {/* BUTTON CONTAINER  */}
              <View style={homeStyles.btnContainer}>
                <Pressable style={{ ...homeStyles.button, backgroundColor: 'black' }}
                  onPress={() => alert('Clicked Call')} >
                  <Text style={{ ...homeStyles.text, color: 'white' }}>Delivered</Text>
                </Pressable>
                <Pressable style={homeStyles.button}
                  onPress={() => alert('Clicked Get Directions')}>
                  <Text style={homeStyles.text}>Get Directions</Text>
                </Pressable>
              </View>

            </View>
          }) : <></>}
      </ScrollView>

      {dummyData.length !== 0 && <View style={{ flex: 1 }}></View>}
    </SafeAreaView>
  );
}
