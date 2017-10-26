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
import line_24 from './1-Login_images/line_24.png'
import line from './1-Login_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._1Login}>
          <Image source={mark} style={styles.mark} />
          <View style={styles.username}>
            <Text style={styles.USERNAME}>
              <Text>USERNAM</Text>{'\n'}
              <Text>E</Text>{'\n'}
            </Text>
            <Text style={styles.andreapierceinvisio}>andreapierce@invisionapp.com</Text>
            <Image source={line_24} style={styles.line_24} />
          </View>
          <View style={styles.password}>
            <Text style={styles.PASSWORD}>PASSWORD</Text>
            <Text style={styles.ForgotPassword}>Forgot Password</Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.signin_7}>
            <View style={styles.bg}>
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
  _1Login: {

  },
  mark: {
    alignSelf: 'flex-end',
    marginRight: 163
  },
  username: {
    alignSelf: 'center',
    marginTop: 269,
    height: 104
  },
  USERNAME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  andreapierceinvisio: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginTop: 18,
    textAlign: 'left'
  },
  line_24: {
    alignSelf: 'center',
    marginTop: 21
  },
  password: {
    alignSelf: 'center',
    marginTop: 41,
    height: 104
  },
  PASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  ForgotPassword: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 1,
    marginTop: 20,
    textAlign: 'right'
  },
  line: {
    alignSelf: 'center',
    marginTop: 21
  },
  signin_7: {
    alignSelf: 'center',
    marginTop: 91,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 110,
    backgroundColor: '#50D2C2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SignIn: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  signin: {
    alignSelf: 'center',
    marginTop: 60,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  DONTHAVEANACCOUN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  SIGNUP: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
