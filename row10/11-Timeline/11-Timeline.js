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

import bgoverlay from './11-Timeline_images/bgoverlay.png'
import group_75 from './11-Timeline_images/group_75.png'
import group_69 from './11-Timeline_images/group_69.png'
import group from './11-Timeline_images/group.png'
import avatar_25 from './11-Timeline_images/avatar_25.png'
import avatar_21 from './11-Timeline_images/avatar_21.png'
import avatar from './11-Timeline_images/avatar.png'
import line from './11-Timeline_images/line.png'
import group_61 from './11-Timeline_images/group_61.png'
import line_49 from './11-Timeline_images/line_49.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={styles.navbar}>
            <View style={styles.bounds_66}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_78} />
                    <Image source={group_75} style={styles.group_75} />
                  </View>
                </View>
                <View style={styles.filter}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_73} />
                    <Image source={group_69} style={styles.group_69} />
                  </View>
                </View>
                <Text style={styles.TIMELINE}>TIMELINE</Text>
              </View>
            </View>
          </View>
          <Text style={styles.March}>
            <Text>Marc</Text>{'\n'}
            <Text>h</Text>{'\n'}
          </Text>
          <View style={styles.date}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.time2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.ThursdayMarch12}>Thursday, March 12</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._3}>
                <Text style={styles.WeeklyStandUp}>Weekly Stand Up</Text>
                <Text style={styles.Hangouts}>
                  <Text>Hangout</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_25} style={styles.avatar_25} />
                  <Image source={avatar_21} style={styles.avatar_21} />
                  <Image source={avatar} style={styles.avatar} />
                </View>
              </View>
              <View style={styles._2_35}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.time_36}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._10}>10</Text>
                      <Text style={styles._00_38}>00</Text>
                      <Text style={styles.AM}>AM</Text>
                    </View>
                  </View>
                  <Text style={styles.CoffeeBreak}>Coffee Break</Text>
                </View>
              </View>
              <View style={styles._1}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.Design}>
                    <Text>Design </Text>{'\n'}
                    <Text>Explorations</Text>{'\n'}
                  </Text>
                  <View style={styles.time_42}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._8}>8</Text>
                      <Text style={styles._30}>30</Text>
                      <Text style={styles.AM_43}>AM</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.WebApp}>
                  <Text>Web Ap</Text>{'\n'}
                  <Text>p</Text>{'\n'}
                </Text>
              </View>
              <Image source={line} style={styles.line} />
              <View style={styles.time_31}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._2}>2</Text>
                  <Text style={styles._00_33}>00</Text>
                  <Text style={styles.PM_32}>PM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.date_58}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.time2_60}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_64} />
                  <Image source={group_61} style={styles.group_61} />
                </View>
              </View>
              <Text style={styles.WednesdayMarch11}>Wednesday, March 11</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._4}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.time}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles._6}>6</Text>
                      <Text style={styles._00}>00</Text>
                      <Text style={styles.PM}>PM</Text>
                    </View>
                  </View>
                  <Text style={styles.NewIcons}>New Icons</Text>
                  <Text style={styles.MobileApp}>
                    <Text>Mobile Ap</Text>{'\n'}
                    <Text>p</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <Image source={line_49} style={styles.line_49} />
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
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_66: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_78: {
    height: 50,
    width: 50
  },
  group_75: {

  },
  filter: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  TIMELINE: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FAFAFA',
    alignSelf: 'center',
    marginTop: 50,
    textAlign: 'center'
  },
  date: {
    alignSelf: 'center',
    marginTop: 8,
    width: 304,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time2: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  ThursdayMarch12: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
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
  avatar_25: {

  },
  avatar_21: {

  },
  avatar: {

  },
  _2_35: {
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time_36: {
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
  _00_38: {
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
  _1: {
    height: 136
  },
  Design: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  time_42: {
    width: 82,
    height: 96,
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
  AM_43: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  WebApp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 4,
    textAlign: 'left'
  },
  line: {

  },
  time_31: {
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
  _00_33: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  PM_32: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  date_58: {
    alignSelf: 'center',
    width: 335,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time2_60: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_64: {
    height: 50,
    width: 50
  },
  group_61: {

  },
  WednesdayMarch11: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _4: {
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    width: 81,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _6: {
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
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  line_49: {

  }
})
