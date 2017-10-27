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

import group_60 from './7-Groups_images/group_60.png'
import group_54 from './7-Groups_images/group_54.png'
import left from './7-Groups_images/left.png'
import group_45 from './7-Groups_images/group_45.png'
import line_39 from './7-Groups_images/line_39.png'
import line_24 from './7-Groups_images/line_24.png'
import line from './7-Groups_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_52}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_64} />
                          <Image source={group_60} style={styles.group_60} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_57} />
                          <Image source={group_54} style={styles.group_54} />
                        </View>
                      </View>
                      <Text style={styles.Groups}>Groups</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.monthpicker}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.Popular}>Popular</Text>
                    <Image source={left} style={styles.left} />
                    <View style={styles.right}>
                      <Image source={group_45} style={styles.group_45} />
                    </View>
                  </View>
                </View>
                <View style={styles.add}>
                  <View style={styles.bg_37}>
                    <View style={styles.group}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={line_39} style={styles.line_39} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._1}>
                <View style={styles.img_26}>
                  <View style={styles.notification_29}>
                    <Text style={styles._4}>4</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={line_24} style={styles.line_24} />
              <Image source={line} style={styles.line} />
              <View style={styles._2}>
                <View style={styles.img_18}>
                  <View style={styles.notification_21}>
                    <Text style={styles._8}>8</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._3}>
            <View style={styles.img}>
              <View style={styles.notification}>
                <Text style={styles._16}>16</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _7Groups: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-7)',
    height: 578,
    paddingBottom: 193
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_52: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_64: {
    height: 50,
    width: 50
  },
  group_60: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_57: {
    height: 50,
    width: 50
  },
  group_54: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  monthpicker: {
    alignSelf: 'center',
    marginTop: 32,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Popular: {
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
  group_45: {

  },
  add: {
    alignSelf: 'flex-end',
    marginRight: 81,
    marginTop: 19,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_37: {
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
  line_39: {

  },
  _1: {
    width: 320,
    height: 213,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_26: {
    backgroundColor: '#1D1D26',
    width: 320,
    alignItems: 'flex-end',
    marginRight: 43,
    justifyContent: 'flex-start',
    marginTop: 13
  },
  notification_29: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 19,
    justifyContent: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  line_24: {

  },
  line: {

  },
  _2: {
    height: 311,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_18: {
    backgroundColor: '#1D1D26',
    alignItems: 'flex-end',
    marginRight: 111,
    justifyContent: 'flex-start',
    marginTop: 78
  },
  notification_21: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 167,
    marginTop: 340,
    width: 320,
    height: 213,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    backgroundColor: '#1D1D26',
    width: 320,
    alignItems: 'flex-end',
    marginRight: 108,
    justifyContent: 'flex-start',
    marginTop: 9
  },
  notification: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 12,
    justifyContent: 'center'
  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
