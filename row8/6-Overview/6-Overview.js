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

import group_90 from './6-Overview_images/group_90.png'
import group_84 from './6-Overview_images/group_84.png'
import left from './6-Overview_images/left.png'
import group from './6-Overview_images/group.png'
import lines from './6-Overview_images/lines.png'
import chart_24 from './6-Overview_images/chart_24.png'
import chart_17 from './6-Overview_images/chart_17.png'
import chart from './6-Overview_images/chart.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.navbar}>
                <View style={styles.bounds_82}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_94} />
                        <Image source={group_90} style={styles.group_90} />
                      </View>
                    </View>
                    <View style={styles.search}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_87} />
                        <Image source={group_84} style={styles.group_84} />
                      </View>
                    </View>
                    <Text style={styles.Overview}>Overview</Text>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={styles.bg_70}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={left} style={styles.left} />
                    <Text style={styles.January}>January</Text>
                    <View style={styles.right}>
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._2015}>2015</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.days}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._1_68}>1</Text>
              <Text style={styles._5_67}>5</Text>
              <Text style={styles._10}>10</Text>
              <Text style={styles._15}>15</Text>
              <Text style={styles._20}>20</Text>
              <Text style={styles._25}>25</Text>
              <Text style={styles._30}>30</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.completd} />
              <View style={styles.snoozed_37} />
              <View style={styles.overdue_53} />
              <Image source={lines} style={styles.lines} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.snoozed}>
              <Text style={styles._37}>
                <Text>3</Text>{'\n'}
                <Text>7</Text>{'\n'}
              </Text>
              <Text style={styles.Snoozed}>SNOOZED</Text>
              <Image source={chart_24} style={styles.chart_24} />
            </View>
            <View style={styles.completed}>
              <Text style={styles._54}>
                <Text>5</Text>{'\n'}
                <Text>4</Text>{'\n'}
              </Text>
              <Text style={styles.Completed}>COMPLETED</Text>
              <Image source={chart_17} style={styles.chart_17} />
            </View>
            <View style={styles.overdue}>
              <Text style={styles._12}>
                <Text>1</Text>{'\n'}
                <Text>2</Text>{'\n'}
              </Text>
              <Text style={styles.Overdue}>OVERDUE</Text>
              <Image source={chart} style={styles.chart} />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_82: {
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
  bounds_94: {
    height: 50,
    width: 50
  },
  group_90: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_87: {
    height: 50,
    width: 50
  },
  group_84: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60
  },
  bg_70: {
    height: 250,
    backgroundColor: '#FFFFFF05'
  },
  left: {

  },
  January: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  right: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {

  },
  _2015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  days: {
    alignSelf: 'center',
    height: 31,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_68: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _5_67: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 106
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 206
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 215
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 109
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  completd: {
    height: 91
  },
  snoozed_37: {
    height: 125
  },
  overdue_53: {
    height: 90
  },
  lines: {

  },
  snoozed: {
    width: 119,
    height: 232
  },
  _37: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 1
  },
  chart_24: {
    alignSelf: 'center',
    marginTop: 32
  },
  completed: {
    width: 147,
    height: 232
  },
  _54: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 1
  },
  chart_17: {
    alignSelf: 'center',
    marginTop: 32
  },
  overdue: {
    width: 114,
    height: 232
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 1
  },
  chart: {
    alignSelf: 'center',
    marginTop: 32
  }
})
