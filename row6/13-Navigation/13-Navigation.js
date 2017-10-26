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

import group_46 from './13-Navigation_images/group_46.png'
import group from './13-Navigation_images/group.png'
import avatar from './13-Navigation_images/avatar.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_49} />
                    <Image source={group_46} style={styles.group_46} />
                  </View>
                </View>
                <View style={styles.logout}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_44} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.home}>
              <View style={styles.bg_28}>
                <Text style={styles.HOME}>HOME</Text>
              </View>
            </View>
            <View style={styles.calendar}>
              <View style={styles.bg_25}>
                <Text style={styles.CALENDAR}>CALENDAR</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.overview}>
              <View style={styles.bg_22}>
                <Text style={styles.OVERVIEW}>OVERVIEW</Text>
              </View>
            </View>
            <View style={styles.groups}>
              <View style={styles.bg_19}>
                <Text style={styles.GROUPS}>GROUPS</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.lists}>
              <View style={styles.bg_35}>
                <Text style={styles.LISTS}>LISTS</Text>
              </View>
            </View>
            <View style={styles.profile}>
              <View style={styles.bg_16}>
                <Text style={styles.PROFILE}>PROFILE</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.timeline}>
              <View style={styles.bg_13}>
                <Text style={styles.TIMELINE}>TIMELINE</Text>
              </View>
            </View>
            <View style={styles.settings}>
              <View style={styles.bg_10}>
                <Text style={styles.SETTINGS}>SETTINGS</Text>
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
    backgroundColor: '#1D1D26'
  },
  navbar: {
    alignSelf: 'flex-start',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 50,
    width: 50
  },
  group_46: {

  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_44: {
    height: 50,
    width: 50
  },
  group: {

  },
  avatar: {
    alignSelf: 'flex-start',
    marginLeft: 302,
    marginTop: 38
  },
  home: {
    width: 313,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_28: {
    height: 200,
    width: 313,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  HOME: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  calendar: {
    width: 307,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_25: {
    height: 200,
    width: 307,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  CALENDAR: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  overview: {
    width: 313,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_22: {
    height: 200,
    width: 313,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  OVERVIEW: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  groups: {
    width: 307,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_19: {
    height: 200,
    width: 307,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  GROUPS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  lists: {
    width: 313,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_35: {
    height: 200,
    width: 313,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  LISTS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  profile: {
    width: 307,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_16: {
    height: 200,
    width: 307,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  PROFILE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  timeline: {
    width: 313,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_13: {
    height: 200,
    width: 313,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  TIMELINE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  settings: {
    width: 307,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_10: {
    height: 200,
    width: 307,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  SETTINGS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
