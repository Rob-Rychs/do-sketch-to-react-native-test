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

import group_85 from './13-Navigation_images/group_85.png'
import group_79 from './13-Navigation_images/group_79.png'
import avatar from './13-Navigation_images/avatar.png'
import group_67 from './13-Navigation_images/group_67.png'
import line_63 from './13-Navigation_images/line_63.png'
import group_53 from './13-Navigation_images/group_53.png'
import line_50 from './13-Navigation_images/line_50.png'
import group_45 from './13-Navigation_images/group_45.png'
import line_42 from './13-Navigation_images/line_42.png'
import group_40 from './13-Navigation_images/group_40.png'
import line_35 from './13-Navigation_images/line_35.png'
import line_24 from './13-Navigation_images/line_24.png'
import group_21 from './13-Navigation_images/group_21.png'
import line_18 from './13-Navigation_images/line_18.png'
import group_13 from './13-Navigation_images/group_13.png'
import line from './13-Navigation_images/line.png'
import group from './13-Navigation_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_77}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_88} />
                    <Image source={group_85} style={styles.group_85} />
                  </View>
                </View>
                <View style={styles.logout}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_83} />
                    <Image source={group_79} style={styles.group_79} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.home}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_71} />
              <Image source={group_67} style={styles.group_67} />
              <Text style={styles.Home}>
                <Text>Hom</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
              <Text style={styles._3}>3</Text>
            </View>
          </View>
          <Image source={line_63} style={styles.line_63} />
          <View style={styles.calendar}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_62} />
              <Image source={group_53} style={styles.group_53} />
              <Text style={styles.Calendar}>
                <Text>Calenda</Text>{'\n'}
                <Text>r</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_50} style={styles.line_50} />
          <View style={styles.overview}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_49} />
              <Image source={group_45} style={styles.group_45} />
              <Text style={styles.Overview}>
                <Text>Overvie</Text>{'\n'}
                <Text>w</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_42} style={styles.line_42} />
          <View style={styles.groups}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_39}>
                <Image source={group_40} style={styles.group_40} />
              </View>
              <Text style={styles.Groups}>
                <Text>Group</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
              <View style={styles._6} />
            </View>
          </View>
          <Image source={line_35} style={styles.line_35} />
          <View style={styles.lists}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_34} />
              <Text style={styles.Lists}>
                <Text>List</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
              <View style={styles._18} />
            </View>
          </View>
          <Image source={line_24} style={styles.line_24} />
          <View style={styles.profile}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_23} />
              <Image source={group_21} style={styles.group_21} />
              <Text style={styles.Profile}>
                <Text>Profil</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_18} style={styles.line_18} />
          <View style={styles.timeline}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_17} />
              <Image source={group_13} style={styles.group_13} />
              <Text style={styles.Timeline_12}>
                <Text>Timelin</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.settings}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds} />
              <Image source={group} style={styles.group} />
              <Text style={styles.Timeline}>Settings</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    height: 1334,
    backgroundColor: '#BA77FF',
    paddingBottom: 100
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_77: {
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
  bounds_88: {
    height: 50,
    width: 50
  },
  group_85: {

  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_83: {
    height: 50,
    width: 50
  },
  group_79: {

  },
  avatar: {
    alignSelf: 'center',
    marginTop: 39
  },
  home: {
    alignSelf: 'center',
    marginTop: 81,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_71: {
    height: 50,
    width: 50
  },
  group_67: {

  },
  Home: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  _3: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_63: {
    alignSelf: 'center',
    marginTop: 31
  },
  calendar: {
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 31,
    width: 217,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 50,
    width: 50
  },
  group_53: {

  },
  Calendar: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_50: {
    alignSelf: 'center',
    marginTop: 31
  },
  overview: {
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 31,
    width: 221,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 50,
    width: 50
  },
  group_45: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_42: {
    alignSelf: 'center',
    marginTop: 31
  },
  groups: {
    alignSelf: 'center',
    marginTop: 31,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_39: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_40: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  _6: {
    width: 14,
    height: 37
  },
  line_35: {
    alignSelf: 'center',
    marginTop: 31
  },
  lists: {
    alignSelf: 'center',
    marginTop: 31,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_34: {
    height: 50,
    width: 50
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  _18: {
    width: 28,
    height: 37
  },
  line_24: {
    alignSelf: 'center',
    marginTop: 32
  },
  profile: {
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 31,
    width: 182,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_23: {
    height: 49,
    width: 50
  },
  group_21: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_18: {
    alignSelf: 'center',
    marginTop: 32
  },
  timeline: {
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 31,
    width: 210,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_17: {
    height: 49,
    width: 50
  },
  group_13: {

  },
  Timeline_12: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'center',
    marginTop: 32
  },
  settings: {
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 31,
    width: 205,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 49,
    width: 50
  },
  group: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  }
})
