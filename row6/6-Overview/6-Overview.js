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

import group_81 from './6-Overview_images/group_81.png'
import group_75 from './6-Overview_images/group_75.png'
import active from './6-Overview_images/active.png'
import left from './6-Overview_images/left.png'
import group_90 from './6-Overview_images/group_90.png'
import filled_62 from './6-Overview_images/filled_62.png'
import filled_56 from './6-Overview_images/filled_56.png'
import filled from './6-Overview_images/filled.png'
import group_38 from './6-Overview_images/group_38.png'
import group_32 from './6-Overview_images/group_32.png'
import group from './6-Overview_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.headerbg}>
            <View style={styles.navbar}>
              <View style={styles.bounds_73}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_85} />
                      <Image source={group_81} style={styles.group_81} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_78} />
                      <Image source={group_75} style={styles.group_75} />
                    </View>
                  </View>
                  <Text style={styles.Overview}>Overview</Text>
                </View>
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
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.January}>January</Text>
              <Image source={left} style={styles.left} />
              <View style={styles.right}>
                <Image source={group_90} style={styles.group_90} />
              </View>
            </View>
          </View>
          <View style={styles.completed}>
            <View style={{flexDirection: 'row'}}>
              <Image source={filled_62} style={styles.filled_62} />
              <Text style={styles.COMPLETED}>COMPLETED</Text>
              <Text style={styles._132}>132</Text>
              <Text style={styles._50}>50%</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.snoozed}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles._93}>93</Text>
                  <Text style={styles._35}>35%</Text>
                  <Image source={filled_56} style={styles.filled_56} />
                </View>
              </View>
              <Text style={styles.SNOOZED}>SNOOZED</Text>
            </View>
            <View style={styles.overdue}>
              <Image source={filled} style={styles.filled} />
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles._40}>40</Text>
                  <Text style={styles._15}>15%</Text>
                </View>
              </View>
              <Text style={styles.OVERDUE}>OVERDUE</Text>
            </View>
          </View>
          <View style={styles.tabbar}>
            <View style={styles.bg_9}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.add}>
                  <View style={styles.group_26}>
                    <View style={styles.bounds_30} />
                  </View>
                </View>
                <View style={styles.calendar}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_47} />
                    <Image source={group_38} style={styles.group_38} />
                  </View>
                </View>
                <View style={styles.overview}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_36} />
                    <Image source={group_32} style={styles.group_32} />
                  </View>
                </View>
                <View style={styles.lists}>
                  <View style={styles.bounds_23} />
                </View>
                <View style={styles.timeline}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={group} style={styles.group} />
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
  headerbg: {
    height: 240,
    backgroundColor: '#FFFFFF10',
    alignSelf: 'flex-start',
    paddingBottom: 31
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_73: {
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
  bounds_85: {
    height: 50,
    width: 50
  },
  group_81: {

  },
  search: {
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
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  tabs: {
    alignSelf: 'flex-end',
    marginTop: 51,
    height: 58
  },
  DAY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  WEEK: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 239
  },
  MONTH: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 80
  },
  active: {
    alignSelf: 'flex-end',
    marginTop: 28
  },
  monthpicker: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 30,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  January: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
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
  group_90: {

  },
  completed: {
    alignSelf: 'flex-start',
    marginLeft: 175,
    marginTop: 66,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filled_62: {

  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _132: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _50: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  snoozed: {
    width: 200,
    height: 262
  },
  _93: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF'
  },
  _35: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  filled_56: {

  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 69,
    textAlign: 'center'
  },
  overdue: {
    width: 200,
    height: 261
  },
  filled: {
    alignSelf: 'flex-end'
  },
  _40: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 89,
    textAlign: 'center'
  },
  tabbar: {
    alignSelf: 'flex-start',
    marginTop: 70,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_9: {
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
  group_26: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_30: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_47: {
    height: 50,
    width: 50
  },
  group_38: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_36: {
    height: 50,
    width: 50
  },
  group_32: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_23: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 49,
    width: 50
  },
  group: {

  }
})
