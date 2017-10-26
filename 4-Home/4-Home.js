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

import group_94 from './4-Home_images/group_94.png'
import group_89 from './4-Home_images/group_89.png'
import avatar_78 from './4-Home_images/avatar_78.png'
import left from './4-Home_images/left.png'
import right from './4-Home_images/right.png'
import avatar_36 from './4-Home_images/avatar_36.png'
import line_41 from './4-Home_images/line_41.png'
import line_32 from './4-Home_images/line_32.png'
import avatar_27 from './4-Home_images/avatar_27.png'
import line from './4-Home_images/line.png'
import avatar from './4-Home_images/avatar.png'
import line_66 from './4-Home_images/line_66.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <View style={styles.bounds_87}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_98} />
                    <Image source={group_94} style={styles.group_94} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_92} />
                    <Image source={group_89} style={styles.group_89} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.GoodMorning}>Good Morning!</Text>
          <Image source={avatar_78} style={styles.avatar_78} />
            <View style={styles._3_82}>
              <Text style={styles._3_84}>3</Text>
            </View>
          </Image>
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row'}}>
              <Image source={left} style={styles.left} />
              <Image source={right} style={styles.right} />
              <Text style={styles.FEBRUARY}>
                <Text>FEBRUAR</Text>{'\n'}
                <Text>Y</Text>{'\n'}
              </Text>
            </View>
          </View>
          <View style={styles.calendarweek}>
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
            <View style={styles.dates}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.selected}>
                  <Text style={styles._8}>8</Text>
                  <View style={styles.notification_47} />
                </View>
                <Text style={styles._7}>7</Text>
                <Text style={styles._9}>9</Text>
                <Text style={styles._10}>10</Text>
                <Text style={styles._11}>11</Text>
                <Text style={styles._12}>12</Text>
                <Text style={styles._13}>13</Text>
                <View style={styles.notification2} />
                <View style={styles.notification} />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._1}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_40} />
                  <Image source={avatar_36} style={styles.avatar_36} />
                  <Text style={styles.NewsubpageforJane}>
                    <Text>New subpage for </Text>{'\n'}
                    <Text>Janet</Text>{'\n'}
                  </Text>
                  <Text style={styles._810am}>8 – 10am</Text>
                </View>
              </View>
              <Image source={line_41} style={styles.line_41} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={line_32} style={styles.line_32} />
              <View style={styles._2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_31} />
                  <Image source={avatar_27} style={styles.avatar_27} />
                  <Text style={styles.CatchupwithTom}>
                    <Text>Catch up with </Text>{'\n'}
                    <Text>Tom</Text>{'\n'}
                  </Text>
                  <Text style={styles._1112pm}>11 – 12pm</Text>
                  <Text style={styles.Hangouts}>Hangouts</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={line} style={styles.line} />
              <View style={styles._3}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category} />
                  <Image source={avatar} style={styles.avatar} />
                  <Text style={styles.LunchwithDiane}>
                    <Text>Lunch with </Text>{'\n'}
                    <Text>Diane</Text>{'\n'}
                  </Text>
                  <Text style={styles._1pm}>1pm</Text>
                  <Text style={styles.Restaurant}>Restaurant</Text>
                </View>
              </View>
              <View style={styles.add}>
                <View style={styles.bg}>
                  <View style={styles.group}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds} />
                      <Image source={line_66} style={styles.line_66} />
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
  header: {
    backgroundColor: '#1D1D26'
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_87: {
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
  bounds_98: {
    height: 50,
    width: 50
  },
  group_94: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_92: {
    height: 50,
    width: 50
  },
  group_89: {

  },
  GoodMorning: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 32,
    textAlign: 'center'
  },
  avatar_78: {
    alignSelf: 'flex-start',
    marginLeft: 260,
    marginTop: 8,
    alignItems: 'flex-end',
    marginRight: 8,
    justifyContent: 'flex-start'
  },
  _3_82: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 18,
    justifyContent: 'center'
  },
  _3_84: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 86,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {

  },
  right: {

  },
  FEBRUARY: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  calendarweek: {
    alignSelf: 'flex-start',
    marginLeft: 59,
    marginTop: 81,
    height: 130
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
  dates: {
    alignSelf: 'flex-end',
    marginRight: 6,
    marginTop: 20,
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
    marginLeft: 29,
    textAlign: 'center'
  },
  notification_47: {
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
  notification2: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  notification: {
    height: 8,
    backgroundColor: '#FF3366',
    borderRadius: 4,
    width: 8
  },
  _1: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_40: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar_36: {

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
  line_41: {

  },
  line_32: {

  },
  _2: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_31: {
    height: 140,
    backgroundColor: '#1D1D26',
    width: 6
  },
  avatar_27: {

  },
  CatchupwithTom: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 5
  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 134
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {

  },
  _3: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    height: 140,
    backgroundColor: '#1D1D26',
    width: 6
  },
  avatar: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _1pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 30
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
  line_66: {

  }
})
