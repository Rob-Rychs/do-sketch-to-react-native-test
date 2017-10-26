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

import group_30 from './6-Overview_images/group_30.png'
import more from './6-Overview_images/more.png'
import graph from './6-Overview_images/graph.png'
import left from './6-Overview_images/left.png'
import right from './6-Overview_images/right.png'
import avatar_99 from './6-Overview_images/avatar_99.png'
import group_111 from './6-Overview_images/group_111.png'
import group_105 from './6-Overview_images/group_105.png'
import line_97 from './6-Overview_images/line_97.png'
import group_91 from './6-Overview_images/group_91.png'
import group_84 from './6-Overview_images/group_84.png'
import line_76 from './6-Overview_images/line_76.png'
import avatar from './6-Overview_images/avatar.png'
import group_70 from './6-Overview_images/group_70.png'
import group_65 from './6-Overview_images/group_65.png'

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
              <View style={styles.navbar}>
                <View style={styles.bounds}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_34} />
                        <Image source={group_30} style={styles.group_30} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                    <Text style={styles.Overview}>Overview</Text>
                  </View>
                </View>
              </View>
              <View style={styles.headerbg}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.completed}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.Completed}>Completed</Text>
                      <Text style={styles._64}>
                        <Text>6</Text>{'\n'}
                        <Text>4</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.snoozed}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.Snoozed}>Snoozed</Text>
                      <Text style={styles._32}>32</Text>
                    </View>
                  </View>
                  <View style={styles.overdue}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.Overdue}>Overdue</Text>
                        <Text style={styles._12}>12</Text>
                      </View>
                    </View>
                    <View style={styles.bg} />
                  </View>
                </View>
                <Image source={graph} style={styles.graph} />
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.SHOWALL}>
                    <Text>SHOW AL</Text>{'\n'}
                    <Text>L</Text>{'\n'}
                  </Text>
                  <Image source={left} style={styles.left} />
                  <Image source={right} style={styles.right} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_99} style={styles.avatar_99} />
              <Text style={styles.MeetingwithJanet}>
                <Text>Meeting with </Text>{'\n'}
                <Text>Janet</Text>{'\n'}
              </Text>
              <View style={styles.completed_116} />
              <View style={styles.time_110}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_114} />
                  <Image source={group_111} style={styles.group_111} />
                </View>
              </View>
              <View style={styles.location_104}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_108} />
                  <Image source={group_105} style={styles.group_105} />
                </View>
              </View>
              <Text style={styles._810am}>8 – 10am</Text>
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Image source={line_97} style={styles.line_97} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar_78} />
              <Text style={styles.CatchupwithBrian}>
                <Text>Catch up with </Text>{'\n'}
                <Text>Brian</Text>{'\n'}
              </Text>
              <View style={styles.snoozed_96} />
              <View style={styles.time_90}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_94} />
                  <Image source={group_91} style={styles.group_91} />
                </View>
              </View>
              <View style={styles.details}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_88} />
                  <Image source={group_84} style={styles.group_84} />
                </View>
              </View>
              <Text style={styles._1112pm}>11 – 12pm</Text>
              <Text style={styles.MobileProject}>Mobile Project</Text>
            </View>
          </View>
          <Image source={line_76} style={styles.line_76} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>
                <Text>Lunch with </Text>{'\n'}
                <Text>Diane</Text>{'\n'}
              </Text>
              <View style={styles.completed_75} />
              <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_73} />
                  <Image source={group_70} style={styles.group_70} />
                </View>
              </View>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_68} />
                  <Image source={group_65} style={styles.group_65} />
                </View>
              </View>
              <Text style={styles._12pm}>1 – 2pm</Text>
              <Text style={styles.Restaurant}>Restaurant</Text>
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
    color: '#1D1D26',
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
    color: '#1D1D26',
    textAlign: 'center'
  },
  march: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_40: {
    height: 64,
    backgroundColor: '#1D1D26',
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
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
    color: '#1D1D26',
    textAlign: 'center'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds: {
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
  bounds_34: {
    height: 50,
    width: 50
  },
  group_30: {

  },
  more: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  headerbg: {
    height: 630,
    backgroundColor: '#1D1D2603'
  },
  completed: {
    width: 135,
    height: 152,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  snoozed: {
    width: 104,
    height: 152,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _32: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  overdue: {
    width: 105,
    height: 152
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  bg: {
    height: 16,
    backgroundColor: '#FFB258',
    alignSelf: 'center',
    marginTop: 100,
    width: 16
  },
  graph: {
    alignSelf: 'center'
  },
  SHOWALL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  left: {

  },
  right: {

  },
  _1: {
    alignSelf: 'center',
    marginTop: 676,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_99: {

  },
  MeetingwithJanet: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  completed_116: {
    height: 20,
    backgroundColor: '#50D2C2',
    width: 20
  },
  time_110: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_114: {
    height: 50,
    width: 50
  },
  group_111: {

  },
  location_104: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_108: {
    height: 49,
    width: 50
  },
  group_105: {

  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 245
  },
  line_97: {
    alignSelf: 'center',
    marginTop: 79
  },
  _2: {
    alignSelf: 'center',
    marginTop: 51,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_78: {
    backgroundColor: '#1D1D26',
    width: 64,
    height: 64
  },
  CatchupwithBrian: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  snoozed_96: {
    height: 20,
    backgroundColor: '#8C88FF',
    width: 20
  },
  time_90: {
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
  details: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_88: {
    height: 50,
    width: 50
  },
  group_84: {

  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  MobileProject: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 175
  },
  line_76: {
    alignSelf: 'center',
    marginTop: 78
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 81,
    marginTop: 41,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  completed_75: {
    height: 20,
    backgroundColor: '#50D2C2',
    width: 19
  },
  time: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
    height: 50,
    width: 50
  },
  group_70: {

  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_68: {
    height: 49,
    width: 50
  },
  group_65: {

  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 107
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 251
  }
})
