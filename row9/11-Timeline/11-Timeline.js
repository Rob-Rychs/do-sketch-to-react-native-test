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

import group_91 from './11-Timeline_images/group_91.png'
import more from './11-Timeline_images/more.png'
import left from './11-Timeline_images/left.png'
import group_73 from './11-Timeline_images/group_73.png'
import line_67 from './11-Timeline_images/line_67.png'
import avatar_55 from './11-Timeline_images/avatar_55.png'
import status_59 from './11-Timeline_images/status_59.png'
import avatar_44 from './11-Timeline_images/avatar_44.png'
import status_48 from './11-Timeline_images/status_48.png'
import avatar_33 from './11-Timeline_images/avatar_33.png'
import status_37 from './11-Timeline_images/status_37.png'
import avatar from './11-Timeline_images/avatar.png'
import status from './11-Timeline_images/status.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._11Timeline}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_82}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_95} />
                          <Image source={group_91} style={styles.group_91} />
                        </View>
                      </View>
                      <Image source={more} style={styles.more} />
                      <Text style={styles.TImeline}>TImeline</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.monthpicker}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={left} style={styles.left} />
                    <Text style={styles.April}>April</Text>
                    <View style={styles.right}>
                      <Image source={group_73} style={styles.group_73} />
                    </View>
                  </View>
                  <Text style={styles._2005}>2005</Text>
                </View>
                <View style={styles.filter}>
                  <View style={styles.bg}>
                    <View style={styles.group}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={line_67} style={styles.line_67} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.TUESDAYAPRIL7}>TUESDAY, APRIL 7</Text>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_55} style={styles.avatar_55} />
              <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
              <View style={styles.date_50}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._2_51}>2</Text>
                  <Text style={styles.pm_52}>pm</Text>
                </View>
              </View>
              <Image source={status_59} style={styles.status_59} />
              <Text style={styles.Restaurant}>Restaurant</Text>
            </View>
          </View>
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_44} style={styles.avatar_44} />
              <Text style={styles.CatchupwithMarie}>Catch up with Marie</Text>
              <View style={styles.date_39}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._11}>11</Text>
                  <Text style={styles.am_41}>am</Text>
                </View>
              </View>
              <Image source={status_48} style={styles.status_48} />
              <Text style={styles.Hangouts}>Hangouts</Text>
            </View>
          </View>
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_33} style={styles.avatar_33} />
              <Text style={styles.CoffeewithAdam}>Coffee with Adam</Text>
              <View style={styles.date_28}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._10}>10</Text>
                  <Text style={styles.am}>am</Text>
                </View>
              </View>
              <Image source={status_37} style={styles.status_37} />
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Text style={styles.WEDNESDAYAPRIL8}>WEDNESDAY, APRIL 8</Text>
          <View style={styles._4}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.MeetingwithMichael}>Meeting with Michael </Text>
              <View style={styles.date}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._4_17}>4</Text>
                  <Text style={styles.pm}>pm</Text>
                </View>
              </View>
              <Image source={status} style={styles.status} />
              <Text style={styles.Skype}>Skype</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _11Timeline: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-13)',
    height: 582,
    paddingTop: 33,
    paddingBottom: 114
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 22,
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
  bounds_95: {
    height: 50,
    width: 50
  },
  group_91: {

  },
  more: {

  },
  TImeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  monthpicker: {
    alignSelf: 'flex-start',
    marginLeft: 52,
    marginTop: 32,
    height: 139
  },
  left: {

  },
  April: {
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
  group_73: {

  },
  _2005: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 13,
    textAlign: 'center'
  },
  filter: {
    alignSelf: 'flex-end',
    marginRight: 83,
    marginTop: 69,
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
  group: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  line_67: {

  },
  TUESDAYAPRIL7: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 72,
    marginTop: 79,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_55: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_50: {
    width: 35,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2_51: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  pm_52: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status_59: {
    backgroundColor: '#FFFFFF'
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 208
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 72,
    marginTop: 74,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_44: {

  },
  CatchupwithMarie: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 170
  },
  date_39: {
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
  am_41: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  status_48: {
    backgroundColor: '#FFFFFF'
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 72,
    marginTop: 69,
    height: 91,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_33: {

  },
  CoffeewithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_28: {
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
  status_37: {
    backgroundColor: '#FFFFFF'
  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  },
  WEDNESDAYAPRIL8: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 261,
    marginTop: 74,
    textAlign: 'left'
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 72,
    marginTop: 71,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  MeetingwithMichael: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 146
  },
  date: {
    width: 35,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _4_17: {
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
  status: {
    backgroundColor: '#FFFFFF'
  },
  Skype: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 210
  }
})
