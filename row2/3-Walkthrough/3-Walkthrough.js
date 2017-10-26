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

import line from './3-Walkthrough_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#B574F5'}}>
        <View style={styles.bg}>
          <Text style={styles._2of5}>
            <Text>2 of </Text>{'\n'}
            <Text>5</Text>{'\n'}
          </Text>
          <Text style={styles.Quicklymanagetasks}>Quickly manage tasks</Text>
          <View style={styles.add}>
            <View style={styles.bg_19}>
              <View style={styles.group}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds} />
                  <Image source={line} style={styles.line} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.next}>
            <View style={styles.bg_13}>
              <Text style={styles.Next}>Next</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#B574F5',
    paddingTop: 120,
    paddingBottom: 53
  },
  _2of5: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Quicklymanagetasks: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 67,
    textAlign: 'center'
  },
  add: {
    alignSelf: 'center',
    marginTop: 377,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_19: {
    backgroundColor: '#BA77FF',
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
  line: {

  },
  next: {
    alignSelf: 'center',
    marginTop: 454,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_13: {
    height: 110,
    backgroundColor: '#BA77FF',
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
