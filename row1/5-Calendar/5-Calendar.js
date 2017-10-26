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

import group_106 from './5-Calendar_images/group_106.png'
import group from './5-Calendar_images/group.png'
import active from './5-Calendar_images/active.png'
import line3 from './5-Calendar_images/line3.png'
import avatar_23 from './5-Calendar_images/avatar_23.png'
import line2 from './5-Calendar_images/line2.png'
import avatar from './5-Calendar_images/avatar.png'
import line_117 from './5-Calendar_images/line_117.png'
import line4 from './5-Calendar_images/line4.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._5Calendar}>
          <View style={styles.header}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_110} />
                      <Image source={group_106} style={styles.group_106} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_104} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.February}>February</Text>
              <Text style={styles._2015}>2015</Text>
            </View>
            <View style={styles.filter}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.DAY}>DAY</Text>
                <Text style={styles.WEEK}>WEEK</Text>
                <Text style={styles.MONTH}>MONTH</Text>
              </View>
              <Image source={active} style={styles.active} />
            </View>
          </View>
          <View style={styles.calendarmonth}>
            <View style={styles.days}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.SUN}>SUN</Text>
                <Text style={styles.MON}>MON</Text>
                <Text style={styles.TUE}>TUE</Text>
                <Text style={styles.WED}>WED</Text>
                <Text style={styles.THU}>THU</Text>
                <Text style={styles.FRI}>FRI</Text>
                <Text style={styles.SAT}>SAT</Text>
              </View>
            </View>
            <View style={styles.dates_72}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._31}>31</Text>
                <Text style={styles._1_81}>1</Text>
                <Text style={styles._2_80}>2</Text>
                <Text style={styles._3_79}>3</Text>
                <Text style={styles._4_78}>4</Text>
                <Text style={styles._5_77}>5</Text>
                <Text style={styles._6_76}>6</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.notification_75} />
                <View style={styles.notification_74} />
                <View style={styles.notification_73} />
              </View>
            </View>
            <View style={styles.dates_60}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.selected}>
                  <Text style={styles._8}>8</Text>
                  <View style={styles.notification_64} />
                </View>
                <Text style={styles._7}>7</Text>
                <Text style={styles._9}>9</Text>
                <Text style={styles._10}>10</Text>
                <Text style={styles._11}>11</Text>
                <Text style={styles._12}>12</Text>
                <Text style={styles._13}>13</Text>
                <View style={styles.notification_63} />
                <View style={styles.notification_62} />
              </View>
            </View>
            <View style={styles.dates_49}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._14}>14</Text>
                <Text style={styles._15}>15</Text>
                <Text style={styles._16}>16</Text>
                <Text style={styles._17}>17</Text>
                <Text style={styles._18}>18</Text>
                <Text style={styles._19}>19</Text>
                <Text style={styles._20}>20</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.notification_52} />
                <View style={styles.notification_51} />
                <View style={styles.notification_50} />
              </View>
            </View>
            <View style={styles.dates_38}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._21}>21</Text>
                <Text style={styles._22}>22</Text>
                <Text style={styles._23}>23</Text>
                <Text style={styles._24}>24</Text>
                <Text style={styles._25}>25</Text>
                <Text style={styles._26}>26</Text>
                <Text style={styles._27}>27</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.notification_41} />
                <View style={styles.notification2} />
                <View style={styles.notification_39} />
              </View>
            </View>
            <View style={styles.dates}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._28}>28</Text>
                <Text style={styles._1}>1</Text>
                <Text style={styles._2_35}>2</Text>
                <Text style={styles._3_34}>3</Text>
                <Text style={styles._4}>4</Text>
                <Text style={styles._5}>5</Text>
                <Text style={styles._6}>6</Text>
              </View>
              <View style={styles.notification} />
            </View>
          </View>
          <Image source={line3} style={styles.line3} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.category_27} />
              <Image source={avatar_23} style={styles.avatar_23} />
              <Text style={styles.NewsubpageforJane}>
                <Text>New subpage for </Text>{'\n'}
                <Text>Janet</Text>{'\n'}
              </Text>
              <Text style={styles._810am}>8 – 10am</Text>
            </View>
          </View>
          <Image source={line2} style={styles.line2} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.category} />
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.CatchupwithTom}>
                  <Text>Catch up with </Text>{'\n'}
                  <Text>Tom</Text>{'\n'}
                </Text>
                <Text style={styles._1112pm}>11 – 12pm</Text>
                <Text style={styles.Hangouts}>Hangouts</Text>
              </View>
            </View>
            <View style={styles.add}>
              <View style={styles.bg}>
                <View style={styles.group_116}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_118} />
                    <Image source={line_117} style={styles.line_117} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={line4} style={styles.line4} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _5Calendar: {

  },
  header: {
    backgroundColor: '#1D1D26',
    alignSelf: 'center',
    height: 478
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 18,
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
  bounds_110: {
    height: 50,
    width: 50
  },
  group_106: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_104: {
    height: 50,
    width: 50
  },
  group: {

  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 80
  },
  _2015: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 266
  },
  filter: {
    alignSelf: 'flex-start',
    marginLeft: 80,
    marginTop: 103,
    width: 330,
    height: 40
  },
  DAY: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  WEEK: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  MONTH: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-end',
    marginRight: 3,
    marginTop: 7
  },
  calendarmonth: {
    alignSelf: 'center',
    marginTop: 226,
    height: 520,
    paddingBottom: 9
  },
  days: {
    alignSelf: 'center',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SUN: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  MON: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 94
  },
  TUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 194
  },
  WED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  THU: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 190
  },
  FRI: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 100
  },
  SAT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 0
  },
  dates_72: {
    alignSelf: 'center',
    marginTop: 82,
    height: 45
  },
  _31: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _1_81: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 104
  },
  _2_80: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 201
  },
  _3_79: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _4_78: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 194
  },
  _5_77: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 97
  },
  _6_76: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  notification_75: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_74: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_73: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  dates_60: {
    alignSelf: 'flex-end',
    marginRight: 4,
    marginTop: 30,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 80,
    backgroundColor: '#1D1D2605',
    borderRadius: 40,
    width: 80,
    paddingTop: 25,
    paddingBottom: 10
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 28,
    textAlign: 'center'
  },
  notification_64: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 1,
    width: 8
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 194
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 194
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 97
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  notification_63: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_62: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  dates_49: {
    alignSelf: 'center',
    marginTop: 82,
    height: 45
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 97
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 194
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 194
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 97
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  notification_52: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_51: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_50: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  dates_38: {
    alignSelf: 'center',
    marginTop: 92,
    height: 45
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 97
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 194
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 194
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 97
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  notification_41: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification2: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification_39: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  dates: {
    alignSelf: 'center',
    marginTop: 55,
    height: 45
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _1: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 104
  },
  _2_35: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 201
  },
  _3_34: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 194
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 97
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  notification: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginLeft: 14,
    marginTop: 1,
    width: 8
  },
  line3: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 48
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 1,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_27: {
    height: 140,
    backgroundColor: '#FCAB53',
    width: 6
  },
  avatar_23: {

  },
  NewsubpageforJane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 0
  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 160
  },
  line2: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 1
  },
  _3: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar: {

  },
  CatchupwithTom: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 3
  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 132
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  add: {
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
  group_116: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_118: {
    height: 50,
    width: 50
  },
  line_117: {

  },
  line4: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 3
  }
})
