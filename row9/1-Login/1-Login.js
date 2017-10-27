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

import oval from './1-Login_images/oval.png'
import group from './1-Login_images/group.png'
import line_23 from './1-Login_images/line_23.png'
import line from './1-Login_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._1Login}>
          <View style={styles.headerbg}>
            <View style={styles.mark}>
              <Image source={oval} style={styles.oval}>
                <Image source={group} style={styles.group} />
              </Image>
            </View>
          </View>
          <View style={styles.username}>
            <Text style={styles.Username}>Username</Text>
            <Text style={styles.ryaninvisionappcom}>ryan@invisionapp.com</Text>
            <Image source={line_23} style={styles.line_23} />
          </View>
          <View style={styles.password}>
            <Text style={styles.Password}>Password</Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.signin}>
            <View style={styles.bg2}>
              <Text style={styles.SIGNIN}>SIGN IN</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.FORGOTPASSWORD}>FORGOT PASSWORD?</Text>
            <Text style={styles.SIGNUP}>SIGN UP</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _1Login: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    alignSelf: 'center',
    height: 683,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 78
  },
  mark: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval: {
    alignItems: 'flex-end',
    marginRight: 55,
    justifyContent: 'center'
  },
  group: {

  },
  username: {
    alignSelf: 'center',
    marginTop: 70,
    height: 104
  },
  Username: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  ryaninvisionappcom: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 7,
    textAlign: 'center'
  },
  line_23: {
    alignSelf: 'center',
    marginTop: 26
  },
  password: {
    alignSelf: 'center',
    marginTop: 31,
    height: 104
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  line: {
    alignSelf: 'center',
    marginTop: 71
  },
  signin: {
    alignSelf: 'center',
    marginTop: 157,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg2: {
    height: 110,
    backgroundColor: '#FF3366',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  FORGOTPASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 76
  },
  SIGNUP: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FF3366',
    textAlign: 'right',
    marginRight: 83
  }
})
