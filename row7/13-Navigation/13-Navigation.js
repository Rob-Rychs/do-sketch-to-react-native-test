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

import group_86 from './13-Navigation_images/group_86.png'
import more from './13-Navigation_images/more.png'
import group_69 from './13-Navigation_images/group_69.png'
import group_57 from './13-Navigation_images/group_57.png'
import group_53 from './13-Navigation_images/group_53.png'
import group_44 from './13-Navigation_images/group_44.png'
import group_24 from './13-Navigation_images/group_24.png'
import group_15 from './13-Navigation_images/group_15.png'
import group_7 from './13-Navigation_images/group_7.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._13Navigation}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.bg}>
              <View style={styles.navbar}>
                <View style={styles.bounds_78}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.close}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_89} />
                        <Image source={group_86} style={styles.group_86} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.home}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.bounds_73} />
                    <Image source={group_69} style={styles.group_69} />
                  </View>
                </View>
                <View style={styles.calendar}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.bounds_66} />
                    <Image source={group_57} style={styles.group_57} />
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.group_49}>
                  <View style={styles.groups}>
                    <View style={styles.bounds_52}>
                      <Image source={group_53} style={styles.group_53} />
                    </View>
                  </View>
                </View>
                <View style={styles.overview}>
                  <View style={styles.group_42}>
                    <View style={styles.overview_43}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_48} />
                        <Image source={group_44} style={styles.group_44} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.lists}>
                  <View style={styles.group_31}>
                    <View style={styles.lists_32}>
                      <View style={styles.bounds_39} />
                    </View>
                  </View>
                </View>
                <View style={styles.profile}>
                  <View style={styles.group_22}>
                    <View style={styles.profile_23}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_28} />
                        <Image source={group_24} style={styles.group_24} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.timeline}>
                  <View style={styles.group_13}>
                    <View style={styles.timeline_14}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_19} />
                        <Image source={group_15} style={styles.group_15} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.settings}>
                  <View style={styles.group}>
                    <View style={styles.settings_6}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={group_7} style={styles.group_7} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.logout}>
              <View style={styles.bg_75}>
                <Text style={styles.LOGOUT}>LOGOUT</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _13Navigation: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 1334,
    backgroundColor: '#00B9FF'
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_78: {
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
  bounds_89: {
    height: 50,
    width: 50
  },
  group_86: {

  },
  more: {

  },
  home: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  calendar: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  group_57: {

  },
  group_49: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  groups: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_52: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_53: {

  },
  overview: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_42: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overview_43: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_48: {
    height: 50,
    width: 50
  },
  group_44: {

  },
  lists: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_31: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lists_32: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_39: {
    height: 50,
    width: 50
  },
  profile: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_22: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile_23: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_28: {
    height: 49,
    width: 50
  },
  group_24: {

  },
  timeline: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_13: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeline_14: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_19: {
    height: 49,
    width: 50
  },
  group_15: {

  },
  settings: {
    width: 158,
    height: 158,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settings_6: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 49,
    width: 50
  },
  group_7: {

  },
  logout: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_75: {
    height: 120,
    backgroundColor: '#D667CD',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 41
  },
  LOGOUT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
