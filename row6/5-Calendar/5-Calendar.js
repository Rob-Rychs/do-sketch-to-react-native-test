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

import group_171 from './5-Calendar_images/group_171.png'
import left from './5-Calendar_images/left.png'
import right from './5-Calendar_images/right.png'
import group_47 from './5-Calendar_images/group_47.png'
import avatar_40 from './5-Calendar_images/avatar_40.png'
import avatar_32 from './5-Calendar_images/avatar_32.png'
import avatar_36 from './5-Calendar_images/avatar_36.png'
import group from './5-Calendar_images/group.png'
import avatar from './5-Calendar_images/avatar.png'
import group_82 from './5-Calendar_images/group_82.png'
import group_76 from './5-Calendar_images/group_76.png'
import group_55 from './5-Calendar_images/group_55.png'
import _3 from './5-Calendar_images/_3.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.bg}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.headerbg}>
                  <View style={styles.navbar}>
                    <View style={styles.bounds_160}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.menu}>
                          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.bounds_175} />
                            <Image source={group_171} style={styles.group_171} />
                          </View>
                        </View>
                        <Image source={left} style={styles.left} />
                        <Image source={right} style={styles.right} />
                        <Text style={styles.March2015}>March 2015</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendarmonth}>
                  <View style={styles.days}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.SUN}>
                        <Text>SU</Text>{'\n'}
                        <Text>N</Text>{'\n'}
                      </Text>
                      <Text style={styles.MON}>
                        <Text>MO</Text>{'\n'}
                        <Text>N</Text>{'\n'}
                      </Text>
                      <Text style={styles.TUE}>
                        <Text>TU</Text>{'\n'}
                        <Text>E</Text>{'\n'}
                      </Text>
                      <Text style={styles.WED}>
                        <Text>WE</Text>{'\n'}
                        <Text>D</Text>{'\n'}
                      </Text>
                      <Text style={styles.THU}>
                        <Text>TH</Text>{'\n'}
                        <Text>U</Text>{'\n'}
                      </Text>
                      <Text style={styles.FRI}>
                        <Text>FR</Text>{'\n'}
                        <Text>I</Text>{'\n'}
                      </Text>
                      <Text style={styles.SAT}>
                        <Text>SA</Text>{'\n'}
                        <Text>T</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.dates_139}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_143}>
                        <Text style={styles._2_149}>2</Text>
                      </View>
                      <View style={styles.notification_142}>
                        <Text style={styles._3_148}>3</Text>
                      </View>
                      <View style={styles.notification_141}>
                        <Text style={styles._5}>5</Text>
                      </View>
                      <View style={styles.notification_140}>
                        <Text style={styles._6}>6</Text>
                      </View>
                      <Text style={styles._1_150}>1</Text>
                      <Text style={styles._4_147}>4</Text>
                      <Text style={styles._7}>7</Text>
                    </View>
                  </View>
                  <View style={styles.dates_127}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_131}>
                        <Text style={styles._8}>8</Text>
                      </View>
                      <View style={styles.notification_130}>
                        <Text style={styles._11}>11</Text>
                      </View>
                      <View style={styles.notification_129}>
                        <Text style={styles._13}>13</Text>
                      </View>
                      <View style={styles.notification_128}>
                        <Text style={styles._14}>14</Text>
                      </View>
                      <Text style={styles._9}>9</Text>
                      <Text style={styles._10}>10</Text>
                      <Text style={styles._12}>12</Text>
                    </View>
                  </View>
                  <View style={styles.dates_115}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_119}>
                        <Text style={styles._16}>16</Text>
                      </View>
                      <View style={styles.selcted}>
                        <Text style={styles._17}>17</Text>
                      </View>
                      <View style={styles.notification_117}>
                        <Text style={styles._18}>18</Text>
                      </View>
                      <View style={styles.notification_116}>
                        <Text style={styles._21}>21</Text>
                      </View>
                      <Text style={styles._15}>15</Text>
                      <Text style={styles._19}>19</Text>
                      <Text style={styles._20}>20</Text>
                    </View>
                  </View>
                  <View style={styles.dates_104}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_107}>
                        <Text style={styles._23}>23</Text>
                      </View>
                      <View style={styles.notification_106}>
                        <Text style={styles._26}>26</Text>
                      </View>
                      <View style={styles.notification_105}>
                        <Text style={styles._27}>27</Text>
                      </View>
                      <Text style={styles._22}>22</Text>
                      <Text style={styles._24}>24</Text>
                      <Text style={styles._25}>25</Text>
                      <Text style={styles._28}>28</Text>
                    </View>
                  </View>
                  <View style={styles.dates}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification}>
                        <Text style={styles._29}>29</Text>
                      </View>
                      <View style={styles.notification_96}>
                        <Text style={styles._31}>31</Text>
                      </View>
                      <Text style={styles._30}>30</Text>
                      <Text style={styles._1_100}>1</Text>
                      <Text style={styles._2_99}>2</Text>
                      <Text style={styles._3_98}>3</Text>
                      <Text style={styles._4}>4</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles._1}>
                <View style={styles.bg_30}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.category_51} />
                    <View style={styles.time_46}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_50} />
                        <Image source={group_47} style={styles.group_47} />
                      </View>
                    </View>
                    <Text style={styles._910am}>9 – 10am</Text>
                    <Text style={styles.WeeklyDesignMeetin}>
                      <Text>Weekly Design </Text>{'\n'}
                      <Text>Meeting</Text>{'\n'}
                    </Text>
                    <Image source={avatar_40} style={styles.avatar_40} />
                    <Image source={avatar_32} style={styles.avatar_32} />
                    <Image source={avatar_36} style={styles.avatar_36} />
                    <Text style={styles._2_31}>+2</Text>
                  </View>
                </View>
              </View>
              <View style={styles._2}>
                <View style={styles.bg_16}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.category_22} />
                    <View style={styles.time}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                    <Text style={styles._11am}>11am</Text>
                    <Text style={styles.CallJames}>Call James</Text>
                    <Image source={avatar} style={styles.avatar} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tabbar}>
              <View style={styles.bg_53}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.add}>
                    <View style={styles.group_70}>
                      <View style={styles.bounds_74} />
                    </View>
                  </View>
                  <View style={styles.calendar}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_91} />
                      <Image source={group_82} style={styles.group_82} />
                    </View>
                  </View>
                  <View style={styles.overview}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_80} />
                      <Image source={group_76} style={styles.group_76} />
                    </View>
                  </View>
                  <View style={styles.lists}>
                    <View style={styles.bounds_67} />
                  </View>
                  <View style={styles.timeline}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_59} />
                      <Image source={group_55} style={styles.group_55} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={_3} style={styles._3} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1D1D26'
  },
  headerbg: {
    height: 240,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_160: {
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
  bounds_175: {
    height: 50,
    width: 50
  },
  group_171: {

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
    textAlign: 'left',
    marginLeft: 115
  },
  calendarmonth: {
    height: 632
  },
  days: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SUN: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  MON: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 94
  },
  TUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 194
  },
  WED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  THU: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 190
  },
  FRI: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 100
  },
  SAT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  dates_139: {
    alignSelf: 'flex-start',
    marginLeft: 29,
    marginTop: 82,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_143: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 29,
    justifyContent: 'center'
  },
  _2_149: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_142: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 29,
    justifyContent: 'center'
  },
  _3_148: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_141: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 28,
    justifyContent: 'center'
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_140: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 28,
    justifyContent: 'center'
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _1_150: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _4_147: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  dates_127: {
    alignSelf: 'center',
    marginTop: 30,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_131: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 29,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_130: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_129: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_128: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 126
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 215
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 224
  },
  dates_115: {
    alignSelf: 'flex-end',
    marginTop: 30,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_119: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 22,
    justifyContent: 'center'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  selcted: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_117: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_116: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 224
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 127
  },
  dates_104: {
    alignSelf: 'flex-start',
    marginLeft: 22,
    marginTop: 30,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_107: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 22,
    justifyContent: 'center'
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_106: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_105: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 194
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  dates: {
    alignSelf: 'flex-start',
    marginLeft: 0,
    marginTop: 30,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 22,
    justifyContent: 'center'
  },
  _29: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_96: {
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 119
  },
  _1_100: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 291
  },
  _2_99: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 194
  },
  _3_98: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _1: {
    width: 325,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_30: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_51: {
    height: 325,
    backgroundColor: '#FF3366',
    width: 3
  },
  time_46: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_50: {
    height: 50,
    width: 50
  },
  group_47: {

  },
  _910am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  WeeklyDesignMeetin: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  avatar_40: {

  },
  avatar_32: {

  },
  avatar_36: {

  },
  _2_31: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 55
  },
  _2: {
    width: 325,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_16: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_22: {
    height: 325,
    backgroundColor: '#EE8F6E',
    width: 3
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
  _11am: {
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
  avatar: {

  },
  tabbar: {
    alignSelf: 'center',
    marginTop: 39,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_53: {
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
  group_70: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_74: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_91: {
    height: 50,
    width: 50
  },
  group_82: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_80: {
    height: 50,
    width: 50
  },
  group_76: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_59: {
    height: 49,
    width: 50
  },
  group_55: {

  },
  _3: {

  }
})
