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

import bg_12 from './1-Login_images/bg_12.png'
import group from './1-Login_images/group.png'
import group_45 from './1-Login_images/group_45.png'
import line_41 from './1-Login_images/line_41.png'
import group_36 from './1-Login_images/group_36.png'
import line from './1-Login_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.mark}>
            <Image source={bg_12} style={styles.bg_12}>
              <Image source={group} style={styles.group} />
            </Image>
          </View>
          <View style={styles.name}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_49} />
              <Text style={styles.NAME}>NAME</Text>
              <Image source={group_45} style={styles.group_45} />
              <Text style={styles.Entername}>Enter name</Text>
            </View>
          </View>
          <Image source={line_41} style={styles.line_41} />
          <View style={styles.password}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds} />
              <Text style={styles.PASSWORD}>PASSWORD</Text>
              <Image source={group_36} style={styles.group_36} />
              <Text style={styles.Help}>Help</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.connect}>
            <View style={styles.bg_20}>
              <Text style={styles.SignIn}>Sign In</Text>
            </View>
          </View>
          <View style={styles.signin}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.DONTHAVEANACCOUN}>DON’T HAVE AN ACCOUNT?</Text>
              <Text style={styles.SIGNUP}>SIGN UP</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)',
    paddingTop: 266,
    paddingBottom: 90
  },
  mark: {
    alignSelf: 'flex-end',
    marginRight: 302,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_12: {
    alignItems: 'flex-end',
    marginRight: 77,
    justifyContent: 'center'
  },
  group: {

  },
  name: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 204,
    width: 244,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 50,
    width: 50
  },
  NAME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 79
  },
  group_45: {

  },
  Entername: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_41: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  password: {
    alignSelf: 'flex-end',
    marginRight: 128,
    marginTop: 41,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  PASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  group_36: {

  },
  Help: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  connect: {
    alignSelf: 'flex-end',
    marginRight: 138,
    marginTop: 82,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_20: {
    height: 108,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SignIn: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  signin: {
    alignSelf: 'flex-end',
    marginRight: 243,
    marginTop: 61,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  DONTHAVEANACCOUN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  SIGNUP: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  }
})
