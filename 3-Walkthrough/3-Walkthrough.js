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

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._3Walkthrough}>
          <View style={styles.pagecontroller} />
          <View style={styles.calendar}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.bounds} />
              <Image source={group} style={styles.group} />
            </View>
          </View>
          <Text style={styles.Keepyourworkorgan}>
            <Text>Keep your work organized and </Text>{'\n'}
            <Text>quickly check your reminders with </Text>{'\n'}
            <Text>simple calendar.</Text>{'\n'}
          </Text>
          <View style={styles.next}>
            <View style={styles.bg}>
              <Text style={styles.Next}>Next</Text>
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
  pagecontroller: {
    alignSelf: 'center',
    width: 118,
    height: 16
  },
  calendar: {
    alignSelf: 'center',
    marginTop: 374,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 120,
    width: 120
  },
  group: {

  },
  Keepyourworkorgan: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 133,
    marginTop: 374,
    textAlign: 'center'
  },
  next: {
    alignSelf: 'center',
    marginTop: 109,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 120,
    backgroundColor: '#FF3366',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Next: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
