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

import group_84 from './5-Calendar_images/group_84.png'
import group from './5-Calendar_images/group.png'
import select from './5-Calendar_images/select.png'
import line_62 from './5-Calendar_images/line_62.png'
import line_51 from './5-Calendar_images/line_51.png'
import line_38 from './5-Calendar_images/line_38.png'
import line_26 from './5-Calendar_images/line_26.png'
import line from './5-Calendar_images/line.png'
import avatar_129 from './5-Calendar_images/avatar_129.png'
import group_141 from './5-Calendar_images/group_141.png'
import group_135 from './5-Calendar_images/group_135.png'
import line_127 from './5-Calendar_images/line_127.png'
import group_122 from './5-Calendar_images/group_122.png'
import group_115 from './5-Calendar_images/group_115.png'
import line_107 from './5-Calendar_images/line_107.png'
import avatar from './5-Calendar_images/avatar.png'
import group_102 from './5-Calendar_images/group_102.png'
import group_97 from './5-Calendar_images/group_97.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._5Calendar}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.navbar}>
                <View style={styles.bounds}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_88} />
                        <Image source={group_84} style={styles.group_84} />
                      </View>
                    </View>
                    <View style={styles.add}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_77} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                    <Text style={styles.February2015}>
                      <Text>February</Text>{'\n'}
                      <Text> 2015</Text>{'\n'}
                    </Text>
                    <Image source={select} style={styles.select} />
                  </View>
                </View>
              </View>
              <View style={styles.calendarmonth}>
                <View style={styles.bg}>
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
                  <Image source={line_62} style={styles.line_62} />
                  <View style={styles.dates_52}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._31}>31</Text>
                      <Text style={styles._1_60}>1</Text>
                      <Text style={styles._2_58}>2</Text>
                      <Text style={styles._3_57}>3</Text>
                      <Text style={styles._4_56}>4</Text>
                      <Text style={styles._5_54}>5</Text>
                      <Text style={styles._6_53}>6</Text>
                      <View style={styles.notification_59} />
                      <View style={styles.notification_55} />
                    </View>
                  </View>
                  <Image source={line_51} style={styles.line_51} />
                  <View style={styles.dates_39}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.selected}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles._9}>9</Text>
                          <View style={styles.notification_47} />
                        </View>
                      </View>
                      <Text style={styles._7}>7</Text>
                      <Text style={styles._8}>8</Text>
                      <Text style={styles._10}>10</Text>
                      <Text style={styles._11}>11</Text>
                      <Text style={styles._12}>12</Text>
                      <Text style={styles._13}>13</Text>
                      <View style={styles.notification_44} />
                      <View style={styles.notification_41} />
                    </View>
                  </View>
                  <Image source={line_38} style={styles.line_38} />
                  <View style={styles.dates_27}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._14}>14</Text>
                      <Text style={styles._15}>15</Text>
                      <Text style={styles._16}>16</Text>
                      <Text style={styles._17}>17</Text>
                      <Text style={styles._18}>18</Text>
                      <Text style={styles._19}>19</Text>
                      <Text style={styles._20}>20</Text>
                      <View style={styles.notification_35} />
                      <View style={styles.notification_30} />
                      <View style={styles.notification_32} />
                    </View>
                  </View>
                  <Image source={line_26} style={styles.line_26} />
                  <View style={styles.dates_16}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._21}>21</Text>
                      <Text style={styles._22}>22</Text>
                      <Text style={styles._23}>23</Text>
                      <Text style={styles._24}>24</Text>
                      <Text style={styles._25}>25</Text>
                      <Text style={styles._26}>26</Text>
                      <Text style={styles._27}>27</Text>
                      <View style={styles.notification_22} />
                      <View style={styles.notification} />
                    </View>
                  </View>
                  <Image source={line} style={styles.line} />
                  <View style={styles.dates}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._28}>28</Text>
                      <Text style={styles._1}>1</Text>
                      <Text style={styles._2}>2</Text>
                      <Text style={styles._3}>3</Text>
                      <Text style={styles._4}>4</Text>
                      <Text style={styles._5}>5</Text>
                      <Text style={styles._6}>6</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1_128}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_129} style={styles.avatar_129} />
              <Text style={styles.MeetingwithJanet}>
                <Text>Meeting with </Text>{'\n'}
                <Text>Janet</Text>{'\n'}
              </Text>
              <View style={styles.time_140}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_144} />
                  <Image source={group_141} style={styles.group_141} />
                </View>
              </View>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_138} />
                  <Image source={group_135} style={styles.group_135} />
                </View>
              </View>
              <Text style={styles._810am}>8 – 10am</Text>
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Image source={line_127} style={styles.line_127} />
          <View style={styles._2_108}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar_109} />
              <Text style={styles.CatchupwithBrian}>
                <Text>Catch up with </Text>{'\n'}
                <Text>Brian</Text>{'\n'}
              </Text>
              <View style={styles.time_121}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_125} />
                  <Image source={group_122} style={styles.group_122} />
                </View>
              </View>
              <View style={styles.details}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_119} />
                  <Image source={group_115} style={styles.group_115} />
                </View>
              </View>
              <Text style={styles._1112pm}>11 – 12pm</Text>
              <Text style={styles.MobileProject}>Mobile Project</Text>
            </View>
          </View>
          <Image source={line_107} style={styles.line_107} />
          <View style={styles._3_89}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>
                <Text>Lunch with </Text>{'\n'}
                <Text>Diane</Text>{'\n'}
              </Text>
              <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_105} />
                  <Image source={group_102} style={styles.group_102} />
                </View>
              </View>
              <View style={styles.location2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_100} />
                  <Image source={group_97} style={styles.group_97} />
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
  _5Calendar: {

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
  bounds_88: {
    height: 50,
    width: 50
  },
  group_84: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_77: {
    height: 50,
    width: 50
  },
  group: {

  },
  February2015: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  select: {

  },
  calendarmonth: {
    height: 615,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 615,
    backgroundColor: '#50D2C2',
    paddingTop: 49,
    paddingBottom: 40
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
  line_62: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_52: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 31,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _1_60: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  _2_58: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 205
  },
  _3_57: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _4_56: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _5_54: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _6_53: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_59: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification_55: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  line_51: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_39: {
    alignSelf: 'center',
    marginTop: 1,
    height: 97,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 97,
    backgroundColor: '#FFFFFF',
    width: 97,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  notification_47: {
    height: 10,
    backgroundColor: '#50D2C2',
    borderRadius: 5,
    width: 10
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _8: {
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
    textAlign: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_44: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 10
  },
  notification_41: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 10
  },
  line_38: {
    alignSelf: 'center',
    marginTop: 1
  },
  dates_27: {
    alignSelf: 'center',
    marginTop: 31,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_35: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification_30: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification_32: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  line_26: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_16: {
    alignSelf: 'center',
    marginTop: 31,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  notification_22: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  line: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 31,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _1: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  _2: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 205
  },
  _3: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _1_128: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 661,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_129: {

  },
  MeetingwithJanet: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 9
  },
  time_140: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_144: {
    height: 50,
    width: 50
  },
  group_141: {

  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_138: {
    height: 49,
    width: 50
  },
  group_135: {

  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 239
  },
  line_127: {
    alignSelf: 'center',
    marginTop: 79
  },
  _2_108: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 51,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_109: {
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
    marginLeft: 9
  },
  time_121: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_125: {
    height: 50,
    width: 50
  },
  group_122: {

  },
  details: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_119: {
    height: 50,
    width: 50
  },
  group_115: {

  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  MobileProject: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 232
  },
  line_107: {
    alignSelf: 'center',
    marginTop: 78
  },
  _3_89: {
    alignSelf: 'center',
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
    marginLeft: 9
  },
  time: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_105: {
    height: 50,
    width: 50
  },
  group_102: {

  },
  location2: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_100: {
    height: 49,
    width: 50
  },
  group_97: {

  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 228
  }
})
