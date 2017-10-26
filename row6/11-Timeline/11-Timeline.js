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

import group_150 from './11-Timeline_images/group_150.png'
import more from './11-Timeline_images/more.png'
import avatar_85 from './11-Timeline_images/avatar_85.png'
import group_92 from './11-Timeline_images/group_92.png'
import avatar_71 from './11-Timeline_images/avatar_71.png'
import group_78 from './11-Timeline_images/group_78.png'
import avatar_57 from './11-Timeline_images/avatar_57.png'
import group_64 from './11-Timeline_images/group_64.png'
import avatar_42 from './11-Timeline_images/avatar_42.png'
import avatar_34 from './11-Timeline_images/avatar_34.png'
import avatar_38 from './11-Timeline_images/avatar_38.png'
import group_50 from './11-Timeline_images/group_50.png'
import group_130 from './11-Timeline_images/group_130.png'
import group_124 from './11-Timeline_images/group_124.png'
import group_103 from './11-Timeline_images/group_103.png'
import avatar from './11-Timeline_images/avatar.png'
import group from './11-Timeline_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._11Timeline}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.bg}>
              <View style={styles.navbar}>
                <View style={styles.bounds_141}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_154} />
                        <Image source={group_150} style={styles.group_150} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                    <Text style={styles.Timeline}>Timeline</Text>
                  </View>
                </View>
              </View>
              <View style={styles.date_97}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.TUESDAY}>TUESDAY</Text>
                  <Text style={styles.MARCH172015}>MARCH 17, 2015</Text>
                </View>
              </View>
              <View style={styles._1}>
                <View style={styles.bg_84}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.completed_96} />
                    <Image source={avatar_85} style={styles.avatar_85} />
                    <View style={styles.time_91}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_95} />
                        <Image source={group_92} style={styles.group_92} />
                      </View>
                    </View>
                    <Text style={styles._7pm}>7pm</Text>
                    <Text style={styles.DinnerwithAndrea}>Dinner with Andrea</Text>
                  </View>
                </View>
              </View>
              <View style={styles._2_69}>
                <View style={styles.bg_70}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.completed_82} />
                    <Image source={avatar_71} style={styles.avatar_71} />
                    <View style={styles.time2}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_81} />
                        <Image source={group_78} style={styles.group_78} />
                      </View>
                    </View>
                    <Text style={styles._34pm}>3 – 4pm</Text>
                    <Text style={styles.CatchupwithDave}>Catch up with Dave</Text>
                  </View>
                </View>
              </View>
              <View style={styles._3}>
                <View style={styles.bg_56}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.snoozed} />
                    <Image source={avatar_57} style={styles.avatar_57} />
                    <View style={styles.time_63}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_67} />
                        <Image source={group_64} style={styles.group_64} />
                      </View>
                    </View>
                    <Text style={styles._910am_62}>11am</Text>
                    <Text style={styles.CallJames}>Call James</Text>
                  </View>
                </View>
              </View>
              <View style={styles._4}>
                <View style={styles.bg_33}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.overdue} />
                    <Image source={avatar_42} style={styles.avatar_42} />
                    <Image source={avatar_34} style={styles.avatar_34} />
                    <Image source={avatar_38} style={styles.avatar_38} />
                    <View style={styles.time_49}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_53} />
                        <Image source={group_50} style={styles.group_50} />
                      </View>
                    </View>
                    <Text style={styles._910am}>9 – 10am</Text>
                    <Text style={styles._2}>+2</Text>
                    <Text style={styles.WeeklyDesignMeetin}>Weekly Design Meeting</Text>
                  </View>
                </View>
              </View>
              <View style={styles.date}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.MONDAY}>MONDAY</Text>
                  <Text style={styles.MARCH182015}>MARCH 18, 2015</Text>
                </View>
              </View>
              <View style={styles.tabbar}>
                <View style={styles.bg_101}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.add}>
                      <View style={styles.group_118}>
                        <View style={styles.bounds_122} />
                      </View>
                    </View>
                    <View style={styles.calendar}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_139} />
                        <Image source={group_130} style={styles.group_130} />
                      </View>
                    </View>
                    <View style={styles.overview}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_128} />
                        <Image source={group_124} style={styles.group_124} />
                      </View>
                    </View>
                    <View style={styles.lists}>
                      <View style={styles.bounds_115} />
                    </View>
                    <View style={styles.timeline}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_107} />
                        <Image source={group_103} style={styles.group_103} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles._5}>
              <View style={styles.bg_16}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.completed} />
                  <Image source={avatar} style={styles.avatar} />
                  <View style={styles.time}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._6pm}>6pm</Text>
                  <Text style={styles.CallAndrea}>Call Andrea</Text>
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
  bg: {
    backgroundColor: '#1D1D26',
    height: 1375,
    paddingTop: 17,
    paddingBottom: 24
  },
  navbar: {
    alignSelf: 'flex-start',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_141: {
    height: 128,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_154: {
    height: 50,
    width: 50
  },
  group_150: {

  },
  more: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  date_97: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TUESDAY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  MARCH172015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 52,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_84: {
    height: 180,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  completed_96: {
    height: 180,
    backgroundColor: '#50D2C2',
    width: 3
  },
  avatar_85: {

  },
  time_91: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_95: {
    height: 50,
    width: 50
  },
  group_92: {

  },
  _7pm: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  DinnerwithAndrea: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  _2_69: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_70: {
    height: 180,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  completed_82: {
    height: 180,
    backgroundColor: '#50D2C2',
    width: 3
  },
  avatar_71: {

  },
  time2: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_81: {
    height: 50,
    width: 50
  },
  group_78: {

  },
  _34pm: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  CatchupwithDave: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_56: {
    height: 180,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  snoozed: {
    height: 180,
    backgroundColor: '#FCAB53',
    width: 3
  },
  avatar_57: {

  },
  time_63: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  group_64: {

  },
  _910am_62: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  CallJames: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_33: {
    height: 180,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overdue: {
    height: 180,
    backgroundColor: '#FF3366',
    width: 3
  },
  avatar_42: {

  },
  avatar_34: {

  },
  avatar_38: {

  },
  time_49: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_53: {
    height: 50,
    width: 50
  },
  group_50: {

  },
  _910am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  _2: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 241
  },
  WeeklyDesignMeetin: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  date: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MONDAY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  MARCH182015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  tabbar: {
    alignSelf: 'flex-start',
    marginTop: 74,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_101: {
    height: 120,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_118: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_122: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_139: {
    height: 50,
    width: 50
  },
  group_130: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_128: {
    height: 50,
    width: 50
  },
  group_124: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_115: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_107: {
    height: 49,
    width: 50
  },
  group_103: {

  },
  _5: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_16: {
    height: 180,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  completed: {
    height: 180,
    backgroundColor: '#50D2C2',
    width: 3
  },
  avatar: {

  },
  time: {
    width: 50,
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
  _6pm: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  CallAndrea: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  }
})
