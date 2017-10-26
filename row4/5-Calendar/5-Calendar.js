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

import shape_68 from './5-Calendar_images/shape_68.png'
import group_63 from './5-Calendar_images/group_63.png'
import active from './5-Calendar_images/active.png'
import line_76 from './5-Calendar_images/line_76.png'
import line_44 from './5-Calendar_images/line_44.png'
import group from './5-Calendar_images/group.png'
import line_31 from './5-Calendar_images/line_31.png'
import line_27 from './5-Calendar_images/line_27.png'
import line_20 from './5-Calendar_images/line_20.png'
import line_16 from './5-Calendar_images/line_16.png'
import line from './5-Calendar_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._5Calendar}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_61}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_72} />
                          <Image source={shape_68} style={styles.shape_68} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_66} />
                          <Image source={group_63} style={styles.group_63} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.date}>
                  <Text style={styles.Tuesday}>
                    <Text>Wednesda</Text>{'\n'}
                    <Text>y</Text>{'\n'}
                  </Text>
                  <Text style={styles.February182015}>
                    <Text>February 18, 201</Text>{'\n'}
                    <Text>5</Text>{'\n'}
                  </Text>
                </View>
                <View style={styles.filter}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.DAY}>DAY</Text>
                    <Text style={styles.WEEK}>WEEK</Text>
                    <Text style={styles.MONTH}>MONTH</Text>
                  </View>
                  <Image source={active} style={styles.active} />
                </View>
              </View>
              <View style={styles.time_45}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._11}>11</Text>
                  <Text style={styles.AM}>
                    <Text>A</Text>{'\n'}
                    <Text>M</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <View style={styles.add}>
                <View style={styles.bg_74}>
                  <View style={styles.group_75}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_77} />
                      <Image source={line_76} style={styles.line_76} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={line_44} style={styles.line_44} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.time_41}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._12}>12</Text>
                <Text style={styles.PM_42}>PM</Text>
              </View>
            </View>
            <View style={styles._1_32}>
              <View style={styles.bg_33}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.DesignMeeting}>Design Meeting</Text>
                  <View style={styles.repeat}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles.Hangouts}>
                    <Text>Hangout</Text>{'\n'}
                    <Text>s</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image source={line_31} style={styles.line_31} />
          <View style={styles.time_28}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles._1}>1</Text>
              <Text style={styles.PM_29}>PM</Text>
            </View>
          </View>
          <Image source={line_27} style={styles.line_27} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.time_24}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._2_26}>2</Text>
                <Text style={styles.PM_25}>PM</Text>
              </View>
            </View>
            <View style={styles._2}>
              <View style={styles.bg_22}>
                <Text style={styles.LunchBreak}>
                  <Text>Lunch Brea</Text>{'\n'}
                  <Text>k</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={line_20} style={styles.line_20} />
          <View style={styles.time_17}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles._3_19}>3</Text>
              <Text style={styles.PM_18}>PM</Text>
            </View>
          </View>
          <Image source={line_16} style={styles.line_16} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.time_13}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles._4}>4</Text>
                <Text style={styles.PM_14}>PM</Text>
              </View>
            </View>
            <View style={styles._3}>
              <View style={styles.bg}>
                <Text style={styles.CatchupwithTom}>
                  <Text>Catch up with To</Text>{'\n'}
                  <Text>m</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.time}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles._5}>5</Text>
              <Text style={styles.PM}>PM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _5Calendar: {

  },
  header: {
    backgroundColor: 'url(#linearGradient-1)',
    height: 469,
    paddingBottom: 77
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_61: {
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
  bounds_72: {
    height: 50,
    width: 50
  },
  shape_68: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  group_63: {

  },
  date: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 32,
    height: 133
  },
  Tuesday: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  February182015: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 4,
    textAlign: 'left'
  },
  filter: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 66,
    width: 330,
    height: 40
  },
  DAY: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  WEEK: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  MONTH: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginLeft: 2,
    marginTop: 7
  },
  time_45: {
    width: 52,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  AM: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_74: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_75: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_77: {
    height: 50,
    width: 50
  },
  line_76: {

  },
  line_44: {
    alignSelf: 'flex-start',
    marginLeft: 21
  },
  time_41: {
    width: 52,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM_42: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 2
  },
  _1_32: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 26
  },
  bg_33: {
    height: 130,
    backgroundColor: '#BA77FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  DesignMeeting: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 30
  },
  repeat: {
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
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 30
  },
  line_31: {
    alignSelf: 'flex-start',
    marginLeft: 21
  },
  time_28: {
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 20,
    width: 32,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM_29: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  line_27: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    marginTop: 44
  },
  time_24: {
    width: 32,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2_26: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM_25: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _2: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_22: {
    height: 130,
    backgroundColor: '#50D2C2',
    alignItems: 'flex-start',
    marginLeft: 30,
    justifyContent: 'flex-start',
    marginTop: 23
  },
  LunchBreak: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 30
  },
  line_20: {
    alignSelf: 'flex-start',
    marginLeft: 21
  },
  time_17: {
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 20,
    width: 32,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _3_19: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM_18: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  line_16: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    marginTop: 44
  },
  time_13: {
    width: 32,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM_14: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _3: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 65,
    backgroundColor: '#FCAB53',
    alignItems: 'flex-start',
    marginLeft: 30,
    justifyContent: 'center'
  },
  CatchupwithTom: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 30
  },
  line: {
    alignSelf: 'flex-start',
    marginLeft: 21,
    marginTop: 25
  },
  time: {
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 20,
    width: 32,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26'
  },
  PM: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26'
  }
})
