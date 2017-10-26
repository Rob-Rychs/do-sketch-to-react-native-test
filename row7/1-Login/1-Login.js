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

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <Image source={mark} style={styles.mark} />
          <Text style={styles.Welcome}>Welcome!</Text>
          <Text style={styles.Startmanagingyour}>
            <Text>Start managing your tasks </Text>{'\n'}
            <Text>quickly and efficentl</Text>{'\n'}
            <Text>y</Text>{'\n'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.signin}>
                <View style={styles.bg_13}>
                  <Text style={styles.SIGNIN}>SIGN IN</Text>
                </View>
              </View>
              <View style={styles.signup}>
                <View style={styles.bg_10}>
                  <Text style={styles.SIGNUP}>SIGN UP</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#6563A4'
  },
  mark: {
    alignSelf: 'flex-end'
  },
  Welcome: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 327,
    textAlign: 'right'
  },
  Startmanagingyour: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 28,
    textAlign: 'right'
  },
  signin: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_13: {
    height: 120,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 41
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  signup: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_10: {
    height: 120,
    backgroundColor: '#D667CD',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 41
  },
  SIGNUP: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
