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

import shape_33 from './13-Navigation_images/shape_33.png'
import avatar from './13-Navigation_images/avatar.png'
import group_17 from './13-Navigation_images/group_17.png'
import group from './13-Navigation_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.close}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.bounds_36} />
                <Image source={shape_33} style={styles.shape_33} />
              </View>
            </View>
            <Image source={avatar} style={styles.avatar} />
          </View>
          <Text style={styles.Home}>
            <Text>Hom</Text>{'\n'}
            <Text>e</Text>{'\n'}
          </Text>
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
            <View style={styles.settings}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.bounds_20} />
                  <Image source={group_17} style={styles.group_17} />
                </View>
              </View>
              <Text style={styles.Settings}>
                <Text>SETTING</Text>{'\n'}
                <Text>S</Text>{'\n'}
              </Text>
            </View>
            <View style={styles.logout}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.LogOut}>
                <Text>LOG OU</Text>{'\n'}
                <Text>T</Text>{'\n'}
              </Text>
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
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_36: {
    height: 50,
    width: 50
  },
  shape_33: {

  },
  avatar: {

  },
  Home: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Calendar: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 309,
    marginTop: 47,
    textAlign: 'center'
  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 47,
    textAlign: 'center'
  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 326,
    marginTop: 47,
    textAlign: 'center'
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 353,
    marginTop: 47,
    textAlign: 'center'
  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 335,
    marginTop: 47,
    textAlign: 'center'
  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 47,
    textAlign: 'center'
  },
  settings: {
    width: 117,
    height: 110
  },
  bounds_20: {
    height: 49,
    width: 50
  },
  group_17: {

  },
  Settings: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 31,
    textAlign: 'center'
  },
  logout: {
    width: 111,
    height: 110
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  LogOut: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  }
})
