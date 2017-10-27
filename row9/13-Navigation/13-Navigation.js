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

import group from './13-Navigation_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.bg}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_28} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Home}>
                <Text>Hom</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
              <View style={styles.notification}>
                <Text style={styles._6}>6</Text>
              </View>
            </View>
            <Text style={styles.Calendar}>
              <Text>Calenda</Text>{'\n'}
              <Text>r</Text>{'\n'}
            </Text>
            <Text style={styles.Overview}>
              <Text>Overvie</Text>{'\n'}
              <Text>w</Text>{'\n'}
            </Text>
            <Text style={styles.Groups}>
              <Text>Group</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Text style={styles.Lists}>
              <Text>List</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Text style={styles.Profile}>
              <Text>Profil</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <Text style={styles.Timeline}>
              <Text>Timelin</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.settings}>
                <Text>SETTING</Text>{'\n'}
                <Text>S</Text>{'\n'}
              </Text>
              <Text style={styles.logout}>LOGOUT</Text>
            </View>
          </View>
          <View style={styles.home} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)'
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 128,
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_28: {
    height: 50,
    width: 50
  },
  group: {

  },
  Home: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 123
  },
  notification: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 19,
    justifyContent: 'center'
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Calendar: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    textAlign: 'left'
  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    marginTop: 47,
    textAlign: 'left'
  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    marginTop: 47,
    textAlign: 'left'
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    marginTop: 47,
    textAlign: 'left'
  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    marginTop: 47,
    textAlign: 'left'
  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 123,
    marginTop: 47,
    textAlign: 'left'
  },
  settings: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 123
  },
  logout: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 129
  },
  home: {
    backgroundColor: 'black',
    height: 903
  }
})
