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

import group_56 from './6-Overview_images/group_56.png'
import avatar from './6-Overview_images/avatar.png'
import left from './6-Overview_images/left.png'
import group from './6-Overview_images/group.png'
import empty_27 from './6-Overview_images/empty_27.png'
import filled_28 from './6-Overview_images/filled_28.png'
import empty_32 from './6-Overview_images/empty_32.png'
import filled_33 from './6-Overview_images/filled_33.png'
import empty from './6-Overview_images/empty.png'
import filled from './6-Overview_images/filled.png'
import line_64 from './6-Overview_images/line_64.png'
import line_13 from './6-Overview_images/line_13.png'
import line from './6-Overview_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._6Overview}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_49}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_60} />
                          <Image source={group_56} style={styles.group_56} />
                        </View>
                      </View>
                    </View>
                    <Image source={avatar} style={styles.avatar} />
                      <View style={styles.notification} />
                    </Image>
                  </View>
                </View>
                <View style={styles.monthpicker}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={left} style={styles.left} />
                    <Text style={styles.February}>February</Text>
                    <View style={styles.right}>
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._2015}>2015</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.snoozed_26}>
                    <Image source={empty_27} style={styles.empty_27}>
                      <View style={{flexDirection: 'row'}}>
                        <Image source={filled_28} style={styles.filled_28}>
                          <Text style={styles._29}>%</Text>
                        </Image>
                        <Text style={styles._28}>28</Text>
                      </View>
                    </Image>
                  </View>
                  <View style={styles.completed_31}>
                    <Image source={empty_32} style={styles.empty_32}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Image source={filled_33} style={styles.filled_33}>
                          <Text style={styles._34}>%</Text>
                        </Image>
                        <Text style={styles._54}>
                          <Text>5</Text>{'\n'}
                          <Text>4</Text>{'\n'}
                        </Text>
                      </View>
                    </Image>
                  </View>
                  <View style={styles.overdue_21}>
                    <Image source={empty} style={styles.empty}>
                      <Image source={filled} style={styles.filled} />
                      <Text style={styles._18}>18</Text>
                    </Image>
                  </View>
                </View>
                <Text style={styles.Goodjobyouvecom}>
                  <Text>Good job, you’ve completed 6% </Text>{'\n'}
                  <Text>more tasks this month.</Text>{'\n'}
                </Text>
              </View>
              <View style={styles.graph2}>
                <View style={styles.bg}>
                  <View style={styles.group_63}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_65} />
                      <Image source={line_64} style={styles.line_64} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.completed}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Completed}>Completed</Text>
              <Text style={styles._108}>
                <Text>10</Text>{'\n'}
                <Text>8</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_13} style={styles.line_13} />
          <View style={styles.snoozed}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Snoozed}>Snoozed</Text>
              <Text style={styles._56}>
                <Text>5</Text>{'\n'}
                <Text>6</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.overdue}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Overdue}>Overdue</Text>
              <Text style={styles._36}>
                <Text>3</Text>{'\n'}
                <Text>6</Text>{'\n'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _6Overview: {

  },
  header: {
    backgroundColor: '#1D1D26',
    height: 920
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 23,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 128,
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_60: {
    height: 50,
    width: 50
  },
  group_56: {

  },
  avatar: {
    alignItems: 'flex-end',
    marginRight: 7,
    justifyContent: 'flex-start',
    marginTop: 17
  },
  notification: {
    height: 10,
    backgroundColor: '#FF005E',
    borderRadius: 5,
    width: 10
  },
  monthpicker: {
    alignSelf: 'flex-end',
    marginRight: 53,
    marginTop: 32,
    height: 133
  },
  left: {

  },
  February: {
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
  _2015: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  snoozed_26: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0
  },
  empty_27: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  filled_28: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 13
  },
  _29: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 46,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  completed_31: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty_32: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  filled_33: {
    alignItems: 'flex-end',
    marginRight: 55,
    justifyContent: 'flex-start',
    marginTop: 97
  },
  _34: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 55
  },
  _54: {
    backgroundColor: 'transparent',
    fontSize: 80,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  overdue_21: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty: {
    paddingTop: 0,
    paddingBottom: 34
  },
  filled: {
    alignSelf: 'flex-end',
    marginRight: 8
  },
  _18: {
    backgroundColor: 'transparent',
    fontSize: 46,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 5,
    textAlign: 'center'
  },
  Goodjobyouvecom: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 194,
    marginTop: 94,
    textAlign: 'center'
  },
  graph2: {
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
  group_63: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_65: {
    height: 50,
    width: 50
  },
  line_64: {

  },
  completed: {
    alignSelf: 'center',
    marginTop: 81,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Completed: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 50
  },
  _108: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_13: {
    alignSelf: 'flex-end',
    marginRight: 23,
    marginTop: 37
  },
  snoozed: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Snoozed: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 53
  },
  _56: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 23,
    marginTop: 39
  },
  overdue: {
    alignSelf: 'center',
    marginTop: 45,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Overdue: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 56
  },
  _36: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
