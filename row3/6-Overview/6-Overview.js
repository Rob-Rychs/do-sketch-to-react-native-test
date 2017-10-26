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

import group_75 from './6-Overview_images/group_75.png'
import group_69 from './6-Overview_images/group_69.png'
import left from './6-Overview_images/left.png'
import right from './6-Overview_images/right.png'
import line_31 from './6-Overview_images/line_31.png'
import avatar_23 from './6-Overview_images/avatar_23.png'
import avatar_19 from './6-Overview_images/avatar_19.png'
import avatar from './6-Overview_images/avatar.png'
import line from './6-Overview_images/line.png'
import active from './6-Overview_images/active.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bg}>
            <View style={styles.navbar}>
              <View style={styles.bounds_63}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_79} />
                      <Image source={group_75} style={styles.group_75} />
                    </View>
                  </View>
                  <View style={styles.add}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_72} />
                      <Image source={group_69} style={styles.group_69} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={styles.bounds_67} />
                  </View>
                  <Text style={styles.Overview}>
                    <Text>Overvie</Text>{'\n'}
                    <Text>w</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.monthpicker}>
                  <View style={styles.bg_47}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.February}>
                        <Text>Februar</Text>{'\n'}
                        <Text>y</Text>{'\n'}
                      </Text>
                      <Image source={left} style={styles.left} />
                      <Image source={right} style={styles.right} />
                    </View>
                  </View>
                </View>
                <View style={styles.completed_42}>
                  <View style={styles.bg_43}>
                    <Text style={styles.Completed}>COMPLETED</Text>
                    <Text style={styles._64}>
                      <Text>6</Text>{'\n'}
                      <Text>4</Text>{'\n'}
                    </Text>
                  </View>
                </View>
                <View style={styles.overdue_38}>
                  <View style={styles.bg_39}>
                    <Text style={styles.Overdue}>OVERDUE</Text>
                    <Text style={styles._5}>5</Text>
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
                <Text style={styles.AM_36}>AM</Text>
                <Text style={styles.NewIcons}>New Icons</Text>
              </View>
              <Text style={styles.MobileApp}>Mobile App</Text>
            </View>
            <Image source={line_31} style={styles.line_31} />
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
                <Image source={avatar_23} style={styles.avatar_23} />
                <Image source={avatar_19} style={styles.avatar_19} />
                <Image source={avatar} style={styles.avatar} />
              </View>
            </View>
            <Image source={line} style={styles.line} />
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._200}>
                  <Text>2:0</Text>{'\n'}
                  <Text>0</Text>{'\n'}
                </Text>
                <Text style={styles.PM}>PM</Text>
                <Text style={styles.FinishHomeScreen}>Finish Home Screen</Text>
              </View>
              <Text style={styles.WebApp}>Web App</Text>
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.DAY}>DAY</Text>
              <Text style={styles.WEEK}>WEEK</Text>
              <Text style={styles.MONTH}>MONTH</Text>
            </View>
            <Image source={active} style={styles.active} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    height: 1756,
    backgroundColor: '#FFFFFF'
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_63: {
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
  bounds_79: {
    height: 50,
    width: 50
  },
  group_75: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_72: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  monthpicker: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_47: {
    height: 200,
    backgroundColor: '#1D1D2603',
    alignItems: 'center',
    justifyContent: 'center'
  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  left: {

  },
  right: {

  },
  completed_42: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_43: {
    height: 240,
    backgroundColor: '#50D2C2',
    paddingTop: 50,
    paddingBottom: 31
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  overdue_38: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_39: {
    height: 240,
    backgroundColor: '#D667CD',
    paddingTop: 50,
    paddingBottom: 31
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 290,
    height: 85
  },
  _830: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  AM_36: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 77
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
  line_31: {
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
  avatar_23: {

  },
  avatar_19: {

  },
  avatar: {

  },
  line: {
    alignSelf: 'center',
    marginTop: 44
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 50,
    height: 85
  },
  _200: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  PM: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 77
  },
  FinishHomeScreen: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  WebApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 191,
    marginTop: 8,
    textAlign: 'left'
  },
  tabs: {
    height: 58
  },
  DAY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 102
  },
  WEEK: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 262
  },
  MONTH: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginTop: 28
  }
})
