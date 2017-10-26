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

import group_108 from './4-Home_images/group_108.png'
import group_98 from './4-Home_images/group_98.png'
import down from './4-Home_images/down.png'
import avatar_46 from './4-Home_images/avatar_46.png'
import group_58 from './4-Home_images/group_58.png'
import group_52 from './4-Home_images/group_52.png'
import line_44 from './4-Home_images/line_44.png'
import group_39 from './4-Home_images/group_39.png'
import group_32 from './4-Home_images/group_32.png'
import line_24 from './4-Home_images/line_24.png'
import avatar from './4-Home_images/avatar.png'
import group_19 from './4-Home_images/group_19.png'
import group from './4-Home_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._4Home}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <Text style={styles._3Tasks}>3 Tasks</Text>
              </View>
              <View style={styles.navbar}>
                <View style={styles.bounds_96}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_112} />
                        <Image source={group_108} style={styles.group_108} />
                      </View>
                    </View>
                    <View style={styles.add}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_101} />
                        <Image source={group_98} style={styles.group_98} />
                      </View>
                    </View>
                    <Text style={styles.March2015}>
                      <Text>Marc</Text>{'\n'}
                      <Text>h 2015</Text>{'\n'}
                    </Text>
                    <Image source={down} style={styles.down} />
                  </View>
                </View>
              </View>
              <View style={styles.daypicker}>
                <View style={styles.bg}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.active}>
                      <View style={styles.tue}>
                        <Text style={styles.Tue}>Tue</Text>
                        <Text style={styles._9}>9</Text>
                        <View style={styles.notification_81} />
                      </View>
                    </View>
                    <View style={styles.sun}>
                      <Text style={styles.Sun}>Sun</Text>
                      <Text style={styles._7}>7</Text>
                    </View>
                    <View style={styles.mon}>
                      <Text style={styles.Mon}>Mon</Text>
                      <Text style={styles._8}>8</Text>
                    </View>
                    <View style={styles.wed}>
                      <Text style={styles.Wed}>Wed</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                          <Text style={styles._10}>10</Text>
                          <View style={styles.notification_77} />
                        </View>
                      </View>
                    </View>
                    <View style={styles.thu}>
                      <Text style={styles.Thu}>Thu</Text>
                      <Text style={styles._11}>11</Text>
                    </View>
                    <View style={styles.fri}>
                      <Text style={styles.Fri}>Fri</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                          <Text style={styles._12}>12</Text>
                          <View style={styles.notification} />
                        </View>
                      </View>
                    </View>
                    <View style={styles.sat}>
                      <Text style={styles.Sat}>Sat</Text>
                      <Text style={styles._13}>13</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_46} style={styles.avatar_46} />
              <Text style={styles.MeetingwithJanet}>
                <Text>Meeting with </Text>{'\n'}
                <Text>Janet</Text>{'\n'}
              </Text>
              <View style={styles.time_57}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_61} />
                  <Image source={group_58} style={styles.group_58} />
                </View>
              </View>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_55} />
                  <Image source={group_52} style={styles.group_52} />
                </View>
              </View>
              <Text style={styles._810am}>8 – 10am</Text>
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Image source={line_44} style={styles.line_44} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar_26} />
              <Text style={styles.CatchupwithBrian}>
                <Text>Catch up with </Text>{'\n'}
                <Text>Brian</Text>{'\n'}
              </Text>
              <View style={styles.time_38}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_42} />
                  <Image source={group_39} style={styles.group_39} />
                </View>
              </View>
              <View style={styles.details}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_36} />
                  <Image source={group_32} style={styles.group_32} />
                </View>
              </View>
              <Text style={styles._1112pm}>11 – 12pm</Text>
              <Text style={styles.MobileProject}>Mobile Project</Text>
            </View>
          </View>
          <Image source={line_24} style={styles.line_24} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>
                <Text>Lunch with </Text>{'\n'}
                <Text>Diane</Text>{'\n'}
              </Text>
              <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_22} />
                  <Image source={group_19} style={styles.group_19} />
                </View>
              </View>
              <View style={styles.location2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
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
  _4Home: {

  },
  headerbg: {
    backgroundColor: '#1D1D26',
    height: 490,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _3Tasks: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_96: {
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
  bounds_112: {
    height: 50,
    width: 50
  },
  group_108: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_101: {
    height: 50,
    width: 50
  },
  group_98: {

  },
  March2015: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  down: {

  },
  daypicker: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 150,
    backgroundColor: '#1D1D2603',
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    height: 150,
    backgroundColor: '#50D2C2',
    width: 107,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 22
  },
  tue: {
    width: 41,
    height: 98
  },
  Tue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  notification_81: {
    height: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 1,
    width: 10
  },
  sun: {
    width: 43,
    height: 87
  },
  Sun: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  mon: {
    width: 53,
    height: 87
  },
  Mon: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 14,
    marginTop: 10,
    textAlign: 'center'
  },
  wed: {
    width: 54,
    height: 96
  },
  Wed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _10: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  notification_77: {
    height: 10,
    backgroundColor: '#50D2C2',
    borderRadius: 5,
    width: 10
  },
  thu: {
    width: 44,
    height: 87
  },
  Thu: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _11: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10
  },
  fri: {
    width: 33,
    height: 96
  },
  Fri: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  notification: {
    height: 10,
    backgroundColor: '#50D2C2',
    borderRadius: 5,
    width: 10
  },
  sat: {
    width: 37,
    height: 87
  },
  Sat: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _13: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 66,
    marginTop: 646,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_46: {

  },
  MeetingwithJanet: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 9
  },
  time_57: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_61: {
    height: 50,
    width: 50
  },
  group_58: {

  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_55: {
    height: 49,
    width: 50
  },
  group_52: {

  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 239
  },
  line_44: {
    alignSelf: 'center',
    marginTop: 79
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 66,
    marginTop: 51,
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_26: {
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
    marginLeft: 9
  },
  time_38: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_42: {
    height: 50,
    width: 50
  },
  group_39: {

  },
  details: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_36: {
    height: 50,
    width: 50
  },
  group_32: {

  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  MobileProject: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 232
  },
  line_24: {
    alignSelf: 'center',
    marginTop: 78
  },
  _3: {
    alignSelf: 'center',
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
    marginLeft: 9
  },
  time: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_22: {
    height: 50,
    width: 50
  },
  group_19: {

  },
  location2: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 49,
    width: 50
  },
  group: {

  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 228
  }
})
