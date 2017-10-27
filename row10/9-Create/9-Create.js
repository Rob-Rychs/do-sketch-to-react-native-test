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

import bgoverlay from './9-Create_images/bgoverlay.png'
import group_81 from './9-Create_images/group_81.png'
import group_69 from './9-Create_images/group_69.png'
import left from './9-Create_images/left.png'
import group_52 from './9-Create_images/group_52.png'
import Line from './9-Create_images/Line.png'
import line_48 from './9-Create_images/line_48.png'
import line_45 from './9-Create_images/line_45.png'
import line_41 from './9-Create_images/line_41.png'
import line_37 from './9-Create_images/line_37.png'
import avatar_31 from './9-Create_images/avatar_31.png'
import avatar_27 from './9-Create_images/avatar_27.png'
import avatar from './9-Create_images/avatar.png'
import line_22 from './9-Create_images/line_22.png'
import line from './9-Create_images/line.png'
import group from './9-Create_images/group.png'
import line_61 from './9-Create_images/line_61.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={bgoverlay} style={styles.bgoverlay} />
            <View style={styles.navbar}>
              <View style={styles.bounds_67}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_84} />
                      <Image source={group_81} style={styles.group_81} />
                    </View>
                  </View>
                  <View style={styles.calendar}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_78} />
                      <Image source={group_69} style={styles.group_69} />
                    </View>
                  </View>
                  <Text style={styles.ADDNEW}>ADD NEW</Text>
                </View>
              </View>
            </View>
            <View style={styles.date}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._12}>12</Text>
                <Text style={styles.Thursday}>Thursday</Text>
                <Image source={left} style={styles.left} />
                <View style={styles.right}>
                  <Image source={group_52} style={styles.group_52} />
                </View>
                <Text style={styles.MARCH2015}>MARCH 2015</Text>
              </View>
            </View>
            <View style={styles.time}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Line} style={styles.Line} />
                <Text style={styles._200PM}>
                  <Text>2:00 P</Text>{'\n'}
                  <Text>M</Text>{'\n'}
                </Text>
              </View>
            </View>
            <Image source={line_48} style={styles.line_48} />
            <View style={styles.title}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.TITLE}>TITLE</Text>
                <Text style={styles.WeeklyStandUp}>Weekly Stand Up</Text>
              </View>
              <Image source={line_45} style={styles.line_45} />
            </View>
            <View style={styles.where}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.WHERE}>WHERE</Text>
                <Text style={styles.Hangouts}>Hangouts</Text>
              </View>
              <Image source={line_41} style={styles.line_41} />
            </View>
            <View style={styles.notify}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.NOTIFY}>NOTIFY</Text>
                <Text style={styles._20minutesbefore}>20 minutes before</Text>
              </View>
              <Image source={line_37} style={styles.line_37} />
            </View>
            <View style={styles.people}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.PEOPLE}>PEOPLE</Text>
                <Image source={avatar_31} style={styles.avatar_31} />
                <Image source={avatar_27} style={styles.avatar_27} />
                <Image source={avatar} style={styles.avatar} />
              </View>
              <Image source={line_22} style={styles.line_22} />
            </View>
            <View style={styles.repeat}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.REPEAT}>REPEAT</Text>
                <Text style={styles.No}>No</Text>
              </View>
              <Image source={line} style={styles.line} />
            </View>
            <View style={styles.tabbar}>
              <View style={styles.add}>
                <View style={styles.bg_13}>
                  <Image source={group} style={styles.group} />
                </View>
              </View>
            </View>
          </Image>
          <Image source={line_61} style={styles.line_61} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {
    paddingBottom: 15
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_67: {
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
  bounds_84: {
    height: 50,
    width: 50
  },
  group_81: {

  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_78: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  ADDNEW: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  date: {
    alignSelf: 'center',
    marginTop: 50,
    height: 164,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 185
  },
  Thursday: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 178
  },
  left: {

  },
  right: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_52: {

  },
  MARCH2015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 188
  },
  time: {
    alignSelf: 'flex-start',
    marginLeft: 129,
    marginTop: 37,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Line: {

  },
  _200PM: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  line_48: {
    alignSelf: 'center',
    marginTop: 1
  },
  title: {
    alignSelf: 'center',
    marginTop: 62,
    height: 74
  },
  TITLE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  WeeklyStandUp: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 195
  },
  line_45: {
    alignSelf: 'center',
    marginTop: 36
  },
  where: {
    alignSelf: 'center',
    marginTop: 79,
    height: 74
  },
  WHERE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 220
  },
  line_41: {
    alignSelf: 'center',
    marginTop: 36
  },
  notify: {
    alignSelf: 'center',
    marginTop: 79,
    height: 74
  },
  NOTIFY: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _20minutesbefore: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 183
  },
  line_37: {
    alignSelf: 'center',
    marginTop: 36
  },
  people: {
    alignSelf: 'center',
    marginTop: 70,
    height: 83
  },
  PEOPLE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  avatar_31: {

  },
  avatar_27: {

  },
  avatar: {

  },
  line_22: {
    alignSelf: 'center',
    marginTop: 15
  },
  repeat: {
    alignSelf: 'center',
    marginTop: 58,
    height: 74
  },
  REPEAT: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  No: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 220
  },
  line: {
    alignSelf: 'center',
    marginTop: 36
  },
  tabbar: {
    alignSelf: 'center',
    marginTop: 131,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_13: {
    backgroundColor: '#FFFFFF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {

  },
  line_61: {

  }
})
