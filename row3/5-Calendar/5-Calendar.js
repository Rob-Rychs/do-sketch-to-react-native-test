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

import avatar_123 from './5-Calendar_images/avatar_123.png'
import group_137 from './5-Calendar_images/group_137.png'
import group_128 from './5-Calendar_images/group_128.png'
import down from './5-Calendar_images/down.png'
import line_111 from './5-Calendar_images/line_111.png'
import line_100 from './5-Calendar_images/line_100.png'
import line_90 from './5-Calendar_images/line_90.png'
import line_76 from './5-Calendar_images/line_76.png'
import line_65 from './5-Calendar_images/line_65.png'
import line_49 from './5-Calendar_images/line_49.png'
import avatar_41 from './5-Calendar_images/avatar_41.png'
import avatar_37 from './5-Calendar_images/avatar_37.png'
import avatar from './5-Calendar_images/avatar.png'
import group from './5-Calendar_images/group.png'
import group_16 from './5-Calendar_images/group_16.png'
import group_21 from './5-Calendar_images/group_21.png'
import group_26 from './5-Calendar_images/group_26.png'

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
                <View style={styles.bounds_121}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={avatar_123} style={styles.avatar_123} />
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_141} />
                        <Image source={group_137} style={styles.group_137} />
                      </View>
                    </View>
                    <View style={styles.add}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_131} />
                        <Image source={group_128} style={styles.group_128} />
                      </View>
                    </View>
                    <Text style={styles.February}>
                      <Text>Februar</Text>{'\n'}
                      <Text>y</Text>{'\n'}
                    </Text>
                    <Image source={down} style={styles.down} />
                  </View>
                </View>
              </View>
              <View style={styles.bg}>
                <View style={styles.calendarmonth}>
                  <View style={styles.days}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.S}>S</Text>
                      <Text style={styles.M}>M</Text>
                      <Text style={styles.T}>T</Text>
                      <Text style={styles.W}>W</Text>
                      <Text style={styles.T_117}>T</Text>
                      <Text style={styles.F}>F</Text>
                      <Text style={styles.S_119}>S</Text>
                    </View>
                  </View>
                  <Image source={line_111} style={styles.line_111} />
                  <View style={styles.dates_101}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_109} />
                      <View style={styles.notification_105} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._31}>31</Text>
                      <Text style={styles._1_108}>1</Text>
                      <Text style={styles._2_107}>2</Text>
                      <Text style={styles._3_106}>3</Text>
                      <Text style={styles._4_104}>4</Text>
                      <Text style={styles._5_103}>5</Text>
                      <Text style={styles._6_102}>6</Text>
                    </View>
                  </View>
                  <Image source={line_100} style={styles.line_100} />
                  <View style={styles.dates_91}>
                    <View style={styles.notification_97} />
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._7}>7</Text>
                      <Text style={styles._8}>8</Text>
                      <Text style={styles._9}>9</Text>
                      <Text style={styles._10}>10</Text>
                      <Text style={styles._11}>11</Text>
                      <Text style={styles._12}>12</Text>
                      <Text style={styles._13}>13</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Image source={line_90} style={styles.line_90} />
                      <View style={styles.dates_77}>
                        <View style={styles.Group}>
                          <View style={{flexDirection: 'row'}}>
                            <View style={styles.selected}>
                              <View style={styles.notification_88} />
                              <Text style={styles._15}>15</Text>
                            </View>
                            <View style={styles.notification_83} />
                            <View style={styles.notification_81} />
                            <Text style={styles._14}>14</Text>
                            <Text style={styles._16}>16</Text>
                            <Text style={styles._17}>17</Text>
                            <Text style={styles._18}>18</Text>
                            <Text style={styles._19}>19</Text>
                            <Text style={styles._20}>20</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Image source={line_76} style={styles.line_76} />
                  <View style={styles.dates_66}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification} />
                      <View style={styles.notification_73} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles._21}>21</Text>
                      <Text style={styles._22}>22</Text>
                      <Text style={styles._23}>23</Text>
                      <Text style={styles._24}>24</Text>
                      <Text style={styles._25}>25</Text>
                      <Text style={styles._26}>26</Text>
                      <Text style={styles._27}>27</Text>
                    </View>
                  </View>
                  <Image source={line_65} style={styles.line_65} />
                  <View style={styles.dates}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._3}>3</Text>
                      <Text style={styles._28}>28</Text>
                      <Text style={styles._1_63}>1</Text>
                      <Text style={styles._2_62}>2</Text>
                      <Text style={styles._4}>4</Text>
                      <Text style={styles._5}>5</Text>
                      <Text style={styles._6}>6</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._830}>
                <Text>8:3</Text>{'\n'}
                <Text>0</Text>{'\n'}
              </Text>
              <Text style={styles.AM_54}>AM</Text>
              <Text style={styles.NewIcons}>New Icons</Text>
            </View>
            <Text style={styles.MobileApp}>Mobile App</Text>
          </View>
          <Image source={line_49} style={styles.line_49} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._1100}>
                <Text>11:0</Text>{'\n'}
                <Text>0</Text>{'\n'}
              </Text>
              <Text style={styles.AM}>AM</Text>
              <Text style={styles.DesignStandUp}>Design Stand Up</Text>
            </View>
            <Text style={styles.Hangouts}>Hangouts</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_41} style={styles.avatar_41} />
              <Image source={avatar_37} style={styles.avatar_37} />
              <Image source={avatar} style={styles.avatar} />
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={styles.bg_8}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.completed}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <View style={styles.active_15}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_19} />
                    <Image source={group_16} style={styles.group_16} />
                  </View>
                </View>
                <View style={styles.snoozed}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_24} />
                    <Image source={group_21} style={styles.group_21} />
                  </View>
                </View>
                <View style={styles.completed_25}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_30} />
                    <Image source={group_26} style={styles.group_26} />
                  </View>
                </View>
              </View>
              <View style={styles.active} />
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
    marginBottom: 10
  },
  bounds_121: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_123: {

  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_141: {
    height: 50,
    width: 50
  },
  group_137: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_131: {
    height: 50,
    width: 50
  },
  group_128: {

  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  down: {

  },
  bg: {
    height: 613,
    backgroundColor: '#6563A4',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 303
  },
  calendarmonth: {
    height: 527
  },
  days: {
    alignSelf: 'center',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  S: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  M: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 94
  },
  T: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 196
  },
  W: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  T_117: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 197
  },
  F: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 99
  },
  S_119: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  line_111: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_101: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 30,
    height: 64
  },
  notification_109: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification_105: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _1_108: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  _2_107: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 205
  },
  _3_106: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _4_104: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _5_103: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _6_102: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_100: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates_91: {
    alignSelf: 'center',
    marginTop: 30,
    height: 64
  },
  notification_97: {
    height: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginLeft: 241,
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
  _9: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
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
  line_90: {

  },
  dates_77: {
    height: 97,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Group: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 97,
    backgroundColor: '#50D2C2',
    width: 97,
    paddingTop: 8,
    paddingBottom: 26
  },
  notification_88: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 8,
    width: 10
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 28,
    marginTop: 12,
    textAlign: 'center'
  },
  notification_83: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 10
  },
  notification_81: {
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 10
  },
  _14: {
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
  line_76: {
    alignSelf: 'center',
    marginTop: 98
  },
  dates_66: {
    alignSelf: 'center',
    marginTop: 30,
    height: 63
  },
  notification: {
    height: 10,
    borderRadius: 5,
    width: 10
  },
  notification_73: {
    height: 10,
    borderRadius: 5,
    width: 10
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
  line_65: {
    alignSelf: 'center',
    marginTop: 27
  },
  dates: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 30,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _3: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _1_63: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  _2_62: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 205
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
  _1: {
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 663,
    height: 85
  },
  _830: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  AM_54: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 79
  },
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 191
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 191,
    marginTop: 8,
    textAlign: 'left'
  },
  line_49: {
    alignSelf: 'center',
    marginTop: 94
  },
  _2: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 158,
    height: 181
  },
  _1100: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  AM: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 99
  },
  DesignStandUp: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 191
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 191,
    textAlign: 'left'
  },
  avatar_41: {

  },
  avatar_37: {

  },
  avatar: {

  },
  tabs: {
    alignSelf: 'center',
    marginTop: 54,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_8: {
    height: 120,
    backgroundColor: '#50D2C2'
  },
  completed: {
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
  active_15: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_19: {
    height: 50,
    width: 50
  },
  group_16: {

  },
  snoozed: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_24: {
    height: 50,
    width: 50
  },
  group_21: {

  },
  completed_25: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_30: {
    height: 50,
    width: 50
  },
  group_26: {

  },
  active: {
    height: 6,
    backgroundColor: '#6563A4',
    alignSelf: 'flex-start',
    marginTop: 29,
    width: 188
  }
})
