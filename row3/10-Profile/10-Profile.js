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

import group_45 from './10-Profile_images/group_45.png'
import group from './10-Profile_images/group.png'
import avatar from './10-Profile_images/avatar.png'
import line_16 from './10-Profile_images/line_16.png'
import line from './10-Profile_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._10Profile}>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_49} />
                    <Image source={group_45} style={styles.group_45} />
                  </View>
                </View>
                <View style={styles.edit}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_42} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <Text style={styles.Profile}>
                  <Text>Profil</Text>{'\n'}
                  <Text>e</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.GoodJobMarie}>
            <Text>Good Job, Marie</Text>{'\n'}
            <Text>!</Text>{'\n'}
          </Text>
          <Text style={styles.Youhaventmisseda}>You haven’t missed any tasks this week.</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.completed_27}>
                <View style={styles.bg_28}>
                  <Text style={styles.Completed}>COMPLETED</Text>
                  <Text style={styles._16}>16</Text>
                </View>
              </View>
              <View style={styles.overdue_23}>
                <View style={styles.bg}>
                  <Text style={styles.Overdue}>OVERDUE</Text>
                  <Text style={styles._0}>0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.NewIcons}>New Icons</Text>
              <Text style={styles._830}>
                <Text>8:3</Text>{'\n'}
                <Text>0</Text>{'\n'}
              </Text>
              <Text style={styles.AM}>AM</Text>
            </View>
            <Text style={styles.MobileApp}>Mobile App</Text>
          </View>
          <Image source={line_16} style={styles.line_16} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.FinishHomeScreen}>Finish Home Screen</Text>
              <Text style={styles._200}>
                <Text>2:0</Text>{'\n'}
                <Text>0</Text>{'\n'}
              </Text>
              <Text style={styles.PM_13}>PM</Text>
            </View>
            <Text style={styles.HomeApp}>Home App</Text>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ReviseWireframes}>Revise Wireframes</Text>
              <Text style={styles._445}>4:45</Text>
              <Text style={styles.PM}>PM</Text>
            </View>
            <Text style={styles.CompanyWebsite}>Company Website</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _10Profile: {

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
  bounds_49: {
    height: 50,
    width: 50
  },
  group_45: {

  },
  edit: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_42: {
    height: 50,
    width: 50
  },
  group: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  avatar: {
    alignSelf: 'flex-end',
    marginTop: 26
  },
  GoodJobMarie: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginTop: 27,
    textAlign: 'right'
  },
  Youhaventmisseda: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginTop: 2,
    textAlign: 'right'
  },
  completed_27: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_28: {
    height: 240,
    backgroundColor: '#50D2C2',
    paddingTop: 50,
    paddingBottom: 31
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  overdue_23: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 240,
    backgroundColor: '#D667CD',
    paddingTop: 50,
    paddingBottom: 31
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _0: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-end',
    marginTop: 60,
    height: 85
  },
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 70
  },
  _830: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 39
  },
  AM: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 8,
    textAlign: 'left'
  },
  line_16: {
    alignSelf: 'flex-end',
    marginTop: 93
  },
  _2: {
    alignSelf: 'flex-end',
    marginTop: 50,
    height: 85
  },
  FinishHomeScreen: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 70
  },
  _200: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 38
  },
  PM_13: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  HomeApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 8,
    textAlign: 'left'
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 93
  },
  _3: {
    alignSelf: 'flex-end',
    marginTop: 50,
    height: 85
  },
  ReviseWireframes: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 70
  },
  _445: {
    backgroundColor: 'transparent',
    fontSize: 31,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 40
  },
  PM: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  CompanyWebsite: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 70,
    marginTop: 8,
    textAlign: 'left'
  }
})
