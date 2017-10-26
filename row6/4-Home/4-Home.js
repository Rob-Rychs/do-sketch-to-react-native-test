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

import group_99 from './4-Home_images/group_99.png'
import group_93 from './4-Home_images/group_93.png'
import left from './4-Home_images/left.png'
import right from './4-Home_images/right.png'
import group_74 from './4-Home_images/group_74.png'
import avatar_67 from './4-Home_images/avatar_67.png'
import avatar_59 from './4-Home_images/avatar_59.png'
import avatar_63 from './4-Home_images/avatar_63.png'
import group_52 from './4-Home_images/group_52.png'
import avatar_44 from './4-Home_images/avatar_44.png'
import group_38 from './4-Home_images/group_38.png'
import avatar_30 from './4-Home_images/avatar_30.png'
import group from './4-Home_images/group.png'
import avatar from './4-Home_images/avatar.png'
import group_134 from './4-Home_images/group_134.png'
import group_128 from './4-Home_images/group_128.png'
import group_107 from './4-Home_images/group_107.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_91}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_103} />
                    <Image source={group_99} style={styles.group_99} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_96} />
                    <Image source={group_93} style={styles.group_93} />
                  </View>
                </View>
                <Text style={styles.March17}>March 17</Text>
              </View>
            </View>
          </View>
          <View style={styles.daypicker}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={left} style={styles.left} />
              <Text style={styles._6Tasks}>
                <Text>6 Task</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
              <Image source={right} style={styles.right} />
            </View>
            <Text style={styles.DUETODAY}>DUE TODAY</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles._1}>
              <View style={styles.bg_57}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_78} />
                  <View style={styles.time_73}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_77} />
                      <Image source={group_74} style={styles.group_74} />
                    </View>
                  </View>
                  <Text style={styles._910am}>9 – 10am</Text>
                  <Text style={styles.WeeklyDesignMeetin}>
                    <Text>Weekly Design </Text>{'\n'}
                    <Text>Meeting</Text>{'\n'}
                  </Text>
                  <Image source={avatar_67} style={styles.avatar_67} />
                  <Image source={avatar_59} style={styles.avatar_59} />
                  <Image source={avatar_63} style={styles.avatar_63} />
                  <Text style={styles._2_58}>+2</Text>
                </View>
              </View>
            </View>
            <View style={styles._2}>
              <View style={styles.bg_43}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_49} />
                  <View style={styles.time_51}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_55} />
                      <Image source={group_52} style={styles.group_52} />
                    </View>
                  </View>
                  <Text style={styles._11am}>11am</Text>
                  <Text style={styles.CallJames}>Call James</Text>
                  <Image source={avatar_44} style={styles.avatar_44} />
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles._3}>
              <View style={styles.bg_29}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_35} />
                  <View style={styles.time_37}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_41} />
                      <Image source={group_38} style={styles.group_38} />
                    </View>
                  </View>
                  <Text style={styles._34pm}>3 – 4pm</Text>
                  <Text style={styles.CatchupwithDave}>
                    <Text>Catch up with </Text>{'\n'}
                    <Text>Dave</Text>{'\n'}
                  </Text>
                  <Image source={avatar_30} style={styles.avatar_30} />
                </View>
              </View>
            </View>
            <View style={styles._4}>
              <View style={styles.bg_15}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category} />
                  <View style={styles.time}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._7pm}>7pm</Text>
                  <Text style={styles.DinnerwithAndrea}>
                    <Text>Dinner with </Text>{'\n'}
                    <Text>Andrea</Text>{'\n'}
                  </Text>
                  <Image source={avatar} style={styles.avatar} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tabbar}>
            <View style={styles.bg_105}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.add}>
                  <View style={styles.group_122}>
                    <View style={styles.bounds_126} />
                  </View>
                </View>
                <View style={styles.calendar}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_143} />
                    <Image source={group_134} style={styles.group_134} />
                  </View>
                </View>
                <View style={styles.overview}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_132} />
                    <Image source={group_128} style={styles.group_128} />
                  </View>
                </View>
                <View style={styles.lists}>
                  <View style={styles.bounds_119} />
                </View>
                <View style={styles.timeline}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_111} />
                    <Image source={group_107} style={styles.group_107} />
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
    backgroundColor: '#1D1D26'
  },
  navbar: {
    alignSelf: 'flex-start',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_91: {
    height: 128,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_103: {
    height: 50,
    width: 50
  },
  group_99: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_96: {
    height: 50,
    width: 50
  },
  group_93: {

  },
  March17: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  daypicker: {
    alignSelf: 'flex-start',
    marginLeft: 33,
    marginTop: 100,
    height: 130
  },
  left: {

  },
  _6Tasks: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  right: {

  },
  DUETODAY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  _1: {
    width: 325,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_57: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_78: {
    height: 325,
    backgroundColor: '#50D2C2',
    width: 3
  },
  time_73: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_77: {
    height: 50,
    width: 50
  },
  group_74: {

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
  avatar_67: {

  },
  avatar_59: {

  },
  avatar_63: {

  },
  _2_58: {
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
  bg_43: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_49: {
    height: 325,
    backgroundColor: '#EE8F6E',
    width: 3
  },
  time_51: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_55: {
    height: 50,
    width: 50
  },
  group_52: {

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
  avatar_44: {

  },
  _3: {
    width: 325,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_29: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_35: {
    height: 325,
    backgroundColor: '#50D2C2',
    width: 3
  },
  time_37: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_41: {
    height: 50,
    width: 50
  },
  group_38: {

  },
  _34pm: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  CatchupwithDave: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 40
  },
  avatar_30: {

  },
  _4: {
    width: 325,
    height: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_15: {
    height: 325,
    backgroundColor: '#FFFFFF10',
    width: 325,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    height: 325,
    backgroundColor: '#50D2C2',
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
  _7pm: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 105
  },
  DinnerwithAndrea: {
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
    alignSelf: 'flex-start',
    marginTop: 94,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_105: {
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
  group_122: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_126: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_143: {
    height: 50,
    width: 50
  },
  group_134: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_132: {
    height: 50,
    width: 50
  },
  group_128: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_119: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_111: {
    height: 49,
    width: 50
  },
  group_107: {

  }
})
