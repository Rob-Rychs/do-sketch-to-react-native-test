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

import avatar from './2-SignUp_images/avatar.png'
import line_26 from './2-SignUp_images/line_26.png'
import line_22 from './2-SignUp_images/line_22.png'
import line from './2-SignUp_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._2SignUp}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <Text style={styles.SignUp}>
                  <Text>Sign U</Text>{'\n'}
                  <Text>p</Text>{'\n'}
                </Text>
              </View>
              <Image source={avatar} style={styles.avatar} />
            </View>
          </View>
          <View style={styles.name}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.RyanWilson}>Ryan Wilson </Text>
            <Image source={line_26} style={styles.line_26} />
          </View>
          <View style={styles.email}>
            <Text style={styles.Email}>Email</Text>
            <Text style={styles.ryaninvisionappcom}>ryan@invisionapp.com</Text>
            <Image source={line_22} style={styles.line_22} />
          </View>
          <View style={styles.password}>
            <Text style={styles.Password}>Password</Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.done}>
            <View style={styles.bg2}>
              <Text style={styles.DONE}>DONE</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TERMSampCONDITIONS}>TERMS &amp; CONDITIONS</Text>
            <Text style={styles.SIGNIN}>SIGN IN</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _2SignUp: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    height: 758,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 308
  },
  SignUp: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  avatar: {

  },
  name: {
    alignSelf: 'center',
    height: 104
  },
  Name: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  RyanWilson: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 240,
    marginTop: 7,
    textAlign: 'center'
  },
  line_26: {
    alignSelf: 'center',
    marginTop: 26
  },
  email: {
    alignSelf: 'center',
    marginTop: 31,
    height: 104
  },
  Email: {
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
  line_22: {
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
  done: {
    alignSelf: 'center',
    marginTop: 90,
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
  DONE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  TERMSampCONDITIONS: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 74
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FF3366',
    textAlign: 'right',
    marginRight: 80
  }
})
