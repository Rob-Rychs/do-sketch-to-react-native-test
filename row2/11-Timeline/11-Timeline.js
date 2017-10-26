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

import group_75 from './11-Timeline_images/group_75.png'
import line from './11-Timeline_images/line.png'
import overdue from './11-Timeline_images/overdue.png'
import completed_51 from './11-Timeline_images/completed_51.png'
import avatar_41 from './11-Timeline_images/avatar_41.png'
import avatar_45 from './11-Timeline_images/avatar_45.png'
import avatar from './11-Timeline_images/avatar.png'
import snoozed from './11-Timeline_images/snoozed.png'
import completed from './11-Timeline_images/completed.png'
import line_60 from './11-Timeline_images/line_60.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._11Timeline}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.navbg} />
            <View style={styles.navbar}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.bounds_67}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_79} />
                        <Image source={group_75} style={styles.group_75} />
                      </View>
                    </View>
                    <Text style={styles.Timeline}>Timeline</Text>
                  </View>
                </View>
                <View style={styles.avatar_69}>
                  <View style={styles.notification} />
                </View>
              </View>
            </View>
            <View style={styles.bg}>
              <View style={styles.date}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._265}>9</Text>
                  <Text style={styles.Tuesday}>Tuesday</Text>
                  <Text style={styles.FEBRUARY2015}>FEBRUARY 2015</Text>
                </View>
              </View>
            </View>
            <Image source={line} style={styles.line} />
            <View style={styles._1}>
              <View style={{flexDirection: 'row'}}>
                <Image source={overdue} style={styles.overdue} />
                <Text style={styles._5pm}>5pm</Text>
                <Text style={styles.NewIcons}>New Icons</Text>
              </View>
              <Text style={styles.MobileApp}>Mobile App</Text>
            </View>
            <View style={styles._2}>
              <View style={{flexDirection: 'row'}}>
                <Image source={completed_51} style={styles.completed_51} />
                <Text style={styles._34pm}>3 – 4pm</Text>
                <Text style={styles.DesignStandUp}>Design Stand Up</Text>
              </View>
              <Text style={styles.Hangouts}>Hangouts</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.avatar_37}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={avatar_41} style={styles.avatar_41} />
                      <Image source={avatar_45} style={styles.avatar_45} />
                    </View>
                  </View>
                  <Image source={avatar} style={styles.avatar} />
                </View>
              </View>
            </View>
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.LunchBreak}>Lunch Break</Text>
                <Text style={styles._12pm}>12pm</Text>
                <Image source={snoozed} style={styles.snoozed} />
              </View>
            </View>
            <View style={styles._4}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={completed} style={styles.completed} />
                <Text style={styles._911am}>9 – 11am</Text>
                <Text style={styles.FinishHomeScreen}>Finish Home Screen</Text>
              </View>
              <Text style={styles.WebApp}>Web App</Text>
            </View>
            <View style={styles.filter}>
              <View style={styles.bg_58}>
                <View style={styles.group}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={line_60} style={styles.line_60} />
                  </View>
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
  navbg: {
    height: 128,
    backgroundColor: '#BA77FF'
  },
  navbar: {
    height: 151,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
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
  bounds_79: {
    height: 50,
    width: 50
  },
  group_75: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  avatar_69: {
    backgroundColor: '#1D1D26',
    width: 66,
    height: 99,
    alignItems: 'flex-end',
    marginRight: 5,
    justifyContent: 'flex-start',
    marginTop: 3
  },
  notification: {
    height: 12,
    backgroundColor: '#FF3366',
    borderRadius: 6,
    width: 12
  },
  bg: {
    backgroundColor: '#BA77FF',
    height: 410,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 52
  },
  date: {
    width: 218,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _265: {
    backgroundColor: 'transparent',
    fontSize: 140,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Tuesday: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: 'normal',
    color: '#FFFFFF'
  },
  FEBRUARY2015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  line: {

  },
  _1: {
    height: 85
  },
  overdue: {
    backgroundColor: '#FFFFFF'
  },
  _5pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 87
  },
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 8,
    textAlign: 'right'
  },
  _2: {
    height: 281
  },
  completed_51: {
    backgroundColor: '#FFFFFF'
  },
  _34pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
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
    alignSelf: 'flex-start',
    marginLeft: 76,
    textAlign: 'left'
  },
  avatar_37: {
    backgroundColor: '#D8D8D8',
    width: 274,
    height: 181,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_41: {

  },
  avatar_45: {

  },
  avatar: {

  },
  _3: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LunchBreak: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 86
  },
  snoozed: {
    backgroundColor: '#FFFFFF'
  },
  _4: {
    height: 85
  },
  completed: {
    backgroundColor: '#FFFFFF'
  },
  _911am: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 86
  },
  FinishHomeScreen: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  WebApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 181,
    marginTop: 8,
    textAlign: 'right'
  },
  filter: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_58: {
    backgroundColor: '#BA77FF',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  line_60: {

  }
})
