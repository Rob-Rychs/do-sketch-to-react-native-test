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
import select from './5-Calendar_images/select.png'
import group_120 from './5-Calendar_images/group_120.png'
import line_115 from './5-Calendar_images/line_115.png'
import avatar_37 from './5-Calendar_images/avatar_37.png'
import line_32 from './5-Calendar_images/line_32.png'
import avatar_25 from './5-Calendar_images/avatar_25.png'
import line from './5-Calendar_images/line.png'
import avatar from './5-Calendar_images/avatar.png'

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
              <View style={styles.headerbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_118}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_134} />
                          <Image source={group_130} style={styles.group_130} />
                        </View>
                      </View>
                      <Image source={select} style={styles.select} />
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_123} />
                          <Image source={group_120} style={styles.group_120} />
                        </View>
                      </View>
                      <Text style={styles.April2005}>April 2005</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.calendar}>
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
                  <View style={styles.dates_94}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_96}>
                        <Text style={styles._2_99}>2</Text>
                      </View>
                      <View style={styles.notification_95}>
                        <Text style={styles._3_98}>3</Text>
                      </View>
                      <Text style={styles._29_103}>29</Text>
                      <Text style={styles._30_102}>30</Text>
                      <Text style={styles._31}>31</Text>
                      <Text style={styles._1_100}>1</Text>
                      <Text style={styles._4}>4</Text>
                    </View>
                  </View>
                  <View style={styles.dates_81}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_85}>
                        <Text style={styles._7}>7</Text>
                      </View>
                      <View style={styles.notification_86}>
                        <Text style={styles._5}>5</Text>
                      </View>
                      <View style={styles.notification_84}>
                        <Text style={styles._8}>8</Text>
                      </View>
                      <View style={styles.notification_83}>
                        <Text style={styles._10_88}>10</Text>
                      </View>
                      <View style={styles.notification_82}>
                        <Text style={styles._11_87}>11</Text>
                      </View>
                      <Text style={styles._6}>6</Text>
                      <Text style={styles._9}>9</Text>
                    </View>
                  </View>
                  <View style={styles.dates_70}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_73}>
                        <Text style={styles._13}>13</Text>
                      </View>
                      <View style={styles.notification_72}>
                        <Text style={styles._15}>15</Text>
                      </View>
                      <View style={styles.notification_71}>
                        <Text style={styles._18}>18</Text>
                      </View>
                      <Text style={styles._12}>12</Text>
                      <Text style={styles._14}>14</Text>
                      <Text style={styles._16}>16</Text>
                      <Text style={styles._17}>17</Text>
                    </View>
                  </View>
                  <View style={styles.dates_59}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification_62}>
                        <Text style={styles._20}>20</Text>
                      </View>
                      <View style={styles.notification_61}>
                        <Text style={styles._23}>23</Text>
                      </View>
                      <View style={styles.notification_60}>
                        <Text style={styles._24}>24</Text>
                      </View>
                      <Text style={styles._19}>19</Text>
                      <Text style={styles._21}>21</Text>
                      <Text style={styles._22}>22</Text>
                      <Text style={styles._25}>25</Text>
                    </View>
                  </View>
                  <View style={styles.dates}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.notification}>
                        <Text style={styles._26}>26</Text>
                      </View>
                      <View style={styles.notification_51}>
                        <Text style={styles._28}>28</Text>
                      </View>
                      <Text style={styles._27}>27</Text>
                      <Text style={styles._29}>29</Text>
                      <Text style={styles._30}>30</Text>
                      <Text style={styles._1_53}>1</Text>
                      <Text style={styles._2_52}>2</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.add}>
                  <View style={styles.bg}>
                    <View style={styles.group}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={line_115} style={styles.line_115} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._1}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_37} style={styles.avatar_37} />
                  <Text style={styles.CoffeewithAdam}>Coffee with Adam</Text>
                  <View style={styles.date_41}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles._10}>10</Text>
                      <Text style={styles.am_43}>am</Text>
                    </View>
                  </View>
                  <View style={styles.status_34} />
                  <Text style={styles.Starbucks}>Starbucks</Text>
                </View>
              </View>
            </View>
          </View>
          <Image source={line_32} style={styles.line_32} />
          <View style={styles._2_21}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_25} style={styles.avatar_25} />
              <Text style={styles.CatchupwithMarie}>Catch up with Marie</Text>
              <View style={styles.date_29}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._11}>11</Text>
                  <Text style={styles.am}>am</Text>
                </View>
              </View>
              <View style={styles.status_22} />
              <Text style={styles.Hangouts}>Hangouts</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
              <View style={styles.date}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._2}>2</Text>
                  <Text style={styles.pm}>pm</Text>
                </View>
              </View>
              <View style={styles.status} />
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
  headerbg: {
    backgroundColor: 'url(#linearGradient-7)',
    height: 1016,
    paddingTop: 41,
    paddingBottom: 120
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_118: {
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
  select: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_123: {
    height: 50,
    width: 50
  },
  group_120: {

  },
  April2005: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  calendar: {
    alignSelf: 'center',
    marginTop: 20,
    height: 581
  },
  days: {
    alignSelf: 'flex-start',
    marginLeft: 14,
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
  dates_94: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    marginTop: 33,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_96: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 27,
    justifyContent: 'center'
  },
  _2_99: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_95: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 27,
    justifyContent: 'center'
  },
  _3_98: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _29_103: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _30_102: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 97
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 194
  },
  _1_100: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  dates_81: {
    alignSelf: 'center',
    marginTop: 31,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_85: {
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 29,
    justifyContent: 'center'
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FF3366',
    textAlign: 'center'
  },
  notification_86: {
    height: 78,
    borderRadius: 39,
    width: 78,
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
  notification_84: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 28,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_83: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _10_88: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_82: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _11_87: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 125
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 230
  },
  dates_70: {
    alignSelf: 'flex-end',
    marginTop: 31,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_73: {
    height: 78,
    borderRadius: 39,
    width: 78,
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
  notification_72: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_71: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 194
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 223
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 126
  },
  dates_59: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    marginTop: 32,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification_62: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 21,
    justifyContent: 'center'
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_61: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  notification_60: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 194
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _25: {
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
    marginTop: 32,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification: {
    height: 78,
    borderRadius: 39,
    width: 78,
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
  notification_51: {
    height: 78,
    borderRadius: 39,
    width: 78,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 118
  },
  _29: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 283
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 186
  },
  _1_53: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _2_52: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  add: {
    alignSelf: 'flex-end',
    marginRight: 93,
    marginTop: 16,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#FF3366',
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
  line_115: {

  },
  _1: {
    height: 91,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_37: {

  },
  CoffeewithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_41: {
    width: 44,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  am_43: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  status_34: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  },
  line_32: {
    alignSelf: 'center',
    marginTop: 96
  },
  _2_21: {
    alignSelf: 'center',
    marginTop: 39,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_25: {

  },
  CatchupwithMarie: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 169
  },
  date_29: {
    width: 44,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  status_22: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  },
  line: {
    alignSelf: 'center',
    marginTop: 35
  },
  _3: {
    alignSelf: 'center',
    marginTop: 37,
    height: 88,
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
    textAlign: 'center'
  },
  date: {
    width: 35,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 205
  }
})
