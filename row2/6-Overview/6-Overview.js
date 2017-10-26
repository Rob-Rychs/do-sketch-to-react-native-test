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
import group from './6-Overview_images/group.png'
import chart from './6-Overview_images/chart.png'
import line_22 from './6-Overview_images/line_22.png'
import line from './6-Overview_images/line.png'
import line_65 from './6-Overview_images/line_65.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bg}>
            <View style={styles.navbg}>
              <View style={styles.navbar}>
                <View style={styles.bounds}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={avatar} style={styles.avatar} />
                      <View style={styles.notification} />
                    </Image>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_61} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                    <Text style={styles.Overview}>Overview</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.piechart}>
              <View style={{flexDirection: 'row'}}>
                <Image source={chart} style={styles.chart} />
                <Text style={styles._265}>265</Text>
                <Text style={styles.TOTAL}>TOTAL </Text>
              </View>
            </View>
            <View style={styles.stats}>
              <View style={styles.completed}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._180}>180</Text>
                  <Text style={styles._68}>68%</Text>
                  <Text style={styles.Completed}>
                    <Text>COMPLETE</Text>{'\n'}
                    <Text>D</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <Image source={line_22} style={styles.line_22} />
              <View style={styles.snoozed}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._64}>64</Text>
                  <Text style={styles._24}>24%</Text>
                  <Text style={styles.Snoozed}>
                    <Text>SNOOZE</Text>{'\n'}
                    <Text>D</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <Image source={line} style={styles.line} />
              <View style={styles.overdue}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._21}>21</Text>
                  <Text style={styles._8}>8%</Text>
                  <Text style={styles.Overdue}>
                    <Text>OVERDU</Text>{'\n'}
                    <Text>E</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.add}>
              <View style={styles.bg_63}>
                <View style={styles.group_64}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_66} />
                    <Image source={line_65} style={styles.line_65} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.january}>
                <View style={styles.bg_46}>
                  <Text style={styles.January}>January</Text>
                </View>
              </View>
              <View style={styles.february}>
                <View style={styles.bg_43}>
                  <Text style={styles.February}>February</Text>
                </View>
              </View>
              <View style={styles.march}>
                <View style={styles.bg_40}>
                  <Text style={styles.March}>March</Text>
                </View>
              </View>
              <View style={styles.april}>
                <View style={styles.BG}>
                  <Text style={styles.April}>April</Text>
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
    backgroundColor: '#B574F5',
    paddingTop: 17,
    paddingBottom: 50
  },
  navbg: {
    height: 300,
    backgroundColor: '#BA77FF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 11
  },
  bounds: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    alignItems: 'flex-end',
    marginRight: 3,
    justifyContent: 'flex-start',
    marginTop: 3
  },
  notification: {
    height: 12,
    backgroundColor: '#FF3366',
    borderRadius: 6,
    width: 12
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_61: {
    height: 50,
    width: 50
  },
  group: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  piechart: {
    alignSelf: 'center',
    marginTop: 90,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chart: {

  },
  _265: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  TOTAL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  stats: {
    alignSelf: 'center',
    marginTop: 80,
    height: 280
  },
  completed: {
    alignSelf: 'center',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _180: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 90
  },
  _68: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 54
  },
  line_22: {
    alignSelf: 'center',
    marginTop: 44
  },
  snoozed: {
    alignSelf: 'center',
    marginTop: 39,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 90
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 54
  },
  line: {
    alignSelf: 'center',
    marginTop: 44
  },
  overdue: {
    alignSelf: 'center',
    marginTop: 39,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 90
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 54
  },
  add: {
    alignSelf: 'center',
    marginTop: 24,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_63: {
    backgroundColor: '#BA77FF',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_64: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  line_65: {

  },
  tabs: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  january: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_46: {
    height: 64,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  January: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  february: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_43: {
    height: 64,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  march: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_40: {
    height: 64,
    backgroundColor: '#FFFFFF',
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  april: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BG: {
    height: 64,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  April: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
