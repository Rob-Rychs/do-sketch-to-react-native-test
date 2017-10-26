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

import avatar from './4-Home_images/avatar.png'
import group_24 from './4-Home_images/group_24.png'
import down from './4-Home_images/down.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_22}>
              <View style={{flexDirection: 'row'}}>
                <Image source={avatar} style={styles.avatar} />
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_28} />
                    <Image source={group_24} style={styles.group_24} />
                  </View>
                </View>
                <Text style={styles._62}>62º</Text>
              </View>
            </View>
          </View>
          <Text style={styles.GoodMorning}>
            <Text>Good Morning</Text>{'\n'}
            <Text>!</Text>{'\n'}
          </Text>
          <View style={styles.date}>
            <View style={styles.oval}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.notification}>
                  <Text style={styles._8}>8</Text>
                </View>
                <Text style={styles._16}>16</Text>
                <Text style={styles.TUE}>
                  <Text>TU</Text>{'\n'}
                  <Text>E</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.FEBRUARY2015}>FEBRUARY 2015</Text>
          <Image source={down} style={styles.down} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#50D2C2',
    paddingTop: 15,
    paddingBottom: 76
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  bounds_22: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_28: {
    height: 50,
    width: 50
  },
  group_24: {

  },
  _62: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 131
  },
  GoodMorning: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 180,
    marginTop: 152,
    textAlign: 'center'
  },
  date: {
    alignSelf: 'flex-start',
    marginLeft: 246,
    marginTop: 14,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  oval: {
    backgroundColor: '#50D2C2',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification: {
    width: 60,
    height: 61,
    alignItems: 'flex-start',
    marginLeft: 18,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  TUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  FEBRUARY2015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 302,
    marginTop: 402,
    textAlign: 'center'
  },
  down: {
    alignSelf: 'flex-start',
    marginLeft: 371,
    marginTop: 12
  }
})
