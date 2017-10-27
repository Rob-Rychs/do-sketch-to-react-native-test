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

import group_98 from './11-Timeline_images/group_98.png'
import group_92 from './11-Timeline_images/group_92.png'
import group_74 from './11-Timeline_images/group_74.png'
import line_70 from './11-Timeline_images/line_70.png'
import group_62 from './11-Timeline_images/group_62.png'
import line_59 from './11-Timeline_images/line_59.png'
import group_51 from './11-Timeline_images/group_51.png'
import line_47 from './11-Timeline_images/line_47.png'
import group_39 from './11-Timeline_images/group_39.png'
import group_25 from './11-Timeline_images/group_25.png'
import line_21 from './11-Timeline_images/line_21.png'
import group from './11-Timeline_images/group.png'
import line_87 from './11-Timeline_images/line_87.png'

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
                <View style={styles.bounds_90}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_102} />
                        <Image source={group_98} style={styles.group_98} />
                      </View>
                    </View>
                    <View style={styles.search}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_95} />
                        <Image source={group_92} style={styles.group_92} />
                      </View>
                    </View>
                    <Text style={styles.Timeline}>Timeline</Text>
                  </View>
                </View>
              </View>
              <View style={styles.date_81}>
                <View style={styles.bg_82}>
                  <Text style={styles.WEDNESDAYMARCH18}>WEDNESDAY, MARCH 18</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1_71}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.birthday_73}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_78} />
                  <Image source={group_74} style={styles.group_74} />
                </View>
              </View>
              <Text style={styles.BriansBirthday}>Brian’s Birthday</Text>
              <Text style={styles.Allday}>All day</Text>
            </View>
          </View>
          <Image source={line_70} style={styles.line_70} />
          <View style={styles._2_60}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._34pm}>3–4pm</Text>
              <View style={styles.birthday_61}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_65} />
                  <Image source={group_62} style={styles.group_62} />
                </View>
              </View>
              <Text style={styles.ReviseWireframes}>Revise Wireframes</Text>
            </View>
            <Text style={styles.MobileApp}>Mobile App</Text>
          </View>
          <Image source={line_59} style={styles.line_59} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._12pm_58}>1–2pm</Text>
              <View style={styles.birthday_50}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_55} />
                  <Image source={group_51} style={styles.group_51} />
                </View>
              </View>
              <Text style={styles.DesignMeeting_57}>Design Meeting</Text>
            </View>
            <Text style={styles.Hangouts_56}>Hangouts</Text>
          </View>
          <Image source={line_47} style={styles.line_47} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._9am_46}>9am</Text>
              <View style={styles.birthday_38}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_43} />
                  <Image source={group_39} style={styles.group_39} />
                </View>
              </View>
              <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
            </View>
            <Text style={styles.Restaurant}>Restaurant</Text>
          </View>
          <View style={styles.date}>
            <View style={styles.bg_34}>
              <Text style={styles.TUESDAYMARCH17}>TUESDAY, MARCH 17</Text>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._12pm}>1–2pm</Text>
              <View style={styles.birthday_24}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_29} />
                  <Image source={group_25} style={styles.group_25} />
                </View>
              </View>
              <Text style={styles.DesignMeeting}>Design Meeting</Text>
            </View>
            <Text style={styles.Hangouts}>Hangouts</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={line_21} style={styles.line_21} />
              <View style={styles._2}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._9am}>9am</Text>
                  <View style={styles.birthday}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles.Homepageredesign}>Homepage redesign</Text>
                </View>
                <Text style={styles.MarketingWebsite}>Marketing Website</Text>
              </View>
              <View style={styles.filter}>
                <View style={styles.bg_85}>
                  <View style={styles.group_86}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_88} />
                      <Image source={line_87} style={styles.line_87} />
                    </View>
                  </View>
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
    backgroundColor: 'url(#linearGradient-1)'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_90: {
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
  bounds_102: {
    height: 50,
    width: 50
  },
  group_98: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_95: {
    height: 50,
    width: 50
  },
  group_92: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  date_81: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_82: {
    height: 100,
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'flex-end',
    marginBottom: 31
  },
  WEDNESDAYMARCH18: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 50
  },
  _1_71: {
    alignSelf: 'flex-end',
    marginRight: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  birthday_73: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_78: {
    height: 50,
    width: 50
  },
  group_74: {

  },
  BriansBirthday: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 191
  },
  Allday: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  line_70: {
    alignSelf: 'flex-end',
    marginTop: 51
  },
  _2_60: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 51,
    height: 88
  },
  _34pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  birthday_61: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_65: {
    height: 50,
    width: 50
  },
  group_62: {

  },
  ReviseWireframes: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 146
  },
  MobileApp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 242,
    marginTop: 2,
    textAlign: 'left'
  },
  line_59: {
    alignSelf: 'flex-end',
    marginTop: 79
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 51,
    height: 88
  },
  _12pm_58: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  birthday_50: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_55: {
    height: 50,
    width: 50
  },
  group_51: {

  },
  DesignMeeting_57: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 179
  },
  Hangouts_56: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 242,
    marginTop: 2,
    textAlign: 'left'
  },
  line_47: {
    alignSelf: 'flex-end',
    marginTop: 79
  },
  _4: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 51,
    height: 88
  },
  _9am_46: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  birthday_38: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_43: {
    height: 50,
    width: 50
  },
  group_39: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 164
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 241,
    marginTop: 2,
    textAlign: 'left'
  },
  date: {
    alignSelf: 'flex-end',
    marginTop: 78,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_34: {
    height: 100,
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'flex-end',
    marginBottom: 31
  },
  TUESDAYMARCH17: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 50
  },
  _1: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 50,
    height: 88
  },
  _12pm: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  birthday_24: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_29: {
    height: 50,
    width: 50
  },
  group_25: {

  },
  DesignMeeting: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 179
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 242,
    marginTop: 2,
    textAlign: 'left'
  },
  line_21: {

  },
  _2: {
    height: 88
  },
  _9am: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  birthday: {
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
  Homepageredesign: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 115
  },
  MarketingWebsite: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 188,
    marginTop: 2,
    textAlign: 'right'
  },
  filter: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_85: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_86: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_88: {
    height: 50,
    width: 50
  },
  line_87: {

  }
})
