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

import bgoverlay from './5-Calendar_images/bgoverlay.png'
import group_155 from './5-Calendar_images/group_155.png'
import group_145 from './5-Calendar_images/group_145.png'
import line_133 from './5-Calendar_images/line_133.png'
import line_129 from './5-Calendar_images/line_129.png'
import line_127 from './5-Calendar_images/line_127.png'
import line_124 from './5-Calendar_images/line_124.png'
import line_121 from './5-Calendar_images/line_121.png'
import line_114 from './5-Calendar_images/line_114.png'
import line_118 from './5-Calendar_images/line_118.png'
import line_116 from './5-Calendar_images/line_116.png'
import line_108 from './5-Calendar_images/line_108.png'
import line_104 from './5-Calendar_images/line_104.png'
import line_102 from './5-Calendar_images/line_102.png'
import line_99 from './5-Calendar_images/line_99.png'
import line_96 from './5-Calendar_images/line_96.png'
import line_93 from './5-Calendar_images/line_93.png'
import line_90 from './5-Calendar_images/line_90.png'
import line_88 from './5-Calendar_images/line_88.png'
import line_84 from './5-Calendar_images/line_84.png'
import line_74 from './5-Calendar_images/line_74.png'
import avatar_49 from './5-Calendar_images/avatar_49.png'
import avatar_45 from './5-Calendar_images/avatar_45.png'
import avatar from './5-Calendar_images/avatar.png'
import line_66 from './5-Calendar_images/line_66.png'
import line_59 from './5-Calendar_images/line_59.png'
import line from './5-Calendar_images/line.png'
import group_26 from './5-Calendar_images/group_26.png'
import group from './5-Calendar_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={styles.navbar}>
            <View style={styles.bounds_143}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_158} />
                    <Image source={group_155} style={styles.group_155} />
                  </View>
                </View>
                <View style={styles.settings}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_152} />
                    <Image source={group_145} style={styles.group_145} />
                  </View>
                </View>
                <Text style={styles.MARCH102015}>MARCH 10, 2015</Text>
              </View>
            </View>
          </View>
          <View style={styles.calendar_75}>
            <View style={styles.days}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Sun}>Sun</Text>
                <Text style={styles.Mon}>Mon</Text>
                <Text style={styles.Tue}>Tue</Text>
                <Text style={styles.Wed}>Wed</Text>
                <Text style={styles.Thu}>Thu</Text>
                <Text style={styles.Fri}>Fri</Text>
                <Text style={styles.Sat}>Sat</Text>
              </View>
            </View>
            <Image source={line_133} style={styles.line_133} />
            <View style={styles.dates_122}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._1_132}>1</Text>
                <Text style={styles._2_131}>2</Text>
                <Text style={styles._3_130}>3</Text>
                <Text style={styles._4_128}>4</Text>
                <Text style={styles._5_126}>5</Text>
                <Text style={styles._6}>6</Text>
                <Text style={styles._7}>7</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={line_129} style={styles.line_129} />
                <Image source={line_127} style={styles.line_127} />
                <Image source={line_124} style={styles.line_124} />
              </View>
            </View>
            <Image source={line_121} style={styles.line_121} />
            <View style={styles.dates_109}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.selected}>
                  <Text style={styles._12}>12</Text>
                  <Image source={line_114} style={styles.line_114} />
                </View>
                <Text style={styles._8_120}>8</Text>
                <Text style={styles._9}>9</Text>
                <Text style={styles._10_117}>10</Text>
                <Text style={styles._11}>11</Text>
                <Text style={styles._13}>13</Text>
                <Text style={styles._14}>14</Text>
                <Image source={line_118} style={styles.line_118} />
                <Image source={line_116} style={styles.line_116} />
              </View>
            </View>
            <Image source={line_108} style={styles.line_108} />
            <View style={styles.dates_97}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._15}>15</Text>
                <Text style={styles._16}>16</Text>
                <Text style={styles._17}>17</Text>
                <Text style={styles._18}>18</Text>
                <Text style={styles._19}>19</Text>
                <Text style={styles._20}>20</Text>
                <Text style={styles._21}>21</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={line_104} style={styles.line_104} />
                <Image source={line_102} style={styles.line_102} />
                <Image source={line_99} style={styles.line_99} />
              </View>
            </View>
            <Image source={line_96} style={styles.line_96} />
            <View style={styles.dates_85}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._22}>22</Text>
                <Text style={styles._23}>23</Text>
                <Text style={styles._24}>24</Text>
                <Text style={styles._25}>25</Text>
                <Text style={styles._26}>26</Text>
                <Text style={styles._27}>27</Text>
                <Text style={styles._28}>28</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={line_93} style={styles.line_93} />
                <Image source={line_90} style={styles.line_90} />
                <Image source={line_88} style={styles.line_88} />
              </View>
            </View>
            <Image source={line_84} style={styles.line_84} />
            <View style={styles.dates}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._29}>29</Text>
                <Text style={styles._30_82}>30</Text>
                <Text style={styles._1_81}>1</Text>
                <Text style={styles._2_80}>2</Text>
                <Text style={styles._3_79}>3</Text>
                <Text style={styles._4}>4</Text>
                <Text style={styles._5}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.mask} />
          <Image source={line_74} style={styles.line_74} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.events}>
                <View style={styles._1}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.time_68}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles._8}>8</Text>
                        <Text style={styles._30}>30</Text>
                        <Text style={styles.AM_69}>AM</Text>
                      </View>
                    </View>
                    <Text style={styles.Designexplorations}>Design explorations</Text>
                    <Text style={styles.WebApp}>
                      <Text>Web Ap</Text>{'\n'}
                      <Text>p</Text>{'\n'}
                    </Text>
                  </View>
                </View>
                <View style={styles._2_60}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.time_61}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles._10}>10</Text>
                        <Text style={styles._00_63}>00</Text>
                        <Text style={styles.AM}>AM</Text>
                      </View>
                    </View>
                    <Text style={styles.CoffeeBreak}>Coffee Break</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={styles._3}>
                      <View style={styles._3_40}>
                        <Text style={styles.WeeklyStandUp}>Weekly Stand Up</Text>
                        <Text style={styles.Hangouts}>
                          <Text>Hangout</Text>{'\n'}
                          <Text>s</Text>{'\n'}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Image source={avatar_49} style={styles.avatar_49} />
                          <Image source={avatar_45} style={styles.avatar_45} />
                          <Image source={avatar} style={styles.avatar} />
                        </View>
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
              </View>
              <Image source={line_66} style={styles.line_66} />
              <Image source={line_59} style={styles.line_59} />
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
  bounds_143: {
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
  bounds_158: {
    height: 50,
    width: 50
  },
  group_155: {

  },
  settings: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_152: {
    height: 50,
    width: 50
  },
  group_145: {

  },
  MARCH102015: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  calendar_75: {
    alignSelf: 'center',
    marginTop: 41,
    height: 523
  },
  days: {
    alignSelf: 'center',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Sun: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Mon: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 94
  },
  Tue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 196
  },
  Wed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Thu: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 194
  },
  Fri: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 103
  },
  Sat: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 0
  },
  line_133: {
    alignSelf: 'center',
    marginTop: 21
  },
  dates_122: {
    alignSelf: 'flex-start',
    marginLeft: 67,
    marginTop: 79,
    height: 48
  },
  _1_132: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _2_131: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _3_130: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _4_128: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _5_126: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _6: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_129: {

  },
  line_127: {

  },
  line_124: {

  },
  line_121: {
    alignSelf: 'center',
    marginTop: 20
  },
  dates_109: {
    alignSelf: 'center',
    marginTop: 2,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 95,
    width: 95,
    paddingTop: 29,
    paddingBottom: 18
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  line_114: {
    alignSelf: 'center',
    marginTop: 4
  },
  _8_120: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _10_117: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 192
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_118: {

  },
  line_116: {

  },
  line_108: {
    alignSelf: 'center',
    marginTop: 2
  },
  dates_97: {
    alignSelf: 'center',
    marginTop: 79,
    height: 48
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _17: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _19: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_104: {

  },
  line_102: {

  },
  line_99: {

  },
  line_96: {
    alignSelf: 'center',
    marginTop: 20
  },
  dates_85: {
    alignSelf: 'center',
    marginTop: 79,
    height: 48
  },
  _22: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _23: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 198
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _27: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_93: {

  },
  line_90: {

  },
  line_88: {

  },
  line_84: {
    alignSelf: 'center',
    marginTop: 20
  },
  dates: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 31,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _29: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _30_82: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 99
  },
  _1_81: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 204
  },
  _2_80: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _3_79: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 196
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 97
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  mask: {
    alignSelf: 'flex-start',
    marginTop: 42
  },
  line_74: {
    alignSelf: 'center',
    marginTop: 1
  },
  events: {
    height: 483
  },
  _1: {
    alignSelf: 'center',
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time_68: {
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
  AM_69: {
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
  _2_60: {
    alignSelf: 'center',
    marginTop: 56,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time_61: {
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
  _00_63: {
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
  _3: {
    height: 179,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 0
  },
  _3_40: {
    width: 250
  },
  WeeklyStandUp: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center'
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
  avatar_49: {

  },
  avatar_45: {

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
  line_66: {

  },
  line_59: {

  },
  tabbar: {
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
