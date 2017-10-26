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

import group_25 from './3-Walkthrough_images/group_25.png'
import shape_18 from './3-Walkthrough_images/shape_18.png'
import group from './3-Walkthrough_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._3Walkthrough}>
          <View style={styles.navbar}>
            <View style={styles.bounds_22}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_28} />
                    <Image source={group_25} style={styles.group_25} />
                  </View>
                </View>
                <Text style={styles._1of3}>
                  <Text>1 of </Text>{'\n'}
                  <Text>3</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.groupbounds}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_19} />
              <View style={styles.group_9}>
                <Image source={shape_18} style={styles.shape_18} />
              </View>
            </View>
          </View>
          <View style={styles.bg}>
            <Text style={styles.Manageyourtasksqu}>
              <Text>Manage your tasks quick and easy </Text>{'\n'}
              <Text>from anywhere you want</Text>{'\n'}
            </Text>
            <View style={styles.next}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.bounds} />
                <Image source={group} style={styles.group} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _3Walkthrough: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_22: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_28: {
    height: 50,
    width: 50
  },
  group_25: {

  },
  _1of3: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  groupbounds: {
    alignSelf: 'center',
    marginTop: 124,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_19: {
    height: 200,
    width: 200
  },
  group_9: {
    width: 92,
    height: 167,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  shape_18: {

  },
  bg: {
    height: 667,
    backgroundColor: '#50D2C2',
    alignSelf: 'center',
    marginTop: 215,
    paddingTop: 260,
    paddingBottom: 60
  },
  Manageyourtasksqu: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 130,
    textAlign: 'center'
  },
  next: {
    alignSelf: 'center',
    marginTop: 206,
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

  }
})
