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

import group_59 from './10-Profile_images/group_59.png'
import group_64 from './10-Profile_images/group_64.png'
import left from './10-Profile_images/left.png'
import group from './10-Profile_images/group.png'
import lists from './10-Profile_images/lists.png'
import completed_23 from './10-Profile_images/completed_23.png'
import avatar from './10-Profile_images/avatar.png'
import snoozed_21 from './10-Profile_images/snoozed_21.png'
import overdue_19 from './10-Profile_images/overdue_19.png'

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
                  <View style={styles.bounds_56}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.edit}>
                        <Image source={group_59} style={styles.group_59} />
                          <View style={styles.bounds_62} />
                        </Image>
                      </View>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_68} />
                          <Image source={group_64} style={styles.group_64} />
                        </View>
                      </View>
                      <Text style={styles.PROFILE}>PROFILE</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.monthpicker}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.March}>
                      <Text>Marc</Text>{'\n'}
                      <Text>h</Text>{'\n'}
                    </Text>
                    <Image source={left} style={styles.left} />
                    <View style={styles.right}>
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                </View>
                <Text style={styles.Goodstanding25m}>
                  <Text>Good standing! 25% more completed </Text>{'\n'}
                  <Text>tasks this month</Text>{'\n'}
                  <Text>.</Text>{'\n'}
                </Text>
              </View>
              <View style={styles.add}>
                <View style={styles.bg}>
                  <View style={styles.group_46}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_54} />
                      <Image source={lists} style={styles.lists} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chart}>
            <View style={{flexDirection: 'row'}}>
              <Image source={completed_23} style={styles.completed_23} />
                <Image source={avatar} style={styles.avatar} />
              </Image>
              <Image source={snoozed_21} style={styles.snoozed_21} />
              <Image source={overdue_19} style={styles.overdue_19} />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.snoozed}>
              <View style={styles.oval_17} />
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.Snoozed}>
                    <Text>Snooze</Text>{'\n'}
                    <Text>d</Text>{'\n'}
                  </Text>
                  <Text style={styles._26}>26</Text>
                </View>
              </View>
            </View>
            <View style={styles.completed}>
              <View style={styles.oval_13} />
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.Completed}>
                    <Text>Complete</Text>{'\n'}
                    <Text>d</Text>{'\n'}
                  </Text>
                  <Text style={styles._78}>78</Text>
                </View>
              </View>
            </View>
            <View style={styles.overdue}>
              <View style={styles.oval} />
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.Overdue}>
                    <Text>Overdu</Text>{'\n'}
                    <Text>e</Text>{'\n'}
                  </Text>
                  <Text style={styles._14}>14</Text>
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
  _10Profile: {

  },
  headerbg: {
    backgroundColor: '#6563A4',
    height: 497,
    paddingTop: 15,
    paddingBottom: 90
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 22
  },
  bounds_56: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  edit: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_59: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 50,
    width: 50
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_68: {
    height: 50,
    width: 50
  },
  group_64: {

  },
  PROFILE: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 60,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  March: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
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
  group: {

  },
  Goodstanding25m: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 167,
    marginTop: 34,
    textAlign: 'center'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#D667CD',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_46: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_54: {
    height: 50,
    width: 50
  },
  lists: {

  },
  chart: {
    alignSelf: 'center',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },
  completed_23: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 153
  },
  avatar: {

  },
  snoozed_21: {

  },
  overdue_19: {

  },
  snoozed: {
    width: 104,
    height: 186
  },
  oval_17: {
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  completed: {
    width: 135,
    height: 186
  },
  oval_13: {
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _78: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  },
  overdue: {
    width: 105,
    height: 186
  },
  oval: {
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26'
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'center'
  }
})
