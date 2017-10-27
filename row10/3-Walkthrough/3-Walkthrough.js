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

import group from './3-Walkthrough_images/group.png'
import line from './3-Walkthrough_images/line.png'
import line_12 from './3-Walkthrough_images/line_12.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.pagecontroller} />
          <View style={styles.phone}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds} />
              <Image source={group} style={styles.group} />
            </View>
          </View>
          <Text style={styles.Manageyourtasksqu}>
            <Text>Manage your tasks quick and easy </Text>{'\n'}
            <Text>from your phone</Text>{'\n'}
          </Text>
          <View style={styles.skipnext}>
            <View style={{flexDirection: 'row'}}>
              <Image source={line} style={styles.line} />
              <Image source={line_12} style={styles.line_12} />
              <Text style={styles.SKIP}>SKIP</Text>
              <Text style={styles.NEXT}>NEXT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)',
    paddingTop: 114,
    paddingBottom: 26
  },
  pagecontroller: {
    alignSelf: 'flex-end',
    marginRight: 329,
    width: 116,
    height: 16
  },
  phone: {
    alignSelf: 'flex-end',
    marginRight: 212,
    marginTop: 274,
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 350,
    width: 350
  },
  group: {

  },
  Manageyourtasksqu: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 142,
    marginTop: 303,
    textAlign: 'right'
  },
  skipnext: {
    alignSelf: 'flex-end',
    marginRight: 12,
    marginTop: 90,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {

  },
  line_12: {

  },
  SKIP: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 162
  },
  NEXT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 157
  }
})
