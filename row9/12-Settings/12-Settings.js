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

import group_59 from './12-Settings_images/group_59.png'
import more from './12-Settings_images/more.png'
import avatar from './12-Settings_images/avatar.png'
import active from './12-Settings_images/active.png'
import line_32 from './12-Settings_images/line_32.png'
import line_29 from './12-Settings_images/line_29.png'
import line_25 from './12-Settings_images/line_25.png'
import line_21 from './12-Settings_images/line_21.png'
import line_10 from './12-Settings_images/line_10.png'
import line from './12-Settings_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._12Settings}>
          <View style={styles.headerbg}>
            <View style={styles.navbar}>
              <View style={styles.bounds}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_63} />
                      <Image source={group_59} style={styles.group_59} />
                    </View>
                  </View>
                  <Image source={more} style={styles.more} />
                  <Text style={styles.Settings}>Settings</Text>
                </View>
              </View>
            </View>
            <View style={styles.monthpicker}>
              <Text style={styles.RyanWilson_44}>Ryan Wilson</Text>
              <Text style={styles.PHOTOGRAPHER}>PHOTOGRAPHER</Text>
            </View>
            <Image source={avatar} style={styles.avatar} />
          </View>
          <View style={styles.tabs}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.GENERAL}>GENERAL</Text>
              <Text style={styles.SOCIAL}>SOCIAL</Text>
              <Text style={styles.ALERTS}>ALERTS</Text>
            </View>
            <Image source={active} style={styles.active} />
          </View>
          <Image source={line_32} style={styles.line_32} />
          <View style={styles.name}>
            <Text style={styles.Name}>Name</Text>
            <Text style={styles.RyanWilson}>Ryan Wilson </Text>
            <Image source={line_29} style={styles.line_29} />
          </View>
          <View style={styles.email}>
            <Text style={styles.Email}>Email</Text>
            <Text style={styles.ryaninvisionappcom_26}>ryan@invisionapp.com</Text>
            <Image source={line_25} style={styles.line_25} />
          </View>
          <View style={styles.description}>
            <Text style={styles.Description}>Description</Text>
            <Text style={styles.ryaninvisionappcom}>ryan@invisionapp.com</Text>
            <Image source={line_21} style={styles.line_21} />
          </View>
          <View style={styles.password}>
            <Text style={styles.Password}>Password</Text>
            <Image source={line_10} style={styles.line_10} />
          </View>
          <View style={styles.phone}>
            <Text style={styles.Phone}>Phone</Text>
            <Text style={styles._18779327111}>1-877-932-7111</Text>
            <Image source={line} style={styles.line} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _12Settings: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    alignSelf: 'center',
    height: 553,
    paddingTop: 45,
    paddingBottom: 69
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 30,
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
  bounds_63: {
    height: 50,
    width: 50
  },
  group_59: {

  },
  more: {

  },
  Settings: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  monthpicker: {
    alignSelf: 'flex-start',
    marginLeft: 87,
    marginTop: 32,
    height: 139
  },
  RyanWilson_44: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  PHOTOGRAPHER: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 13,
    textAlign: 'left'
  },
  avatar: {
    alignSelf: 'flex-end',
    marginRight: 76,
    marginTop: 15
  },
  tabs: {
    alignSelf: 'flex-start',
    marginLeft: 153,
    marginTop: 22,
    height: 40
  },
  GENERAL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  SOCIAL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 190
  },
  ALERTS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginLeft: 1,
    marginTop: 10
  },
  line_32: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 77
  },
  name: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 31,
    height: 104
  },
  Name: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  RyanWilson: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 243,
    marginTop: 9,
    textAlign: 'center'
  },
  line_29: {
    alignSelf: 'center',
    marginTop: 27
  },
  email: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 31,
    height: 104
  },
  Email: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  ryaninvisionappcom_26: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  },
  line_25: {
    alignSelf: 'center',
    marginTop: 27
  },
  description: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 31,
    height: 104
  },
  Description: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  ryaninvisionappcom: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  },
  line_21: {
    alignSelf: 'center',
    marginTop: 27
  },
  password: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 31,
    height: 103
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  line_10: {
    alignSelf: 'center',
    marginTop: 72
  },
  phone: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginTop: 32,
    height: 104
  },
  Phone: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _18779327111: {
    backgroundColor: 'transparent',
    fontSize: 27,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 221,
    marginTop: 9,
    textAlign: 'center'
  },
  line: {
    alignSelf: 'center',
    marginTop: 27
  }
})
