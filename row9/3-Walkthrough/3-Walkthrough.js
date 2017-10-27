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
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._3Walkthrough}>
          <View style={styles.headerbg}>
            <View style={styles.add}>
              <View style={styles.bg}>
                <View style={styles.group}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={line} style={styles.line} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.Quicklyaddyourtas}>
            <Text>Quickly add your tasks </Text>{'\n'}
            <Text>from any screen</Text>{'\n'}
          </Text>
          <View style={styles.pagecontroller} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _3Walkthrough: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    alignSelf: 'center',
    height: 886,
    alignItems: 'flex-end',
    marginRight: 320,
    justifyContent: 'flex-start',
    marginTop: 311
  },
  add: {
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
  line: {

  },
  Quicklyaddyourtas: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 213,
    marginTop: 50,
    textAlign: 'right'
  },
  pagecontroller: {
    alignSelf: 'flex-end',
    marginRight: 318,
    marginTop: 217,
    width: 114,
    height: 20
  }
})
