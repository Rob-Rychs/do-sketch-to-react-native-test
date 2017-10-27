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

import bgoverlay from './10-Profile_images/bgoverlay.png'
import group_69 from './10-Profile_images/group_69.png'
import group_60 from './10-Profile_images/group_60.png'
import left from './10-Profile_images/left.png'
import group_46 from './10-Profile_images/group_46.png'
import line_40 from './10-Profile_images/line_40.png'
import line_36 from './10-Profile_images/line_36.png'
import line from './10-Profile_images/line.png'
import group_23 from './10-Profile_images/group_23.png'
import group from './10-Profile_images/group.png'
import avatar from './10-Profile_images/avatar.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={bgoverlay} style={styles.bgoverlay} />
            <View style={styles.navbar}>
              <View style={styles.bounds_57}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_72} />
                      <Image source={group_69} style={styles.group_69} />
                    </View>
                  </View>
                  <View style={styles.settings}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_67} />
                      <Image source={group_60} style={styles.group_60} />
                    </View>
                  </View>
                  <Text style={styles.PAULJENSEN}>PAUL JENSEN</Text>
                </View>
              </View>
            </View>
            <View style={styles.monthpicker}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.February}>
                  <Text>Februar</Text>{'\n'}
                  <Text>y</Text>{'\n'}
                </Text>
                <Image source={left} style={styles.left} />
                <View style={styles.right}>
                  <Image source={group_46} style={styles.group_46} />
                </View>
              </View>
            </View>
            <Text style={styles.Goodjob9moreco}>
              <Text>Good job! 9% more completed tasks </Text>{'\n'}
              <Text>this month</Text>{'\n'}
              <Text>.</Text>{'\n'}
            </Text>
            <Image source={line_40} style={styles.line_40} />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.completed}>
                <Text style={styles._49}>49</Text>
                <Text style={styles.COMPLETED}>COMPLETED</Text>
              </View>
              <Image source={line_36} style={styles.line_36} />
              <View style={styles.overdue}>
                <Text style={styles._8}>8</Text>
                <Text style={styles.OVERDUE}>OVERDUE</Text>
              </View>
            </View>
            <View style={styles.tabbar}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.add}>
                  <View style={styles.bg_18}>
                    <View style={styles.group_19}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_21} />
                        <Image source={line} style={styles.line} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.calendar}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_32} />
                    <Image source={group_23} style={styles.group_23} />
                  </View>
                </View>
                <View style={styles.overview}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
              </View>
            </View>
          </Image>
          <Image source={avatar} style={styles.avatar} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_57: {
    height: 128,
    backgroundColor: '#00B9FF',
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
  group_69: {

  },
  settings: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  group_60: {

  },
  PAULJENSEN: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 550,
    height: 82,
    alignItems: 'center',
    justifyContent: 'center'
  },
  February: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FAFAFA',
    textAlign: 'center'
  },
  left: {

  },
  right: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_46: {

  },
  Goodjob9moreco: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 146,
    marginTop: 26,
    textAlign: 'center'
  },
  line_40: {
    alignSelf: 'center',
    marginTop: 53
  },
  completed: {
    width: 148,
    height: 200
  },
  _49: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6
  },
  line_36: {

  },
  overdue: {
    width: 114,
    height: 200
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 120,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 6
  },
  tabbar: {
    alignSelf: 'center',
    marginTop: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_18: {
    backgroundColor: '#FFFFFF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_19: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_21: {
    height: 50,
    width: 50
  },
  line: {

  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_32: {
    height: 50,
    width: 50
  },
  group_23: {

  },
  overview: {
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
  avatar: {

  }
})
