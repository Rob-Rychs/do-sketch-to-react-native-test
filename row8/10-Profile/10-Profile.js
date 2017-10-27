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

import group_83 from './10-Profile_images/group_83.png'
import more from './10-Profile_images/more.png'
import left from './10-Profile_images/left.png'
import group from './10-Profile_images/group.png'
import avatar from './10-Profile_images/avatar.png'
import lists_45 from './10-Profile_images/lists_45.png'
import line_41 from './10-Profile_images/line_41.png'
import lists_28 from './10-Profile_images/lists_28.png'
import line_25 from './10-Profile_images/line_25.png'
import lists from './10-Profile_images/lists.png'

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
                <View style={styles.bounds_74}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_87} />
                        <Image source={group_83} style={styles.group_83} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                    <Text style={styles.Profile}>Profile</Text>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={styles.bg_58}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={left} style={styles.left} />
                    <Text style={styles.January}>January</Text>
                    <View style={styles.right}>
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._2005}>2005</Text>
                  <Image source={avatar} style={styles.avatar} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.completed}>
            <Text style={styles.COMPLETED}>COMPLETED</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._34}>34</Text>
              <View style={styles.events_44}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_52} />
                  <Image source={lists_45} style={styles.lists_45} />
                </View>
              </View>
            </View>
          </View>
          <Image source={line_41} style={styles.line_41} />
          <View style={styles.snoozed}>
            <Text style={styles.SNOOZED}>SNOOZED</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._85}>85</Text>
              <View style={styles.events}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_35} />
                  <Image source={lists_28} style={styles.lists_28} />
                </View>
              </View>
            </View>
          </View>
          <Image source={line_25} style={styles.line_25} />
          <View style={styles.overdue}>
            <Text style={styles.OVERDUE}>OVERDUE</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles._18}>18</Text>
              <View style={styles.group2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds} />
                  <Image source={lists} style={styles.lists} />
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
  bounds_74: {
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
  bounds_87: {
    height: 50,
    width: 50
  },
  group_83: {

  },
  more: {

  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    height: 390,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60
  },
  bg_58: {
    height: 390,
    backgroundColor: '#FFFFFF05'
  },
  left: {

  },
  January: {
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
  group: {

  },
  _2005: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 36
  },
  completed: {
    alignSelf: 'flex-end',
    marginRight: 100,
    marginTop: 494,
    height: 167
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _34: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  events_44: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_52: {
    height: 50,
    width: 50
  },
  lists_45: {

  },
  line_41: {
    alignSelf: 'flex-end',
    marginTop: 34
  },
  snoozed: {
    alignSelf: 'flex-end',
    marginRight: 100,
    marginTop: 101,
    height: 167
  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _85: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  events: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_35: {
    height: 50,
    width: 50
  },
  lists_28: {

  },
  line_25: {
    alignSelf: 'flex-end',
    marginTop: 34
  },
  overdue: {
    alignSelf: 'flex-end',
    marginRight: 100,
    marginTop: 101,
    height: 167
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 100,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  group2: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  lists: {

  }
})
