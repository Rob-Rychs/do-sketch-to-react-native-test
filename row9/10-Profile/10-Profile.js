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

import group_77 from './10-Profile_images/group_77.png'
import group from './10-Profile_images/group.png'
import avatar_63 from './10-Profile_images/avatar_63.png'
import line_55 from './10-Profile_images/line_55.png'
import line_50 from './10-Profile_images/line_50.png'
import line_46 from './10-Profile_images/line_46.png'
import line_43 from './10-Profile_images/line_43.png'
import avatar_36 from './10-Profile_images/avatar_36.png'
import line_31 from './10-Profile_images/line_31.png'
import avatar_24 from './10-Profile_images/avatar_24.png'
import line from './10-Profile_images/line.png'
import avatar from './10-Profile_images/avatar.png'

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
              <View style={styles.headerbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_81} />
                          <Image source={group_77} style={styles.group_77} />
                        </View>
                      </View>
                      <View style={styles.logout}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={styles.bounds_74} />
                          <Image source={group} style={styles.group} />
                        </View>
                      </View>
                      <Text style={styles.Profile}>Profile</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.RyanWilson}>Ryan Wilson</Text>
                <Text style={styles.PHOTOGRAPHER}>PHOTOGRAPHER</Text>
                <Image source={avatar_63} style={styles.avatar_63} />
              </View>
              <View style={styles.completed}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.COMPLETED}>COMPLETED</Text>
                    <Text style={styles._64}>128</Text>
                  </View>
                </View>
                <Image source={line_55} style={styles.line_55} />
              </View>
              <View style={styles.snoozed}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.SNOOZED}>SNOOZED</Text>
                    <Text style={styles._32}>48</Text>
                  </View>
                </View>
                <Image source={line_50} style={styles.line_50} />
              </View>
              <View style={styles.overdue}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.OVERDUE}>OVERDUE</Text>
                    <Text style={styles._24}>24</Text>
                  </View>
                </View>
                <Image source={line_46} style={styles.line_46} />
              </View>
            </View>
          </View>
          <Image source={line_43} style={styles.line_43} />
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_36} style={styles.avatar_36} />
              <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
              <View style={styles.date_40}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._2_41}>2</Text>
                  <Text style={styles.pm}>pm</Text>
                </View>
              </View>
              <View style={styles.status_33} />
              <Text style={styles.Restaurant}>Restaurant</Text>
            </View>
          </View>
          <Image source={line_31} style={styles.line_31} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_24} style={styles.avatar_24} />
              <Text style={styles.CatchupwithMarie}>Catch up with Marie</Text>
              <View style={styles.date_28}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._11}>11</Text>
                  <Text style={styles.am_30}>am</Text>
                </View>
              </View>
              <View style={styles.status_21} />
              <Text style={styles.Hangouts}>Hangouts</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.CoffeewithAdam}>Coffee with Adam</Text>
              <View style={styles.date}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._10}>10</Text>
                  <Text style={styles.am}>am</Text>
                </View>
              </View>
              <View style={styles.status} />
              <Text style={styles.Starbucks}>Starbucks</Text>
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
  headerbg: {
    backgroundColor: 'url(#linearGradient-7)',
    height: 672,
    paddingTop: 40,
    paddingBottom: 46
  },
  navbar: {
    alignSelf: 'flex-end',
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
  bounds_81: {
    height: 50,
    width: 50
  },
  group_77: {

  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_74: {
    height: 50,
    width: 50
  },
  group: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  RyanWilson: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 180,
    marginTop: 32,
    textAlign: 'right'
  },
  PHOTOGRAPHER: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 281,
    marginTop: 4,
    textAlign: 'right'
  },
  avatar_63: {
    alignSelf: 'flex-end',
    marginRight: 268,
    marginTop: 89
  },
  completed: {
    width: 149,
    height: 122
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  line_55: {
    alignSelf: 'center',
    marginTop: 54
  },
  snoozed: {
    width: 120,
    height: 122
  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _32: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  line_50: {
    alignSelf: 'center',
    marginTop: 54
  },
  overdue: {
    width: 115,
    height: 122
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  line_46: {
    alignSelf: 'center',
    marginTop: 54
  },
  line_43: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 174
  },
  _1: {
    alignSelf: 'flex-end',
    marginRight: 54,
    marginTop: 36,
    height: 91,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_36: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_40: {
    width: 35,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2_41: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status_33: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 205
  },
  line_31: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 45
  },
  _2: {
    alignSelf: 'flex-end',
    marginRight: 52,
    marginTop: 39,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_24: {

  },
  CatchupwithMarie: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 169
  },
  date_28: {
    width: 44,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  am_30: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  status_21: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 35
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 52,
    marginTop: 37,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  CoffeewithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date: {
    width: 44,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  status: {
    height: 16,
    borderRadius: 8,
    width: 16
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  }
})
