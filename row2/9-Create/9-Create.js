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

import group_42 from './9-Create_images/group_42.png'
import create from './9-Create_images/create.png'
import line_28 from './9-Create_images/line_28.png'
import line_24 from './9-Create_images/line_24.png'
import switchoff from './9-Create_images/switchoff.png'
import line_18 from './9-Create_images/line_18.png'
import line_14 from './9-Create_images/line_14.png'
import line_10 from './9-Create_images/line_10.png'
import line from './9-Create_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._9Create}>
          <View style={styles.navbg}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.close}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_45} />
                      <Image source={group_42} style={styles.group_42} />
                    </View>
                  </View>
                  <Image source={create} style={styles.create} />
                  <Text style={styles.AddNew}>Add New</Text>
                </View>
              </View>
            </View>
            <Text style={styles.Title}>Title</Text>
            <Text style={styles.Description}>Description</Text>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Selectdate}>Select date</Text>
              <Text style={styles.February92015}>February 9, 2015 </Text>
            </View>
          </View>
          <Image source={line_28} style={styles.line_28} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Selecttime}>Select time</Text>
              <Text style={styles._900am1000am}>9:00am  –  10:00am</Text>
            </View>
          </View>
          <Image source={line_24} style={styles.line_24} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchoff} style={styles.switchoff} />
              <Text style={styles.Allday}>All day</Text>
            </View>
          </View>
          <Image source={line_18} style={styles.line_18} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Location}>
                <Text>Locatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
              <Text style={styles.None_17}>None</Text>
            </View>
          </View>
          <Image source={line_14} style={styles.line_14} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Notification}>
                <Text>Notificatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
              <Text style={styles.viaSMS}>via SMS</Text>
            </View>
          </View>
          <Image source={line_10} style={styles.line_10} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.People}>
                <Text>Peopl</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
              <Text style={styles.None}>None</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._7}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Repeat}>
                <Text>Repea</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
              <Text style={styles.No}>No</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _9Create: {

  },
  navbg: {
    height: 420,
    backgroundColor: '#BA77FF',
    alignSelf: 'center',
    paddingBottom: 100
  },
  navbar: {
    alignSelf: 'center',
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
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_45: {
    height: 50,
    width: 50
  },
  group_42: {

  },
  create: {

  },
  AddNew: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Title: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 53,
    textAlign: 'center'
  },
  Description: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 5,
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Selectdate: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  February92015: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_28: {
    alignSelf: 'center',
    marginTop: 37
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Selecttime: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _900am1000am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_24: {
    alignSelf: 'center',
    marginTop: 37
  },
  _3: {
    alignSelf: 'center',
    marginTop: 40,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchoff: {

  },
  Allday: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_18: {
    alignSelf: 'center',
    marginTop: 41
  },
  _4: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Location: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  None_17: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_14: {
    alignSelf: 'center',
    marginTop: 37
  },
  _5: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Notification: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  viaSMS: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_10: {
    alignSelf: 'center',
    marginTop: 37
  },
  _6: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  People: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  None: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'center',
    marginTop: 37
  },
  _7: {
    alignSelf: 'center',
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Repeat: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  No: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
