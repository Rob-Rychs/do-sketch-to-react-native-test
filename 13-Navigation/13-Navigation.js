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

import line_28 from './13-Navigation_images/line_28.png'
import line_22 from './13-Navigation_images/line_22.png'
import line_20 from './13-Navigation_images/line_20.png'
import line_18 from './13-Navigation_images/line_18.png'
import line_16 from './13-Navigation_images/line_16.png'
import line_14 from './13-Navigation_images/line_14.png'
import line_12 from './13-Navigation_images/line_12.png'
import line_10 from './13-Navigation_images/line_10.png'
import line from './13-Navigation_images/line.png'
import shape from './13-Navigation_images/shape.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.overlay_7}>
            <Image source={line_28} style={styles.line_28} />
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.active}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles._3}>
                      <Text style={styles._3_26}>3</Text>
                    </View>
                    <Text style={styles.Home}>
                      <Text>Hom</Text>{'\n'}
                      <Text>e</Text>{'\n'}
                    </Text>
                  </View>
                </View>
                <Image source={line_22} style={styles.line_22} />
              </View>
            </View>
            <Text style={styles.Overview}>
              <Text>Overvie</Text>{'\n'}
              <Text>w</Text>{'\n'}
            </Text>
            <Image source={line_20} style={styles.line_20} />
            <Text style={styles.Groups}>
              <Text>Group</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Image source={line_18} style={styles.line_18} />
            <Text style={styles.Lists}>
              <Text>List</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Image source={line_16} style={styles.line_16} />
            <Text style={styles.Profile}>
              <Text>Profil</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <Image source={line_14} style={styles.line_14} />
            <Text style={styles.Timeline}>
              <Text>Timelin</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <Image source={line_12} style={styles.line_12} />
            <Text style={styles.Settings}>
              <Text>Setting</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Image source={line_10} style={styles.line_10} />
            <Text style={styles.LogOut}>
              <Text>Log Ou</Text>{'\n'}
              <Text>t</Text>{'\n'}
            </Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={styles.close}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_35} />
                  <Image source={shape} style={styles.shape} />
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
  overlay_7: {
    backgroundColor: '#FFFFFF'
  },
  line_28: {
    alignSelf: 'center'
  },
  active: {
    height: 128,
    backgroundColor: '#1D1D26',
    alignItems: 'center',
    justifyContent: 'center'
  },
  _3: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 18,
    justifyContent: 'center'
  },
  _3_26: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Home: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 60
  },
  line_22: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line_20: {
    alignSelf: 'center',
    marginTop: 38
  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line_18: {
    alignSelf: 'center',
    marginTop: 38
  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line_16: {
    alignSelf: 'center',
    marginTop: 38
  },
  Profile: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 41,
    textAlign: 'left'
  },
  line_14: {
    alignSelf: 'center',
    marginTop: 38
  },
  Timeline: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line_12: {
    alignSelf: 'center',
    marginTop: 38
  },
  Settings: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line_10: {
    alignSelf: 'center',
    marginTop: 38
  },
  LogOut: {
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 42,
    textAlign: 'left'
  },
  line: {
    alignSelf: 'center',
    marginTop: 38
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 128,
    alignItems: 'flex-start',
    marginLeft: 23,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_35: {
    height: 50,
    width: 50
  },
  shape: {

  }
})
