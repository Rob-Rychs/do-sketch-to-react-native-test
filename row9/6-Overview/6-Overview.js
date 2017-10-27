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

import group_60 from './6-Overview_images/group_60.png'
import group_54 from './6-Overview_images/group_54.png'
import active from './6-Overview_images/active.png'
import line from './6-Overview_images/line.png'
import left from './6-Overview_images/left.png'
import group from './6-Overview_images/group.png'
import chart_21 from './6-Overview_images/chart_21.png'
import chart from './6-Overview_images/chart.png'
import chart_14 from './6-Overview_images/chart_14.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._6Overview}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_52}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_64} />
                          <Image source={group_60} style={styles.group_60} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_57} />
                          <Image source={group_54} style={styles.group_54} />
                        </View>
                      </View>
                      <Text style={styles.Overview}>Overview</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tabs}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.WEEK}>
                      <Text>WEE</Text>{'\n'}
                      <Text>K</Text>{'\n'}
                    </Text>
                    <Text style={styles.MONTH}>
                      <Text>MONT</Text>{'\n'}
                      <Text>H</Text>{'\n'}
                    </Text>
                    <Text style={styles.YEAR}>
                      <Text>YEA</Text>{'\n'}
                      <Text>R</Text>{'\n'}
                    </Text>
                  </View>
                  <Image source={active} style={styles.active} />
                </View>
                <View style={styles.graph}>
                  <View style={styles.bg}>
                    <View style={styles.group_43}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_45} />
                        <Image source={line} style={styles.line} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.March}>March</Text>
                  <Image source={left} style={styles.left} />
                  <View style={styles.right}>
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.completed}>
            <Image source={chart_21} style={styles.chart_21} />
              <Text style={styles._128}>128</Text>
            </Image>
            <Text style={styles.COMPLETED}>
              <Text>COMPLETE</Text>{'\n'}
              <Text>D</Text>{'\n'}
            </Text>
            <Text style={styles._64}>64%</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.snoozed}>
              <Image source={chart} style={styles.chart} />
                <Text style={styles._48}>48</Text>
              </Image>
              <Text style={styles.SNOOZED}>SNOOZED</Text>
              <Text style={styles._24}>24%</Text>
            </View>
            <View style={styles.snoozed_13}>
              <Image source={chart_14} style={styles.chart_14} />
                <Text style={styles._24_19}>24</Text>
              </Image>
              <Text style={styles.OVERDUE}>OVERDUE</Text>
              <Text style={styles._12}>12%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _6Overview: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    height: 502,
    paddingTop: 10,
    paddingBottom: 107
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 26,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_52: {
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
  bounds_64: {
    height: 50,
    width: 50
  },
  group_60: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_57: {
    height: 50,
    width: 50
  },
  group_54: {

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
    alignSelf: 'center',
    marginTop: 72,
    height: 40
  },
  WEEK: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 3
  },
  MONTH: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  YEAR: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginTop: 10
  },
  graph: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 45,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_43: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_45: {
    height: 50,
    width: 50
  },
  line: {

  },
  monthpicker: {
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
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
  group: {

  },
  completed: {
    alignSelf: 'flex-end',
    marginRight: 235,
    width: 329,
    height: 374
  },
  chart_21: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 48
  },
  _128: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 12,
    textAlign: 'center'
  },
  snoozed: {
    width: 176,
    height: 248
  },
  chart: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 21
  },
  _48: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 12,
    textAlign: 'center'
  },
  snoozed_13: {
    width: 176,
    height: 248
  },
  chart_14: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 21
  },
  _24_19: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 12,
    textAlign: 'center'
  }
})
