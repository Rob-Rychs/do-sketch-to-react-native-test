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

import group_79 from './13-Navigation_images/group_79.png'
import line_75 from './13-Navigation_images/line_75.png'
import group_65 from './13-Navigation_images/group_65.png'
import line_62 from './13-Navigation_images/line_62.png'
import group_57 from './13-Navigation_images/group_57.png'
import line_54 from './13-Navigation_images/line_54.png'
import group_52 from './13-Navigation_images/group_52.png'
import line_46 from './13-Navigation_images/line_46.png'
import line_35 from './13-Navigation_images/line_35.png'
import group_32 from './13-Navigation_images/group_32.png'
import line_29 from './13-Navigation_images/line_29.png'
import group_24 from './13-Navigation_images/group_24.png'
import line_21 from './13-Navigation_images/line_21.png'
import group_17 from './13-Navigation_images/group_17.png'
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
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.AdamLane}>
                <Text>Adam Lan</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
              <Text style={styles.adaminvisionappcom}>
                <Text>adam@invisionapp.co</Text>{'\n'}
                <Text>m</Text>{'\n'}
              </Text>
            </View>
          </View>
          <View style={styles.home_76}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_83} />
              <Image source={group_79} style={styles.group_79} />
              <Text style={styles.Home}>Home</Text>
              <Text style={styles._5}>5</Text>
            </View>
          </View>
          <Image source={line_75} style={styles.line_75} />
          <View style={styles.calendar}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_74} />
              <Image source={group_65} style={styles.group_65} />
              <Text style={styles.Calendar}>Calendar</Text>
            </View>
          </View>
          <Image source={line_62} style={styles.line_62} />
          <View style={styles.overview}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_61} />
              <Image source={group_57} style={styles.group_57} />
              <Text style={styles.Overview}>Overview</Text>
            </View>
          </View>
          <Image source={line_54} style={styles.line_54} />
          <View style={styles.groups}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_51}>
                <Image source={group_52} style={styles.group_52} />
              </View>
              <Text style={styles.Groups}>Groups</Text>
              <View style={styles._6}>
                <Text style={styles._16}>16</Text>
              </View>
            </View>
          </View>
          <Image source={line_46} style={styles.line_46} />
          <View style={styles.lists}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_45} />
              <Text style={styles.Lists}>Lists</Text>
              <View style={styles._18} />
            </View>
          </View>
          <Image source={line_35} style={styles.line_35} />
          <View style={styles.profile}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_34} />
              <Image source={group_32} style={styles.group_32} />
              <Text style={styles.Profile}>
                <Text>Profil</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_29} style={styles.line_29} />
          <View style={styles.timeline}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_28} />
              <Image source={group_24} style={styles.group_24} />
              <Text style={styles.Timeline_23}>
                <Text>Timelin</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_21} style={styles.line_21} />
          <View style={styles.settings}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_20} />
              <Image source={group_17} style={styles.group_17} />
              <Text style={styles.Timeline_16}>Settings</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.logout}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds} />
              <Image source={group} style={styles.group} />
              <Text style={styles.Timeline}>Logout</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFFFFF'
  },
  AdamLane: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26'
  },
  adaminvisionappcom: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 1
  },
  home_76: {
    alignSelf: 'flex-end',
    marginTop: 151,
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
  Home: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 100
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_75: {
    alignSelf: 'flex-end',
    marginTop: 31
  },
  calendar: {
    alignSelf: 'flex-start',
    marginTop: 31,
    width: 217,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_74: {
    height: 50,
    width: 50
  },
  group_65: {

  },
  Calendar: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_62: {
    alignSelf: 'flex-end',
    marginTop: 31
  },
  overview: {
    alignSelf: 'flex-start',
    marginTop: 31,
    width: 221,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_61: {
    height: 50,
    width: 50
  },
  group_57: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_54: {
    alignSelf: 'flex-end',
    marginTop: 31
  },
  groups: {
    alignSelf: 'flex-end',
    marginTop: 31,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_51: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_52: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 100
  },
  _6: {
    width: 30,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  line_46: {
    alignSelf: 'flex-end',
    marginTop: 31
  },
  lists: {
    alignSelf: 'flex-end',
    marginTop: 31,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_45: {
    height: 50,
    width: 50
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 100
  },
  _18: {
    width: 30,
    height: 37
  },
  line_35: {
    alignSelf: 'flex-end',
    marginTop: 32
  },
  profile: {
    alignSelf: 'flex-start',
    marginTop: 31,
    width: 182,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_34: {
    height: 49,
    width: 50
  },
  group_32: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_29: {
    alignSelf: 'flex-end',
    marginTop: 32
  },
  timeline: {
    alignSelf: 'flex-start',
    marginTop: 31,
    width: 210,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_28: {
    height: 49,
    width: 50
  },
  group_24: {

  },
  Timeline_23: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_21: {
    alignSelf: 'flex-end',
    marginTop: 32
  },
  settings: {
    alignSelf: 'flex-start',
    marginTop: 41,
    width: 205,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_20: {
    height: 49,
    width: 50
  },
  group_17: {

  },
  Timeline_16: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 32
  },
  logout: {
    alignSelf: 'flex-start',
    marginTop: 31,
    width: 192,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
