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

import group_68 from './4-Home_images/group_68.png'
import group_63 from './4-Home_images/group_63.png'
import avatar_56 from './4-Home_images/avatar_56.png'
import line_52 from './4-Home_images/line_52.png'
import avatar_38 from './4-Home_images/avatar_38.png'
import line_33 from './4-Home_images/line_33.png'
import avatar_26 from './4-Home_images/avatar_26.png'
import line from './4-Home_images/line.png'
import avatar from './4-Home_images/avatar.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._4Home}>
          <View style={styles.headerbg}>
            <View style={styles.navbar}>
              <View style={styles.bounds_61}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_72} />
                      <Image source={group_68} style={styles.group_68} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_66} />
                      <Image source={group_63} style={styles.group_63} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image source={avatar_56} style={styles.avatar_56} />
            <Text style={styles._6Tasks}>6 Tasks</Text>
            <Text style={styles.APRIL72015}>APRIL 7, 2015</Text>
            <View style={styles.add}>
              <View style={styles.bg}>
                <View style={styles.group}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={line_52} style={styles.line_52} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_38} style={styles.avatar_38} />
              <Text style={styles.CoffeewithAdam}>Coffee with Adam</Text>
              <View style={styles.date_42}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._24}>24</Text>
                  <Text style={styles.min}>min</Text>
                </View>
              </View>
              <View style={styles.status_35} />
              <Text style={styles.Starbucks}>Starbucks</Text>
            </View>
          </View>
          <Image source={line_33} style={styles.line_33} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_26} style={styles.avatar_26} />
              <Text style={styles.CatchupwithMarie}>Catch up with Marie</Text>
              <View style={styles.date_30}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._2_31}>2</Text>
                  <Text style={styles.hrs_32}>hrs</Text>
                </View>
              </View>
              <View style={styles.status_23} />
              <Text style={styles.Hangouts}>Hangouts</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.LunchwithDiane}>Lunch with Diane</Text>
              <View style={styles.date}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles._4}>4</Text>
                  <Text style={styles.hrs}>hrs</Text>
                </View>
              </View>
              <View style={styles.status} />
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
    backgroundColor: 'url(#linearGradient-7)',
    alignSelf: 'center',
    height: 806,
    paddingTop: 7,
    paddingBottom: 44
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 27,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_61: {
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
  bounds_72: {
    height: 50,
    width: 50
  },
  group_68: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  group_63: {

  },
  avatar_56: {
    alignSelf: 'flex-end',
    marginRight: 295,
    marginTop: 91
  },
  _6Tasks: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 291,
    marginTop: 24,
    textAlign: 'center'
  },
  APRIL72015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  add: {
    alignSelf: 'flex-end',
    marginRight: 78,
    marginTop: 65,
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
  line_52: {

  },
  _1: {
    alignSelf: 'flex-end',
    marginRight: 79,
    marginTop: 46,
    height: 91,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_38: {

  },
  CoffeewithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  date_42: {
    width: 44,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _24: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  min: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status_35: {
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
  },
  line_33: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 35
  },
  _2: {
    alignSelf: 'flex-end',
    marginRight: 79,
    marginTop: 39,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_26: {

  },
  CatchupwithMarie: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 169
  },
  date_30: {
    width: 32,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _2_31: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  hrs_32: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status_23: {
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
    marginLeft: 203
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 35
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 79,
    marginTop: 37,
    height: 88,
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
    textAlign: 'center'
  },
  date: {
    width: 32,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  hrs: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  status: {
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
    marginLeft: 203
  }
})
