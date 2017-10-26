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

import group_96 from './10-Profile_images/group_96.png'
import group_91 from './10-Profile_images/group_91.png'
import select from './10-Profile_images/select.png'
import group_85 from './10-Profile_images/group_85.png'
import _1_71 from './10-Profile_images/_1_71.png'
import _2_67 from './10-Profile_images/_2_67.png'
import _3_63 from './10-Profile_images/_3_63.png'
import _4_59 from './10-Profile_images/_4_59.png'
import _5 from './10-Profile_images/_5.png'
import _6_51 from './10-Profile_images/_6_51.png'
import _7 from './10-Profile_images/_7.png'
import _8 from './10-Profile_images/_8.png'
import _9_39 from './10-Profile_images/_9_39.png'
import _10 from './10-Profile_images/_10.png'
import completed from './10-Profile_images/completed.png'
import snoozed from './10-Profile_images/snoozed.png'
import overdue from './10-Profile_images/overdue.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._10Profile}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_89}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_100} />
                          <Image source={group_96} style={styles.group_96} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_94} />
                          <Image source={group_91} style={styles.group_91} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.NicoleJames}>Nicole James</Text>
              </View>
              <View style={styles.monthpicker}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={select} style={styles.select} />
                  <Text style={styles.FEBRUARY}>FEBRUARY</Text>
                  <Text style={styles._2015}>2015</Text>
                </View>
              </View>
              <View style={styles.options}>
                <View style={styles.bg_84}>
                  <Image source={group_85} style={styles.group_85} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.graph}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={_1_71} style={styles._1_71} />
              <Image source={_2_67} style={styles._2_67} />
              <Image source={_3_63} style={styles._3_63} />
              <Image source={_4_59} style={styles._4_59} />
              <Image source={_5} style={styles._5} />
              <Image source={_6_51} style={styles._6_51} />
              <Image source={_7} style={styles._7} />
              <Image source={_8} style={styles._8} />
              <Image source={_9_39} style={styles._9_39} />
              <Image source={_10} style={styles._10} />
            </View>
            <View style={styles.dates}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._1_25}>1</Text>
                <Text style={styles._3_26}>3</Text>
                <Text style={styles._6}>6</Text>
                <Text style={styles._9}>9</Text>
                <Text style={styles._12}>12</Text>
                <Text style={styles._15}>15</Text>
                <Text style={styles._18}>18</Text>
                <Text style={styles._21}>21</Text>
                <Text style={styles._24}>24</Text>
                <Text style={styles._27}>27</Text>
              </View>
            </View>
          </View>
          <View style={styles.stats}>
            <View style={styles.bg}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles._1}>
                  <Text style={styles._57}>57</Text>
                  <Text style={styles.COMPLETED}>COMPLETED</Text>
                  <Image source={completed} style={styles.completed} />
                </View>
                <View style={styles._2}>
                  <Text style={styles._19}>19</Text>
                  <Text style={styles.SNOOZED}>SNOOZED</Text>
                  <Image source={snoozed} style={styles.snoozed} />
                </View>
                <View style={styles._3}>
                  <Text style={styles._4}>4</Text>
                  <Text style={styles.OVERDUE}>OVERDUE</Text>
                  <Image source={overdue} style={styles.overdue} />
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
  _10Profile: {

  },
  header: {
    backgroundColor: '#1D1D26',
    height: 501,
    paddingTop: 35,
    paddingBottom: 54
  },
  navbar: {
    alignSelf: 'flex-end',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_89: {
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
  bounds_100: {
    height: 50,
    width: 50
  },
  group_96: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_94: {
    height: 50,
    width: 50
  },
  group_91: {

  },
  NicoleJames: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 64,
    marginTop: 202,
    textAlign: 'left'
  },
  monthpicker: {
    width: 253,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  select: {

  },
  FEBRUARY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _2015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 62
  },
  options: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_84: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_85: {

  },
  graph: {
    alignSelf: 'flex-end',
    marginRight: 63,
    marginTop: 95,
    height: 467
  },
  _1_71: {

  },
  _2_67: {

  },
  _3_63: {

  },
  _4_59: {

  },
  _5: {

  },
  _6_51: {

  },
  _7: {

  },
  _8: {

  },
  _9_39: {

  },
  _10: {

  },
  dates: {
    alignSelf: 'center',
    marginTop: 33,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_25: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _3_26: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 68
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 135
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 202
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 263
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 272
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 205
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 138
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 71
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  stats: {
    alignSelf: 'flex-end',
    marginTop: 40,
    height: 264,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  bg: {
    height: 264,
    backgroundColor: '#1D1D26',
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1: {
    width: 149,
    height: 163
  },
  _57: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 1
  },
  completed: {
    alignSelf: 'center',
    marginTop: 23
  },
  _2: {
    width: 120,
    height: 163
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 1
  },
  snoozed: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 23
  },
  _3: {
    width: 115,
    height: 163
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 1
  },
  overdue: {
    alignSelf: 'center',
    marginTop: 23
  }
})
