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

import group_16 from './7-Groups_images/group_16.png'
import group from './7-Groups_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles._1}>
              <Text style={styles.Music}>Music</Text>
              <View style={styles.count}>
                <View style={styles.selected}>
                  <Text style={styles._15ITEMS}>15 ITEMS</Text>
                </View>
              </View>
            </View>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_19} />
                      <Image source={group_16} style={styles.group_16} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_13} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <Text style={styles.GROUPS}>GROUPS</Text>
                </View>
              </View>
            </View>
            <View style={styles.overlay} />
            <View style={styles._1_28}>
              <Text style={styles.Spices}>Architecture</Text>
              <View style={styles.count_32}>
                <View style={styles.selected_33}>
                  <Text style={styles._18ITEMS}>18 ITEMS</Text>
                </View>
              </View>
            </View>
            <View style={styles._1_36}>
              <Text style={styles.Travel}>Travel</Text>
              <View style={styles.count_40}>
                <View style={styles.selected_41}>
                  <Text style={styles._8ITEMS}>8 ITEMS</Text>
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
  _7Groups: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1: {
    height: 573,
    paddingTop: 231,
    paddingBottom: 163
  },
  Music: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FAFAFA',
    alignSelf: 'center',
    textAlign: 'center'
  },
  count: {
    alignSelf: 'center',
    marginTop: 19,
    width: 188,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    height: 78,
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _15ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_19: {
    height: 50,
    width: 50
  },
  group_16: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_13: {
    height: 50,
    width: 50
  },
  group: {

  },
  GROUPS: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  overlay: {
    height: 1206,
    backgroundColor: '#1D1D2610'
  },
  _1_28: {
    height: 448,
    paddingTop: 125,
    paddingBottom: 144
  },
  Spices: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FAFAFA',
    alignSelf: 'center',
    textAlign: 'center'
  },
  count_32: {
    alignSelf: 'center',
    marginTop: 19,
    width: 188,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected_33: {
    height: 78,
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _18ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _1_36: {
    height: 450,
    paddingTop: 118,
    paddingBottom: 153
  },
  Travel: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FAFAFA',
    alignSelf: 'center',
    textAlign: 'center'
  },
  count_40: {
    alignSelf: 'center',
    marginTop: 19,
    width: 174,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected_41: {
    height: 78,
    width: 174,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _8ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
