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

import avatar from './6-Overview_images/avatar.png'
import group_69 from './6-Overview_images/group_69.png'
import left from './6-Overview_images/left.png'
import right from './6-Overview_images/right.png'
import lines from './6-Overview_images/lines.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._6Overview}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.bg}>
              <View style={styles.navbar}>
                <View style={styles.bounds_62}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={avatar} style={styles.avatar} />
                      <View style={styles.notification} />
                    </Image>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_73} />
                        <Image source={group_69} style={styles.group_69} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={left} style={styles.left} />
                  <Image source={right} style={styles.right} />
                  <Text style={styles.JANUARY2015}>
                    <Text>JANUARY 201</Text>{'\n'}
                    <Text>5</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.snoozed_43}>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.Snoozed}>
                        <Text>Snooze</Text>{'\n'}
                        <Text>d</Text>{'\n'}
                      </Text>
                      <Text style={styles._37}>
                        <Text>3</Text>{'\n'}
                        <Text>7</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.oval_44} />
                </View>
                <View style={styles.completed_39}>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.Completed}>
                        <Text>Complete</Text>{'\n'}
                        <Text>d</Text>{'\n'}
                      </Text>
                      <Text style={styles._54}>
                        <Text>5</Text>{'\n'}
                        <Text>4</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.oval_40} />
                </View>
                <View style={styles.overdue_35}>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles._12}>
                        <Text>1</Text>{'\n'}
                        <Text>2</Text>{'\n'}
                      </Text>
                      <Text style={styles.Overdue}>
                        <Text>Overdu</Text>{'\n'}
                        <Text>e</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.oval} />
                </View>
              </View>
              <View style={styles.mask_13} />
            </View>
            <View style={styles.tabs}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Monthly}>
                  <Text>Monthl</Text>{'\n'}
                  <Text>y</Text>{'\n'}
                </Text>
                <Text style={styles.Weekly}>
                  <Text>Weekl</Text>{'\n'}
                  <Text>y</Text>{'\n'}
                </Text>
                <Text style={styles.Custom}>
                  <Text>Custo</Text>{'\n'}
                  <Text>m</Text>{'\n'}
                </Text>
              </View>
            </View>
            <View style={styles.chart}>
              <View style={styles.charts}>
                <View style={styles.dates}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles._1}>1</Text>
                    <Text style={styles._5}>5</Text>
                    <Text style={styles._10}>10</Text>
                    <Text style={styles._15}>15</Text>
                    <Text style={styles._20}>20</Text>
                    <Text style={styles._25}>25</Text>
                    <Text style={styles._30}>30</Text>
                  </View>
                  <Image source={lines} style={styles.lines} />
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
  _6Overview: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: 'url(#linearGradient-1)',
    height: 1389
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 11,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 11
  },
  bounds_62: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    alignItems: 'flex-end',
    marginRight: 3,
    justifyContent: 'flex-start',
    marginTop: 11
  },
  notification: {
    height: 10,
    backgroundColor: '#FF005E',
    borderRadius: 5,
    width: 10
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  monthpicker: {
    alignSelf: 'flex-start',
    marginLeft: 44,
    marginTop: 165,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {

  },
  right: {

  },
  JANUARY2015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  snoozed_43: {
    width: 106,
    height: 256
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF'
  },
  _37: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF'
  },
  oval_44: {
    alignSelf: 'center',
    marginTop: 69,
    width: 50,
    height: 50
  },
  completed_39: {
    width: 135,
    height: 256
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF'
  },
  _54: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  oval_40: {
    alignSelf: 'center',
    marginTop: 69,
    width: 50,
    height: 50
  },
  overdue_35: {
    width: 108,
    height: 256
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF'
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF'
  },
  oval: {
    alignSelf: 'flex-end',
    marginRight: 24,
    marginTop: 69,
    width: 50,
    height: 50
  },
  mask_13: {
    alignSelf: 'flex-start',
    marginLeft: 11,
    marginTop: 50
  },
  tabs: {
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Monthly: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Weekly: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Custom: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  chart: {
    height: 619,
    alignItems: 'center',
    justifyContent: 'center'
  },
  charts: {
    alignItems: 'flex-start',
    marginLeft: 535,
    justifyContent: 'flex-end',
    marginBottom: 104
  },
  dates: {
    height: 58
  },
  _1: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'left'
  },
  _5: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'left',
    marginLeft: 106
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'left',
    marginLeft: 205
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'center'
  },
  _20: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'right',
    marginRight: 215
  },
  _25: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'right',
    marginRight: 109
  },
  _30: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: 'none',
    textAlign: 'right'
  },
  lines: {
    alignSelf: 'center',
    marginTop: 2
  }
})
