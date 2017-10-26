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
import line from './1-Login_images/line.png'
import group from './1-Login_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#B574F5'}}>
        <View style={styles.bg}>
          <Image source={mark} style={styles.mark} />
          <View style={styles.signin}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.bg_15}>
                <View style={styles.username}>
                  <Text style={styles.Username}>Username</Text>
                </View>
                <Image source={line} style={styles.line} />
                <View style={styles.password}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_29} />
                    <Image source={group} style={styles.group} />
                    <Text style={styles.Password}>Password</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bg_16}>
                <Text style={styles.SignIn}>Sign In</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.CreateAccount}>
              <Text>Create Accoun</Text>{'\n'}
              <Text>t</Text>{'\n'}
            </Text>
            <Text style={styles.ForgotPassword}>
              <Text>Forgot Passwor</Text>{'\n'}
              <Text>d</Text>{'\n'}
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#B574F5'
  },
  mark: {
    alignSelf: 'flex-end',
    marginRight: 250
  },
  signin: {
    alignSelf: 'center',
    marginTop: 251,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_15: {
    height: 240,
    backgroundColor: '#FFFFFF'
  },
  username: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    width: 210,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 2
  },
  Username: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'center',
    marginTop: 35
  },
  password: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginTop: 36,
    width: 201,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_29: {
    height: 50,
    width: 50
  },
  group: {

  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  bg_16: {
    height: 110,
    backgroundColor: '#BA77FF',
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
  CreateAccount: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 77
  },
  ForgotPassword: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 76
  }
})
