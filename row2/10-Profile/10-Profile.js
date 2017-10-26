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

import chart from './10-Profile_images/chart.png'
import left from './10-Profile_images/left.png'
import right from './10-Profile_images/right.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.completed}>
              <Text style={styles.COMPLETED}>
                <Text>COMPLETE</Text>{'\n'}
                <Text>D</Text>{'\n'}
              </Text>
              <Text style={styles._180}>180</Text>
            </View>
            <View style={styles.snoozed}>
              <Text style={styles.SNOOZED}>
                <Text>SNOOZE</Text>{'\n'}
                <Text>D</Text>{'\n'}
              </Text>
              <Text style={styles._64}>64</Text>
            </View>
            <View style={styles.overdue}>
              <Text style={styles.OVERDUE}>
                <Text>OVERDU</Text>{'\n'}
                <Text>E</Text>{'\n'}
              </Text>
              <Text style={styles._21}>21</Text>
            </View>
          </View>
          <View style={styles.piechart}>
            <Image source={chart} style={styles.chart} />
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._265}>265</Text>
                <Text style={styles.TOTAL}>TOTAL </Text>
              </View>
            </Image>
          </View>
          <View style={styles.monthpicker}>
            <View style={{flexDirection: 'row'}}>
              <Image source={left} style={styles.left} />
              <Image source={right} style={styles.right} />
              <Text style={styles.FEBRUARY}>FEBRUARY</Text>
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
  completed: {
    width: 148,
    height: 136,
    paddingTop: 44
  },
  COMPLETED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  _180: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 7,
    textAlign: 'center'
  },
  snoozed: {
    width: 120,
    height: 136,
    paddingTop: 44
  },
  SNOOZED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  _64: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 7,
    textAlign: 'center'
  },
  overdue: {
    width: 114,
    height: 136,
    paddingTop: 44
  },
  OVERDUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  _21: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 7,
    textAlign: 'center'
  },
  piechart: {
    alignSelf: 'flex-end',
    marginRight: 215,
    marginTop: 104,
    width: 320,
    height: 320,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  chart: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  _265: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  TOTAL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    alignSelf: 'flex-end',
    marginRight: 23,
    marginTop: 72,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {

  },
  right: {

  },
  FEBRUARY: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
