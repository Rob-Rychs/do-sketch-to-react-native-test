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

import group_110 from './10-Profile_images/group_110.png'
import group_105 from './10-Profile_images/group_105.png'
import avatar_98 from './10-Profile_images/avatar_98.png'
import left from './10-Profile_images/left.png'
import right from './10-Profile_images/right.png'
import group_84 from './10-Profile_images/group_84.png'
import group_77 from './10-Profile_images/group_77.png'
import group_70 from './10-Profile_images/group_70.png'
import avatar_48 from './10-Profile_images/avatar_48.png'
import group_60 from './10-Profile_images/group_60.png'
import group_54 from './10-Profile_images/group_54.png'
import line_46 from './10-Profile_images/line_46.png'
import group_40 from './10-Profile_images/group_40.png'
import group_33 from './10-Profile_images/group_33.png'
import line_25 from './10-Profile_images/line_25.png'
import avatar from './10-Profile_images/avatar.png'
import group_19 from './10-Profile_images/group_19.png'
import group from './10-Profile_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._10Profile}>
          <View style={styles.navbar}>
            <View style={styles.bounds_103}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_114} />
                    <Image source={group_110} style={styles.group_110} />
                  </View>
                </View>
                <View style={styles.edit}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_107} />
                    <Image source={group_105} style={styles.group_105} />
                  </View>
                </View>
                <Text style={styles.Profile}>Profile</Text>
              </View>
            </View>
          </View>
          <Image source={avatar_98} style={styles.avatar_98} />
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.March}>March</Text>
              <Image source={left} style={styles.left} />
              <Image source={right} style={styles.right} />
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={styles.bg}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.active}>
                  <View style={styles.completed_83}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_87} />
                      <Image source={group_84} style={styles.group_84} />
                    </View>
                  </View>
                  <Text style={styles._64}>
                    <Text>6</Text>{'\n'}
                    <Text>4</Text>{'\n'}
                  </Text>
                </View>
                <View style={styles.snoozed}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_80} />
                    <Image source={group_77} style={styles.group_77} />
                  </View>
                </View>
                <View style={styles.overdue}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_74} />
                    <Image source={group_70} style={styles.group_70} />
                  </View>
                </View>
                <Text style={styles._32}>32</Text>
                <Text style={styles._12}>12</Text>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_48} style={styles.avatar_48} />
              <Text style={styles.MeetingwithJanet}>
                <Text>Meeting with </Text>{'\n'}
                <Text>Janet</Text>{'\n'}
              </Text>
              <View style={styles.completed_65} />
              <View style={styles.time_59}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_63} />
                  <Image source={group_60} style={styles.group_60} />
                </View>
              </View>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_57} />
                  <Image source={group_54} style={styles.group_54} />
                </View>
              </View>
              <Text style={styles._810am}>8 – 10am</Text>
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Image source={line_46} style={styles.line_46} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar_27} />
              <Text style={styles.CatchupwithBrian}>
                <Text>Catch up with </Text>{'\n'}
                <Text>Brian</Text>{'\n'}
              </Text>
              <View style={styles.completed_45} />
              <View style={styles.time_39}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_43} />
                  <Image source={group_40} style={styles.group_40} />
                </View>
              </View>
              <View style={styles.details}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_37} />
                  <Image source={group_33} style={styles.group_33} />
                </View>
              </View>
              <Text style={styles._1112pm}>11 – 12pm</Text>
              <Text style={styles.MobileProject}>Mobile Project</Text>
            </View>
          </View>
          <Image source={line_25} style={styles.line_25} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>
                <Text>Lunch with </Text>{'\n'}
                <Text>Diane</Text>{'\n'}
              </Text>
              <View style={styles.completed} />
              <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_22} />
                  <Image source={group_19} style={styles.group_19} />
                </View>
              </View>
              <View style={styles.location2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles._12pm}>1 – 2pm</Text>
              <Text style={styles.Restaurant}>Restaurant</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _10Profile: {
    paddingBottom: 30
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_103: {
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
  bounds_114: {
    height: 50,
    width: 50
  },
  group_110: {

  },
  edit: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_107: {
    height: 50,
    width: 50
  },
  group_105: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  avatar_98: {
    alignSelf: 'flex-start',
    marginLeft: 246,
    marginTop: 27
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 30,
    height: 82,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  left: {

  },
  right: {

  },
  tabs: {
    alignSelf: 'center',
    marginTop: 31,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 200,
    backgroundColor: '#1D1D2603',
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    height: 200,
    backgroundColor: '#50D2C2',
    width: 250
  },
  completed_83: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_87: {
    height: 50,
    width: 50
  },
  group_84: {

  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  snoozed: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_80: {
    height: 50,
    width: 50
  },
  group_77: {

  },
  overdue: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_74: {
    height: 50,
    width: 50
  },
  group_70: {

  },
  _32: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 101
  },
  _1: {
    alignSelf: 'center',
    marginTop: 56,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_48: {

  },
  MeetingwithJanet: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  completed_65: {
    height: 20,
    backgroundColor: '#50D2C2',
    width: 20
  },
  time_59: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_63: {
    height: 50,
    width: 50
  },
  group_60: {

  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_57: {
    height: 49,
    width: 50
  },
  group_54: {

  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 245
  },
  line_46: {
    alignSelf: 'center',
    marginTop: 79
  },
  _2: {
    alignSelf: 'center',
    marginTop: 51,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_27: {
    backgroundColor: '#1D1D26',
    width: 64,
    height: 64
  },
  CatchupwithBrian: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  completed_45: {
    height: 20,
    backgroundColor: '#50D2C2',
    width: 20
  },
  time_39: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_43: {
    height: 50,
    width: 50
  },
  group_40: {

  },
  details: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_37: {
    height: 50,
    width: 50
  },
  group_33: {

  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  MobileProject: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 175
  },
  line_25: {
    alignSelf: 'center',
    marginTop: 78
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 51,
    marginTop: 41,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  completed: {
    height: 20,
    backgroundColor: '#50D2C2',
    width: 19
  },
  time: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_22: {
    height: 50,
    width: 50
  },
  group_19: {

  },
  location2: {
    width: 50,
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
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 251
  }
})
