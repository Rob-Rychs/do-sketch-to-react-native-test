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

import bgoverlay from './13-Navigation_images/bgoverlay.png'
import group_93 from './13-Navigation_images/group_93.png'
import lines from './13-Navigation_images/lines.png'
import group_83 from './13-Navigation_images/group_83.png'
import group_71 from './13-Navigation_images/group_71.png'
import group_67 from './13-Navigation_images/group_67.png'
import group_58 from './13-Navigation_images/group_58.png'
import group_38 from './13-Navigation_images/group_38.png'
import group_29 from './13-Navigation_images/group_29.png'
import group_17 from './13-Navigation_images/group_17.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={styles.navbar}>
            <View style={styles.bounds_90}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_96} />
                    <Image source={group_93} style={styles.group_93} />
                  </View>
                </View>
                <Text style={styles.NAVIGATE}>NAVIGATE</Text>
              </View>
            </View>
          </View>
          <Image source={lines} style={styles.lines} />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.home}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={styles.bounds_87} />
                    <Image source={group_83} style={styles.group_83} />
                  </View>
                </View>
                <Text style={styles.Home}>Home</Text>
              </View>
              <View style={styles.calendar}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={styles.bounds_80} />
                    <Image source={group_71} style={styles.group_71} />
                  </View>
                </View>
                <Text style={styles.Calendar}>Calendar</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.group_63}>
                <View style={styles.groups}>
                  <View style={styles.bounds_66}>
                    <Image source={group_67} style={styles.group_67} />
                  </View>
                </View>
                <Text style={styles.Groups}>Groups</Text>
              </View>
              <View style={styles.overview}>
                <View style={styles.group_55}>
                  <View style={styles.overview_57}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_62} />
                      <Image source={group_58} style={styles.group_58} />
                    </View>
                  </View>
                  <Text style={styles.Overview}>Overview</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.lists}>
                <View style={styles.group_44}>
                  <View style={styles.lists_46}>
                    <View style={styles.bounds_53} />
                  </View>
                  <Text style={styles.Lists}>Lists</Text>
                </View>
              </View>
              <View style={styles.profile}>
                <View style={styles.group_35}>
                  <View style={styles.profile_37}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_42} />
                      <Image source={group_38} style={styles.group_38} />
                    </View>
                  </View>
                  <Text style={styles.Profile}>Profile</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.timeline}>
                <View style={styles.group_26}>
                  <View style={styles.timeline_28}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_33} />
                      <Image source={group_29} style={styles.group_29} />
                    </View>
                  </View>
                  <Text style={styles.Timeline_27}>Timeline</Text>
                </View>
              </View>
              <View style={styles.settings}>
                <View style={styles.group}>
                  <View style={styles.settings_16}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds} />
                      <Image source={group_17} style={styles.group_17} />
                    </View>
                  </View>
                  <Text style={styles.Timeline}>Settings</Text>
                </View>
              </View>
            </View>
          </Image>
          <View style={styles.logout}>
            <Text style={styles.LOGOUT}>LOGOUT</Text>
          </View>
        </Image>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {
    paddingBottom: 41
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_90: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_96: {
    height: 50,
    width: 50
  },
  group_93: {

  },
  NAVIGATE: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  lines: {
    alignSelf: 'center',
    marginTop: 887
  },
  home: {
    width: 75,
    height: 117
  },
  bounds_87: {
    height: 50,
    width: 50
  },
  group_83: {

  },
  Home: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  calendar: {
    width: 113,
    height: 117
  },
  bounds_80: {
    height: 50,
    width: 50
  },
  group_71: {

  },
  Calendar: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  group_63: {
    width: 94,
    height: 118
  },
  groups: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_67: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30
  },
  overview: {
    width: 117,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_55: {
    width: 117
  },
  overview_57: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 50,
    width: 50
  },
  group_58: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30
  },
  lists: {
    width: 54,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_44: {
    width: 54
  },
  lists_46: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_53: {
    height: 50,
    width: 50
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30
  },
  profile: {
    width: 79,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_35: {
    width: 79
  },
  profile_37: {
    alignSelf: 'center',
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_42: {
    height: 49,
    width: 50
  },
  group_38: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 31
  },
  timeline: {
    width: 106,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_26: {
    width: 106
  },
  timeline_28: {
    alignSelf: 'center',
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_33: {
    height: 49,
    width: 50
  },
  group_29: {

  },
  Timeline_27: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 31
  },
  settings: {
    width: 101,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: 101
  },
  settings_16: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group_17: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30
  },
  logout: {
    alignSelf: 'center',
    marginTop: 131,
    width: 103,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LOGOUT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF'
  }
})
