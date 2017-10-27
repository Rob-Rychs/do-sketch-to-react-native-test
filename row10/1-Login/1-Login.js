import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import mark from './1-Login_images/mark.png'
import line_22 from './1-Login_images/line_22.png'
import right_17 from './1-Login_images/right_17.png'
import line from './1-Login_images/line.png'
import right from './1-Login_images/right.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <Image source={mark} style={styles.mark} />
          <Text style={styles.WelcomePaul}>Welcome, Paul!</Text>
          <View style={styles.avatar} />
          <Image source={line_22} style={styles.line_22} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.SIGNIN}>SIGN IN</Text>
            <Image source={right_17} style={styles.right_17} />
          </View>
          <Image source={line} style={styles.line} />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.NEWACCOUNT}>NEW ACCOUNT</Text>
            <Image source={right} style={styles.right} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)'
  },
  mark: {
    alignSelf: 'flex-end',
    marginRight: 326
  },
  WelcomePaul: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 171,
    marginTop: 52,
    textAlign: 'center'
  },
  avatar: {
    alignSelf: 'flex-start',
    marginLeft: 190,
    marginTop: 198,
    width: 353,
    height: 250
  },
  line_22: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 234
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  right_17: {

  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 11
  },
  NEWACCOUNT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  right: {

  }
})
