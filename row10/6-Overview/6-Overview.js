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

import bgoverlay from './6-Overview_images/bgoverlay.png'
import group_101 from './6-Overview_images/group_101.png'
import left from './6-Overview_images/left.png'
import right from './6-Overview_images/right.png'
import Line from './6-Overview_images/Line.png'
import line_72 from './6-Overview_images/line_72.png'
import line_68 from './6-Overview_images/line_68.png'
import line_63 from './6-Overview_images/line_63.png'
import _9 from './6-Overview_images/_9.png'
import _4 from './6-Overview_images/_4.png'
import _10 from './6-Overview_images/_10.png'
import _1 from './6-Overview_images/_1.png'
import _3 from './6-Overview_images/_3.png'
import _7 from './6-Overview_images/_7.png'
import _8 from './6-Overview_images/_8.png'
import _2 from './6-Overview_images/_2.png'
import _5 from './6-Overview_images/_5.png'
import _6 from './6-Overview_images/_6.png'
import line from './6-Overview_images/line.png'
import group_22 from './6-Overview_images/group_22.png'
import group from './6-Overview_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={styles.navbar}>
            <View style={styles.bounds_90}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_104} />
                    <Image source={group_101} style={styles.group_101} />
                  </View>
                </View>
                <Image source={left} style={styles.left} />
                <Image source={right} style={styles.right} />
                <Text style={styles.MARCH2015}>MARCH 2015</Text>
              </View>
            </View>
          </View>
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Day}>Day</Text>
              <Text style={styles.Week}>Week</Text>
              <Text style={styles.Month}>Month</Text>
                <Image source={Line} style={styles.Line} />
              </View>
            </View>
          </View>
          <Image source={line_72} style={styles.line_72} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.completed}>
              <Text style={styles._36}>36</Text>
              <Text style={styles.COMPLETED}>COMPLETED</Text>
            </View>
            <Image source={line_68} style={styles.line_68} />
            <View style={styles.overdue}>
              <Text style={styles._4_67}>4</Text>
              <Text style={styles.OVERDUE}>OVERDUE</Text>
              <View style={styles.overdude} />
            </View>
          </View>
          <Image source={line_63} style={styles.line_63} />
          <View style={styles.graph}>
            <View style={{flexDirection: 'row'}}>
              <Image source={_9} style={styles._9} />
              <Image source={_4} style={styles._4} />
              <Image source={_10} style={styles._10} />
              <Image source={_1} style={styles._1} />
              <Image source={_3} style={styles._3} />
              <Image source={_7} style={styles._7} />
              <Image source={_8} style={styles._8} />
              <Image source={_2} style={styles._2} />
              <Image source={_5} style={styles._5} />
              <Image source={_6} style={styles._6} />
            </View>
          </View>
          <View style={styles.dates}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._1_88}>1</Text>
              <Text style={styles._3_87}>3</Text>
              <Text style={styles._6_86}>6</Text>
              <Text style={styles._9_85}>9</Text>
              <Text style={styles._12}>12</Text>
              <Text style={styles._15}>15</Text>
              <Text style={styles._18}>18</Text>
              <Text style={styles._21}>21</Text>
              <Text style={styles._24}>24</Text>
              <Text style={styles._27}>27</Text>
            </View>
          </View>
          <View style={styles.tabbar}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.add}>
                <View style={styles.bg_17}>
                  <View style={styles.group_18}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_20} />
                      <Image source={line} style={styles.line} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.calendar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_31} />
                  <Image source={group_22} style={styles.group_22} />
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
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_90: {
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
  bounds_104: {
    height: 50,
    width: 50
  },
  group_101: {

  },
  left: {

  },
  right: {

  },
  MARCH2015: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 50,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Day: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FAFAFA',
    textAlign: 'left'
  },
  Week: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FAFAFA',
    textAlign: 'left',
    marginLeft: 191
  },
  Month: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FAFAFA',
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 2
  },
  Line: {

  },
  line_72: {
    alignSelf: 'center',
    marginTop: 43
  },
  completed: {
    width: 148,
    height: 252,
    paddingBottom: 52
  },
  _36: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6
  },
  line_68: {

  },
  overdue: {
    width: 114,
    height: 252
  },
  _4_67: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6
  },
  overdude: {
    height: 20,
    alignSelf: 'center',
    marginTop: 32,
    width: 20
  },
  line_63: {
    alignSelf: 'center',
    marginTop: 1
  },
  graph: {
    alignSelf: 'center',
    marginTop: 61,
    height: 398,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _9: {

  },
  _4: {

  },
  _10: {

  },
  _1: {

  },
  _3: {

  },
  _7: {

  },
  _8: {

  },
  _2: {

  },
  _5: {

  },
  _6: {

  },
  dates: {
    alignSelf: 'center',
    marginTop: 22,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_88: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _3_87: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 63
  },
  _6_86: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 126
  },
  _9_85: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 189
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 246
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 252
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 189
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 126
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 63
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  tabbar: {
    alignSelf: 'center',
    marginTop: 67,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_17: {
    backgroundColor: '#FFFFFF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_18: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_20: {
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
  bounds_31: {
    height: 50,
    width: 50
  },
  group_22: {

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
