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

import group_72 from './11-Timeline_images/group_72.png'
import group from './11-Timeline_images/group.png'
import avatar_59 from './11-Timeline_images/avatar_59.png'
import line from './11-Timeline_images/line.png'
import line_44 from './11-Timeline_images/line_44.png'
import line_36 from './11-Timeline_images/line_36.png'
import avatar_26 from './11-Timeline_images/avatar_26.png'
import avatar_22 from './11-Timeline_images/avatar_22.png'
import avatar from './11-Timeline_images/avatar.png'
import line_16 from './11-Timeline_images/line_16.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._11Timeline}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_76} />
                      <Image source={group_72} style={styles.group_72} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_69} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles.Timeline}>
                    <Text>Timelin</Text>{'\n'}
                    <Text>e</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.headerbg}>
                <Image source={avatar_59} style={styles.avatar_59} />
                <Text style={styles.February}>
                  <Text>Februar</Text>{'\n'}
                  <Text>y</Text>{'\n'}
                </Text>
                <Text style={styles._69EVENTS}>69 EVENTS</Text>
              </View>
            </View>
            <Image source={line} style={styles.line} />
            <View style={styles._1}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.PM445}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles._445}>4:45</Text>
                    <Text style={styles.PM_50}>PM</Text>
                  </View>
                </View>
                <Text style={styles.ReviseWireframes}>Revise Wireframes</Text>
              </View>
              <Text style={styles.CompanyWebsite}>Company Website</Text>
            </View>
            <Image source={line_44} style={styles.line_44} />
            <View style={styles._2}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.PM200}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles._200}>
                      <Text>2:0</Text>{'\n'}
                      <Text>0</Text>{'\n'}
                    </Text>
                    <Text style={styles.PM}>PM</Text>
                  </View>
                </View>
                <Text style={styles.FinishHomeScreen}>Finish Home Screen</Text>
              </View>
              <Text style={styles.HomeApp}>Home App</Text>
            </View>
            <Image source={line_36} style={styles.line_36} />
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.AM1100}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles._1100}>
                      <Text>11:0</Text>{'\n'}
                      <Text>0</Text>{'\n'}
                    </Text>
                    <Text style={styles.AM_33}>AM</Text>
                  </View>
                </View>
                <Text style={styles.DesignStandUp}>Design Stand Up</Text>
              </View>
              <Text style={styles.Hangouts}>Hangouts</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={avatar_26} style={styles.avatar_26} />
                <Image source={avatar_22} style={styles.avatar_22} />
                <Image source={avatar} style={styles.avatar} />
              </View>
            </View>
            <Image source={line_16} style={styles.line_16} />
            <View style={styles._4}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.AM830}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles._830}>
                      <Text>8:3</Text>{'\n'}
                      <Text>0</Text>{'\n'}
                    </Text>
                    <Text style={styles.AM}>AM</Text>
                  </View>
                </View>
                <View style={styles.MobileAppNewIcons}>
                  <Text style={styles.NewIcons}>New Icons</Text>
                  <Text style={styles.MobileApp}>Mobile App</Text>
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
  _11Timeline: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
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
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_76: {
    height: 50,
    width: 50
  },
  group_72: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_69: {
    height: 50,
    width: 50
  },
  group: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  header: {
    height: 413,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerbg: {
    backgroundColor: '#50D2C2'
  },
  avatar_59: {
    alignSelf: 'flex-end',
    marginRight: 338
  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 271,
    marginTop: 23,
    textAlign: 'center'
  },
  _69EVENTS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 330,
    marginTop: 8,
    textAlign: 'center'
  },
  line: {

  },
  _1: {
    height: 85
  },
  PM445: {
    width: 106,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _445: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  PM_50: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  ReviseWireframes: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  CompanyWebsite: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 64,
    marginTop: 8,
    textAlign: 'right'
  },
  line_44: {

  },
  _2: {
    height: 85
  },
  PM200: {
    width: 104,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _200: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  PM: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  FinishHomeScreen: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  HomeApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 166,
    marginTop: 10,
    textAlign: 'right'
  },
  line_36: {

  },
  _3: {
    height: 181
  },
  AM1100: {
    width: 129,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1100: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  AM_33: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  DesignStandUp: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 138,
    textAlign: 'right'
  },
  avatar_26: {

  },
  avatar_22: {

  },
  avatar: {

  },
  line_16: {

  },
  _4: {
    height: 85,
    alignItems: 'center',
    justifyContent: 'center'
  },
  AM830: {
    width: 105,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _830: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  AM: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  MobileAppNewIcons: {
    width: 149
  },
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginTop: 8,
    textAlign: 'left'
  }
})
