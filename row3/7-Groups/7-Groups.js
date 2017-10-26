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

import group_49 from './7-Groups_images/group_49.png'
import group_43 from './7-Groups_images/group_43.png'
import group from './7-Groups_images/group.png'
import line_28 from './7-Groups_images/line_28.png'
import line_21 from './7-Groups_images/line_21.png'
import line_14 from './7-Groups_images/line_14.png'
import line from './7-Groups_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_53} />
                      <Image source={group_49} style={styles.group_49} />
                    </View>
                  </View>
                  <View style={styles.add}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_46} />
                      <Image source={group_43} style={styles.group_43} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_41} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles.Groups}>
                    <Text>Group</Text>{'\n'}
                    <Text>s</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles._1} />
            <Image source={line_28} style={styles.line_28} />
            <View style={styles.bg}>
              <Text style={styles.Food}>
                <Text>Foo</Text>{'\n'}
                <Text>d</Text>{'\n'}
              </Text>
              <Text style={styles.NEEDTOBUY}>NEED TO BUY</Text>
              <Image source={line_21} style={styles.line_21} />
              <Text style={styles.Work}>Work</Text>
              <Text style={styles.FREELANCEPROJECTS}>FREELANCE PROJECTS</Text>
              <Image source={line_14} style={styles.line_14} />
              <Text style={styles.Vacation}>Vacation</Text>
              <Text style={styles.FAVORITEPLACES}>FAVORITE PLACES</Text>
              <Image source={line} style={styles.line} />
              <Text style={styles.Cities}>Cities</Text>
              <Text style={styles.WANTTOVISIT}>WANT TO VISIT</Text>
            </View>
            <View style={styles._2} />
            <View style={styles._3} />
            <View style={styles._4} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _7Groups: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
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
  bounds_53: {
    height: 50,
    width: 50
  },
  group_49: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_46: {
    height: 50,
    width: 50
  },
  group_43: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_41: {
    height: 50,
    width: 50
  },
  group: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  _1: {
    backgroundColor: '#1D1D26',
    width: 287,
    height: 334
  },
  line_28: {

  },
  bg: {
    height: 1206,
    backgroundColor: '#1D1D2603',
    paddingTop: 99,
    paddingBottom: 91
  },
  Food: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    textAlign: 'left'
  },
  NEEDTOBUY: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 12,
    textAlign: 'left'
  },
  line_21: {
    alignSelf: 'center',
    marginTop: 93
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 99,
    textAlign: 'left'
  },
  FREELANCEPROJECTS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 12,
    textAlign: 'left'
  },
  line_14: {
    alignSelf: 'center',
    marginTop: 93
  },
  Vacation: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 95,
    textAlign: 'left'
  },
  FAVORITEPLACES: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 12,
    textAlign: 'left'
  },
  line: {
    alignSelf: 'center',
    marginTop: 97
  },
  Cities: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 99,
    textAlign: 'left'
  },
  WANTTOVISIT: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 57,
    marginTop: 12,
    textAlign: 'left'
  },
  _2: {
    backgroundColor: '#1D1D26',
    width: 276,
    height: 324
  },
  _3: {
    backgroundColor: '#1D1D26',
    width: 270,
    height: 323
  },
  _4: {
    backgroundColor: '#1D1D26',
    width: 274,
    height: 326
  }
})
