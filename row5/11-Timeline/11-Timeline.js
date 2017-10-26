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

import group_125 from './11-Timeline_images/group_125.png'
import more from './11-Timeline_images/more.png'
import avatar_93 from './11-Timeline_images/avatar_93.png'
import group_105 from './11-Timeline_images/group_105.png'
import group_99 from './11-Timeline_images/group_99.png'
import group_85 from './11-Timeline_images/group_85.png'
import group_78 from './11-Timeline_images/group_78.png'
import avatar_52 from './11-Timeline_images/avatar_52.png'
import group_64 from './11-Timeline_images/group_64.png'
import group_59 from './11-Timeline_images/group_59.png'
import line_91 from './11-Timeline_images/line_91.png'
import line_70 from './11-Timeline_images/line_70.png'
import avatar_29 from './11-Timeline_images/avatar_29.png'
import group_41 from './11-Timeline_images/group_41.png'
import group_35 from './11-Timeline_images/group_35.png'
import avatar from './11-Timeline_images/avatar.png'
import group_21 from './11-Timeline_images/group_21.png'
import group from './11-Timeline_images/group.png'
import line_27 from './11-Timeline_images/line_27.png'

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
              <View style={styles.navbar}>
                <View style={styles.bounds_116}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_129} />
                        <Image source={group_125} style={styles.group_125} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                    <Text style={styles.Timeline}>Timeline</Text>
                  </View>
                </View>
              </View>
              <View style={styles.date_111}>
                <View style={styles.bg_112}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.border_113} />
                    <Text style={styles.TUESDAYMARCH9}>TUESDAY, MARCH 9</Text>
                  </View>
                </View>
              </View>
              <View style={styles.completed_110} />
              <View style={styles.completed_90} />
              <View style={styles.snoozed} />
              <View style={styles._1}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_93} style={styles.avatar_93} />
                  <Text style={styles.MeetingwithJanet}>
                    <Text>Meeting with </Text>{'\n'}
                    <Text>Janet</Text>{'\n'}
                  </Text>
                  <View style={styles.time_104}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_108} />
                      <Image source={group_105} style={styles.group_105} />
                    </View>
                  </View>
                  <View style={styles.location_98}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_102} />
                      <Image source={group_99} style={styles.group_99} />
                    </View>
                  </View>
                  <Text style={styles._810am}>8 – 10am</Text>
                  <Text style={styles.Starbucks}>Starbucks</Text>
                </View>
              </View>
              <View style={styles._2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.avatar_72} />
                  <Text style={styles.CatchupwithBrian}>
                    <Text>Catch up with </Text>{'\n'}
                    <Text>Brian</Text>{'\n'}
                  </Text>
                  <View style={styles.time_84}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_88} />
                      <Image source={group_85} style={styles.group_85} />
                    </View>
                  </View>
                  <View style={styles.details_77}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_82} />
                      <Image source={group_78} style={styles.group_78} />
                    </View>
                  </View>
                  <Text style={styles._1112pm}>11 – 12pm</Text>
                  <Text style={styles.MobileProject}>Mobile Project</Text>
                </View>
              </View>
              <View style={styles._3}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_52} style={styles.avatar_52} />
                  <Text style={styles.LunchwithDiane}>
                    <Text>Lunch with </Text>{'\n'}
                    <Text>Diane</Text>{'\n'}
                  </Text>
                  <View style={styles.time_63}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_67} />
                      <Image source={group_64} style={styles.group_64} />
                    </View>
                  </View>
                  <View style={styles.location2}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_62} />
                      <Image source={group_59} style={styles.group_59} />
                    </View>
                  </View>
                  <Text style={styles._12pm}>1 – 2pm</Text>
                  <Text style={styles.Restaurant}>Restaurant</Text>
                </View>
              </View>
              <Image source={line_91} style={styles.line_91} />
              <Image source={line_70} style={styles.line_70} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.date}>
                <View style={styles.bg}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.border} />
                    <Text style={styles.MONDAYMARCH8}>MONDAY, MARCH 8</Text>
                  </View>
                </View>
              </View>
              <View style={styles.overdue} />
              <View style={styles.completed} />
              <View style={styles._4}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar_29} style={styles.avatar_29} />
                  <Text style={styles.DinnerwithMarie}>
                    <Text>Dinner with </Text>{'\n'}
                    <Text>Marie</Text>{'\n'}
                  </Text>
                  <View style={styles.time_40}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_44} />
                      <Image source={group_41} style={styles.group_41} />
                    </View>
                  </View>
                  <View style={styles.location}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_38} />
                      <Image source={group_35} style={styles.group_35} />
                    </View>
                  </View>
                  <Text style={styles._6pm}>6pm</Text>
                  <Text style={styles.BarampGrill}>Bar &amp; Grill</Text>
                </View>
              </View>
              <View style={styles._5}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={avatar} style={styles.avatar} />
                  <Text style={styles.MeetingwithJames}>
                    <Text>Meeting with </Text>{'\n'}
                    <Text>James</Text>{'\n'}
                  </Text>
                  <View style={styles.time}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_24} />
                      <Image source={group_21} style={styles.group_21} />
                    </View>
                  </View>
                  <View style={styles.details}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._24pm}>2 – 4pm</Text>
                  <Text style={styles.MarketingWebsite}>Marketing Website</Text>
                </View>
              </View>
              <Image source={line_27} style={styles.line_27} />
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
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_116: {
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
  bounds_129: {
    height: 50,
    width: 50
  },
  group_125: {

  },
  more: {

  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_111: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_112: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border_113: {
    height: 110,
    width: 10
  },
  TUESDAYMARCH9: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  completed_110: {
    height: 192,
    backgroundColor: '#50D2C2',
    width: 10
  },
  completed_90: {
    height: 192,
    backgroundColor: '#50D2C2',
    width: 10
  },
  snoozed: {
    height: 192,
    backgroundColor: '#8C88FF',
    width: 10
  },
  _1: {
    height: 105,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_93: {

  },
  MeetingwithJanet: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 9
  },
  time_104: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_108: {
    height: 50,
    width: 50
  },
  group_105: {

  },
  location_98: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_102: {
    height: 49,
    width: 50
  },
  group_99: {

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
  _2: {
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_72: {
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
  time_84: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_88: {
    height: 50,
    width: 50
  },
  group_85: {

  },
  details_77: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_82: {
    height: 50,
    width: 50
  },
  group_78: {

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
    marginRight: 231
  },
  _3: {
    height: 111,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_52: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 9
  },
  time_63: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  group_64: {

  },
  location2: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 49,
    width: 50
  },
  group_59: {

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
  },
  line_91: {

  },
  line_70: {

  },
  date: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    height: 110,
    width: 10
  },
  MONDAYMARCH8: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  overdue: {
    height: 192,
    backgroundColor: '#FCAB53',
    width: 10
  },
  completed: {
    height: 219,
    backgroundColor: '#50D2C2',
    width: 10
  },
  _4: {
    height: 106,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_29: {

  },
  DinnerwithMarie: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 9
  },
  time_40: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_44: {
    height: 50,
    width: 50
  },
  group_41: {

  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_38: {
    height: 49,
    width: 50
  },
  group_35: {

  },
  _6pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  BarampGrill: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 189
  },
  _5: {
    height: 101,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  MeetingwithJames: {
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
  bounds_24: {
    height: 50,
    width: 50
  },
  group_21: {

  },
  details: {
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
  _24pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  MarketingWebsite: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  line_27: {

  }
})
