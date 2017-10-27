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

import bgoverlay from './4-Home_images/bgoverlay.png'
import avatar_104 from './4-Home_images/avatar_104.png'
import group_110 from './4-Home_images/group_110.png'
import left from './4-Home_images/left.png'
import group_96 from './4-Home_images/group_96.png'
import line_91 from './4-Home_images/line_91.png'
import line_87 from './4-Home_images/line_87.png'
import group_75 from './4-Home_images/group_75.png'
import line_70 from './4-Home_images/line_70.png'
import line_62 from './4-Home_images/line_62.png'
import line_55 from './4-Home_images/line_55.png'
import avatar_45 from './4-Home_images/avatar_45.png'
import avatar_41 from './4-Home_images/avatar_41.png'
import avatar from './4-Home_images/avatar.png'
import line from './4-Home_images/line.png'
import group_26 from './4-Home_images/group_26.png'
import group from './4-Home_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={styles.navbar}>
            <View style={styles.bounds_103}>
              <View style={{flexDirection: 'row'}}>
                <Image source={avatar_104} style={styles.avatar_104} />
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_113} />
                    <Image source={group_110} style={styles.group_110} />
                  </View>
                </View>
                <Text style={styles.THURSDAY}>THURSDAY</Text>
              </View>
            </View>
          </View>
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.March12}>March 12</Text>
              <Image source={left} style={styles.left} />
              <View style={styles.right}>
                <Image source={group_96} style={styles.group_96} />
              </View>
            </View>
          </View>
          <Image source={line_91} style={styles.line_91} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.tasksdue}>
              <Text style={styles._5}>5</Text>
              <Text style={styles.TASKSDUE}>TASKS DUE</Text>
            </View>
            <Image source={line_87} style={styles.line_87} />
            <View style={styles.weather}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.sunny}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_85} />
                    <Image source={group_75} style={styles.group_75} />
                  </View>
                </View>
                <Text style={styles._72}>72</Text>
              </View>
              <Text style={styles.SANFRANCISCO}>SAN FRANCISCO</Text>
            </View>
          </View>
          <Image source={line_70} style={styles.line_70} />
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.time_64}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._8}>8</Text>
                  <Text style={styles._30}>30</Text>
                  <Text style={styles.AM_65}>AM</Text>
                </View>
              </View>
              <Text style={styles.Designexplorations}>Design explorations</Text>
              <Text style={styles.WebApp}>
                <Text>Web Ap</Text>{'\n'}
                <Text>p</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_62} style={styles.line_62} />
          <View style={styles._2_56}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.time_57}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._10}>10</Text>
                  <Text style={styles._00_59}>00</Text>
                  <Text style={styles.AM}>AM</Text>
                </View>
              </View>
              <Text style={styles.CoffeeBreak}>Coffee Break</Text>
            </View>
          </View>
          <Image source={line_55} style={styles.line_55} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._3}>
                <Text style={styles.WeeklyStandUp}>Weekly Stand Up</Text>
                <Text style={styles.Hangouts}>
                  <Text>Hangout</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_45} style={styles.avatar_45} />
                  <Image source={avatar_41} style={styles.avatar_41} />
                  <Image source={avatar} style={styles.avatar} />
                </View>
              </View>
              <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._2}>2</Text>
                  <Text style={styles._00}>00</Text>
                  <Text style={styles.PM}>PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tabbar}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.add}>
                <View style={styles.bg_21}>
                  <View style={styles.group_22}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_24} />
                      <Image source={line} style={styles.line} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.calendar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_35} />
                  <Image source={group_26} style={styles.group_26} />
                </View>
              </View>
              <View style={styles.overview}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
            </View>
          </View>
        </Image>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {

  },
  navbar: {
    alignSelf: 'flex-end',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 13
  },
  bounds_103: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_104: {

  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_113: {
    height: 50,
    width: 50
  },
  group_110: {

  },
  THURSDAY: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'flex-end',
    marginTop: 50,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March12: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FAFAFA',
    textAlign: 'center'
  },
  left: {

  },
  right: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_96: {

  },
  line_91: {
    alignSelf: 'flex-end',
    marginTop: 43
  },
  tasksdue: {
    width: 131,
    height: 200
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 28,
    textAlign: 'center'
  },
  TASKSDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6
  },
  line_87: {

  },
  weather: {
    width: 216,
    height: 200
  },
  sunny: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_85: {
    height: 50,
    width: 50
  },
  group_75: {

  },
  _72: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 31
  },
  SANFRANCISCO: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 6,
    textAlign: 'right'
  },
  line_70: {
    alignSelf: 'flex-end'
  },
  _1: {
    alignSelf: 'center',
    marginTop: 51,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time_64: {
    width: 82,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  AM_65: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  Designexplorations: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  WebApp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  line_62: {
    alignSelf: 'flex-end',
    marginTop: 25
  },
  _2_56: {
    alignSelf: 'center',
    marginTop: 31,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time_57: {
    width: 118,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _00_59: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  AM: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  CoffeeBreak: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  line_55: {
    alignSelf: 'flex-end',
    marginTop: 25
  },
  _3: {
    height: 179
  },
  WeeklyStandUp: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 5,
    textAlign: 'left'
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 3,
    textAlign: 'left'
  },
  avatar_45: {

  },
  avatar_41: {

  },
  avatar: {

  },
  time: {
    width: 81,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _00: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  PM: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  tabbar: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 104,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_21: {
    backgroundColor: '#FFFFFF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_22: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_24: {
    height: 50,
    width: 50
  },
  line: {

  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_35: {
    height: 50,
    width: 50
  },
  group_26: {

  },
  overview: {
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

  }
})
