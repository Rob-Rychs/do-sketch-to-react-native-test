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

import group_130 from './5-Calendar_images/group_130.png'
import left from './5-Calendar_images/left.png'
import right from './5-Calendar_images/right.png'
import line_67 from './5-Calendar_images/line_67.png'
import line_56 from './5-Calendar_images/line_56.png'
import line_44 from './5-Calendar_images/line_44.png'
import line_31 from './5-Calendar_images/line_31.png'
import line from './5-Calendar_images/line.png'
import line_112 from './5-Calendar_images/line_112.png'
import group_106 from './5-Calendar_images/group_106.png'
import line_101 from './5-Calendar_images/line_101.png'
import group_94 from './5-Calendar_images/group_94.png'
import line_89 from './5-Calendar_images/line_89.png'
import group from './5-Calendar_images/group.png'
import line_77 from './5-Calendar_images/line_77.png'
import line_116 from './5-Calendar_images/line_116.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_119}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_134} />
                    <Image source={group_130} style={styles.group_130} />
                  </View>
                </View>
                <Image source={left} style={styles.left} />
                <Image source={right} style={styles.right} />
                <Text style={styles.March2015}>March 2015</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.calendar}>
                <View style={styles.days}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.Sun}>Sun</Text>
                    <Text style={styles.Mon}>Mon</Text>
                    <Text style={styles.Tue}>Tue</Text>
                    <Text style={styles.Wed}>Wed</Text>
                    <Text style={styles.Thu}>Thu</Text>
                    <Text style={styles.Fri}>Fri</Text>
                    <Text style={styles.Sat}>Sat</Text>
                  </View>
                </View>
                <Image source={line_67} style={styles.line_67} />
                <View style={styles.dates_57}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles._1_66}>1</Text>
                    <Text style={styles._2_65}>2</Text>
                    <Text style={styles._3_63}>3</Text>
                    <Text style={styles._4_62}>4</Text>
                    <Text style={styles._5}>5</Text>
                    <Text style={styles._6}>6</Text>
                    <Text style={styles._7}>7</Text>
                    <View style={styles.notification_64} />
                    <View style={styles.notification_60} />
                  </View>
                </View>
                <Image source={line_56} style={styles.line_56} />
                <View style={styles.dates_45}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles._8}>8</Text>
                    <Text style={styles._9}>9</Text>
                    <Text style={styles._10}>10</Text>
                    <Text style={styles._11}>11</Text>
                    <Text style={styles._12}>12</Text>
                    <Text style={styles._13}>13</Text>
                    <Text style={styles._14}>14</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.notification_52} />
                    <View style={styles.notification_50} />
                    <View style={styles.notification_47} />
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Image source={line_44} style={styles.line_44} />
                    <Image source={line_31} style={styles.line_31} />
                    <View style={styles.dates_32}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.selected}>
                          <Text style={styles._18}>18</Text>
                          <View style={styles.notification_38} />
                        </View>
                        <Text style={styles._15}>15</Text>
                        <Text style={styles._16}>16</Text>
                        <Text style={styles._17}>17</Text>
                        <Text style={styles._19}>19</Text>
                        <Text style={styles._20}>20</Text>
                        <Text style={styles._21}>21</Text>
                        <View style={styles.notification_41} />
                        <View style={styles.notification_35} />
                      </View>
                    </View>
                  </View>
                </View>
                <Image source={line} style={styles.line} />
                <View style={styles.dates_21}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles._22}>22</Text>
                    <Text style={styles._23}>23</Text>
                    <Text style={styles._24}>24</Text>
                    <Text style={styles._25}>25</Text>
                    <Text style={styles._26}>26</Text>
                    <Text style={styles._27}>27</Text>
                    <Text style={styles._28}>28</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.notification_27} />
                    <View style={styles.notification} />
                  </View>
                </View>
              </View>
              <View style={styles.events}>
                <Image source={line_112} style={styles.line_112} />
                <View style={styles._1_102}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.birthday_105}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_110} />
                        <Image source={group_106} style={styles.group_106} />
                      </View>
                    </View>
                    <Text style={styles.BriansBirthday}>Brian’s Birthday</Text>
                    <Text style={styles.Allday}>All day</Text>
                  </View>
                </View>
                <Image source={line_101} style={styles.line_101} />
                <View style={styles._2_90}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.birthday_93}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_98} />
                        <Image source={group_94} style={styles.group_94} />
                      </View>
                    </View>
                    <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
                    <Text style={styles._9am}>9am</Text>
                  </View>
                  <Text style={styles.Restaurant}>Restaurant</Text>
                </View>
                <Image source={line_89} style={styles.line_89} />
                <View style={styles._3_78}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.birthday}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                    <Text style={styles.DesignMeeting}>Design Meeting</Text>
                    <Text style={styles._12pm}>1–2pm</Text>
                  </View>
                  <Text style={styles.Hangouts}>Hangouts</Text>
                </View>
                <Image source={line_77} style={styles.line_77} />
              </View>
              <View style={styles.dates}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._29}>29</Text>
                  <Text style={styles._30}>30</Text>
                  <Text style={styles._31}>31</Text>
                  <Text style={styles._1}>1</Text>
                  <Text style={styles._2}>2</Text>
                  <Text style={styles._3}>3</Text>
                  <Text style={styles._4}>4</Text>
                </View>
              </View>
              <View style={styles.add}>
                <View style={styles.bg_114}>
                  <View style={styles.group_115}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_117} />
                      <Image source={line_116} style={styles.line_116} />
                    </View>
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
  bg: {
    backgroundColor: 'url(#linearGradient-1)'
  },
  navbar: {
    alignSelf: 'flex-end',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_119: {
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
  bounds_134: {
    height: 50,
    width: 50
  },
  group_130: {

  },
  left: {

  },
  right: {

  },
  March2015: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  calendar: {
    height: 1080
  },
  days: {
    alignSelf: 'center',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Sun: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Mon: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 94
  },
  Tue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 196
  },
  Wed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Thu: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 194
  },
  Fri: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 103
  },
  Sat: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  line_67: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_57: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 31,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_66: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _2_65: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _3_63: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _4_62: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_64: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  notification_60: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  line_56: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_45: {
    alignSelf: 'center',
    marginTop: 72,
    height: 50
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 191
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_52: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  notification_50: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  notification_47: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  line_44: {

  },
  line_31: {

  },
  dates_32: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 100,
    backgroundColor: '#FFFFFF10',
    borderRadius: 50,
    width: 100,
    paddingTop: 32,
    paddingBottom: 17
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 29,
    textAlign: 'center'
  },
  notification_38: {
    height: 8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 2,
    width: 8
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_41: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  notification_35: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  line: {
    alignSelf: 'center',
    marginTop: 98
  },
  dates_21: {
    alignSelf: 'center',
    marginTop: 528,
    height: 52
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_27: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  notification: {
    height: 8,
    borderRadius: 4,
    width: 8
  },
  events: {
    height: 512
  },
  line_112: {
    alignSelf: 'center'
  },
  _1_102: {
    alignSelf: 'center',
    marginTop: 51,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  birthday_105: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_110: {
    height: 50,
    width: 50
  },
  group_106: {

  },
  BriansBirthday: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  Allday: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 41
  },
  line_101: {
    alignSelf: 'center',
    marginTop: 51
  },
  _2_90: {
    alignSelf: 'center',
    marginTop: 51,
    height: 88
  },
  birthday_93: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_98: {
    height: 50,
    width: 50
  },
  group_94: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  _9am: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 41
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 100,
    marginTop: 2,
    textAlign: 'left'
  },
  line_89: {
    alignSelf: 'center',
    marginTop: 79
  },
  _3_78: {
    alignSelf: 'center',
    marginTop: 51,
    height: 88
  },
  birthday: {
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
  DesignMeeting: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 102
  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 40
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 102,
    marginTop: 2,
    textAlign: 'left'
  },
  line_77: {
    alignSelf: 'center',
    marginTop: 79
  },
  dates: {
    height: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _29: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _1: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _2: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _3: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_114: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_115: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_117: {
    height: 50,
    width: 50
  },
  line_116: {

  }
})
