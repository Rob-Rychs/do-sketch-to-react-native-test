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

import group from './4-Home_images/group.png'
import avatar_52 from './4-Home_images/avatar_52.png'
import line_40 from './4-Home_images/line_40.png'
import line_36 from './4-Home_images/line_36.png'
import avatar_30 from './4-Home_images/avatar_30.png'
import avatar_26 from './4-Home_images/avatar_26.png'
import avatar from './4-Home_images/avatar.png'
import line from './4-Home_images/line.png'
import line_66 from './4-Home_images/line_66.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#B574F5'}}>
        <View style={styles.bg}>
          <View style={styles.header}>
            <View style={styles.navbg}>
              <View style={styles.navbar}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_62} />
                          <Image source={group} style={styles.group} />
                        </View>
                      </View>
                      <Text style={styles.Goodmorning}>Good morning!</Text>
                    </View>
                  </View>
                  <Image source={avatar_52} style={styles.avatar_52} />
                    <View style={styles.notification} />
                  </Image>
                </View>
              </View>
              <Text style={styles.Monday}>
                <Text>Monda</Text>{'\n'}
                <Text>y</Text>{'\n'}
              </Text>
              <Text style={styles.February82015}>February 8, 2015</Text>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.FinishHomeScreen}>Finish Home Screen</Text>
              <Text style={styles._911am}>9 – 11am</Text>
            </View>
            <Text style={styles.WebApp}>Web App</Text>
          </View>
          <Image source={line_40} style={styles.line_40} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.LunchBreak}>Lunch Break</Text>
              <Text style={styles._12pm}>12pm</Text>
            </View>
          </View>
          <Image source={line_36} style={styles.line_36} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.DesignStandUp}>Design Stand Up</Text>
              <Text style={styles._34pm}>3 – 4pm</Text>
            </View>
            <Text style={styles.Hangouts}>Hangouts</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_30} style={styles.avatar_30} />
              <Image source={avatar_26} style={styles.avatar_26} />
              <Image source={avatar} style={styles.avatar} />
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.NewIcons}>New Icons</Text>
              <Text style={styles._5pm}>5pm</Text>
            </View>
            <Text style={styles.MobileApp}>Mobile App</Text>
          </View>
          <View style={styles.add}>
            <View style={styles.bg_64}>
              <View style={styles.group_65}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_67} />
                  <Image source={line_66} style={styles.line_66} />
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
    backgroundColor: '#B574F5'
  },
  header: {
    alignSelf: 'center',
    height: 360,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbg: {
    height: 360,
    backgroundColor: '#BA77FF',
    paddingBottom: 50
  },
  navbar: {
    alignSelf: 'center',
    height: 151,
    alignItems: 'center',
    justifyContent: 'center'
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
  bounds_62: {
    height: 50,
    width: 50
  },
  group: {

  },
  Goodmorning: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  avatar_52: {
    alignItems: 'flex-end',
    marginRight: 5,
    justifyContent: 'flex-start',
    marginTop: 3
  },
  notification: {
    height: 12,
    backgroundColor: '#FF3366',
    borderRadius: 6,
    width: 12
  },
  Monday: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 47,
    textAlign: 'center'
  },
  February82015: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6,
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'center',
    marginTop: 50,
    height: 85
  },
  FinishHomeScreen: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _911am: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  WebApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 8,
    textAlign: 'left'
  },
  line_40: {
    alignSelf: 'center',
    marginTop: 84
  },
  _2: {
    alignSelf: 'center',
    marginTop: 40,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LunchBreak: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_36: {
    alignSelf: 'center',
    marginTop: 39
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 61,
    marginTop: 151,
    height: 182
  },
  DesignStandUp: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 5
  },
  _34pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 5,
    textAlign: 'left'
  },
  avatar_30: {

  },
  avatar_26: {

  },
  avatar: {

  },
  line: {
    alignSelf: 'center',
    marginTop: 36
  },
  _4: {
    alignSelf: 'center',
    marginTop: 40,
    height: 85
  },
  NewIcons: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  _5pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 8,
    textAlign: 'left'
  },
  add: {
    alignSelf: 'center',
    marginTop: 192,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_64: {
    backgroundColor: '#BA77FF',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_65: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  line_66: {

  }
})
