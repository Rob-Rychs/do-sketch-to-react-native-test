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

import group_56 from './7-Groups_images/group_56.png'
import group from './7-Groups_images/group.png'
import slider from './7-Groups_images/slider.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.bg}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_60} />
                      <Image source={group_56} style={styles.group_56} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_54} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles._16}>16</Text>
                </View>
              </View>
            </View>
            <Text style={styles.Groups}>Groups</Text>
            <View style={styles.salads}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.img_43} />
                <View style={styles.bg_39}>
                  <Text style={styles._1224}>12 / 24</Text>
                  <Text style={styles.Salad}>Salad</Text>
                </View>
              </View>
            </View>
            <Image source={slider} style={styles.slider} />
          </View>
          <View style={styles.adventure}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.img_34} />
              <View style={styles.bg_30}>
                <Text style={styles._312}>3 / 12</Text>
                <Text style={styles.Adventure}>Adventure</Text>
              </View>
            </View>
          </View>
          <View style={styles.architecture}>
            <View style={styles.img_26} />
          </View>
          <View style={styles.bg_22}>
            <Text style={styles._315}>3 / 15</Text>
            <Text style={styles.Architecture}>Architecture</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)',
    paddingTop: 11,
    paddingBottom: 92
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 13,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds: {
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
  bounds_60: {
    height: 50,
    width: 50
  },
  group_56: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_54: {
    height: 50,
    width: 50
  },
  group: {

  },
  _16: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 129
  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 72,
    marginTop: 32,
    textAlign: 'left'
  },
  salads: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 94,
    height: 810,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_43: {
    backgroundColor: 'url(#linearGradient-6)',
    height: 555
  },
  bg_39: {
    backgroundColor: '#FFFFFF',
    height: 800,
    paddingTop: 580,
    paddingBottom: 96
  },
  _1224: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 261,
    textAlign: 'center'
  },
  Salad: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 225,
    marginTop: 12,
    textAlign: 'center'
  },
  slider: {
    alignSelf: 'flex-end',
    marginRight: 238,
    marginTop: 368
  },
  adventure: {
    height: 698,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_34: {
    backgroundColor: 'url(#linearGradient-6)',
    height: 531
  },
  bg_30: {
    backgroundColor: '#FFFFFF',
    height: 648,
    paddingTop: 470,
    paddingBottom: 77
  },
  _312: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Adventure: {
    backgroundColor: 'transparent',
    fontSize: 49,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 128,
    marginTop: 9,
    textAlign: 'center'
  },
  architecture: {
    height: 656,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  img_26: {
    backgroundColor: 'url(#linearGradient-6)',
    height: 456
  },
  bg_22: {
    backgroundColor: '#FFFFFF',
    height: 648,
    paddingTop: 470,
    paddingBottom: 77
  },
  _315: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  Architecture: {
    backgroundColor: 'transparent',
    fontSize: 49,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 108,
    marginTop: 9,
    textAlign: 'center'
  }
})
