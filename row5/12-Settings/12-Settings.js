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
import group from './12-Settings_images/group.png'
import avatar from './12-Settings_images/avatar.png'
import line_37 from './12-Settings_images/line_37.png'
import line_33 from './12-Settings_images/line_33.png'
import line_22 from './12-Settings_images/line_22.png'
import line_18 from './12-Settings_images/line_18.png'
import line from './12-Settings_images/line.png'
import switchon from './12-Settings_images/switchon.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._12Settings}>
          <View style={styles.navbar}>
            <View style={styles.bounds_50}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_63} />
                    <Image source={group_59} style={styles.group_59} />
                  </View>
                </View>
                <View style={styles.logout}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_57} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <Text style={styles.Settings}>Settings</Text>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
            <View style={styles.add} />
          </Image>
          <View style={styles.name}>
            <Text style={styles.FULLNAME}>FULL NAME</Text>
            <Text style={styles.AndreaPierce}>Andrea Pierce</Text>
            <Image source={line_37} style={styles.line_37} />
          </View>
          <View style={styles.email}>
            <Text style={styles.EMAIL}>EMAIL</Text>
            <Text style={styles.andreainvisionappc}>andrea@invisionapp.com</Text>
            <Image source={line_33} style={styles.line_33} />
          </View>
          <View style={styles.password}>
            <Text style={styles.PASSWORD}>PASSWORD</Text>
            <Image source={line_22} style={styles.line_22} />
          </View>
          <View style={styles.birthday}>
            <Text style={styles.BIRTHDAY}>BIRTHDAY</Text>
            <Text style={styles.May151984}>May 15, 1984</Text>
            <Image source={line_18} style={styles.line_18} />
          </View>
          <View style={styles.gender}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.female}>
                <Text style={styles.Female}>Female</Text>
              </View>
              <View style={styles.male}>
                <Text style={styles.Male}>Male</Text>
              </View>
              <Text style={styles.GENDER}>GENDER</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.notifications}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchon} style={styles.switchon} />
              <Text style={styles.NOTIFICATIONS}>NOTIFICATIONS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _12Settings: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_50: {
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
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_57: {
    height: 50,
    width: 50
  },
  group: {

  },
  Settings: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 2,
    alignItems: 'flex-end',
    marginRight: 20,
    justifyContent: 'flex-start'
  },
  add: {
    width: 59,
    height: 60
  },
  name: {
    alignSelf: 'center',
    marginTop: 67,
    height: 104
  },
  FULLNAME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  AndreaPierce: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginTop: 18,
    textAlign: 'left'
  },
  line_37: {
    alignSelf: 'center',
    marginTop: 21
  },
  email: {
    alignSelf: 'center',
    marginTop: 41,
    height: 104
  },
  EMAIL: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  andreainvisionappc: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginTop: 18,
    textAlign: 'left'
  },
  line_33: {
    alignSelf: 'center',
    marginTop: 21
  },
  password: {
    alignSelf: 'center',
    marginTop: 41,
    height: 104
  },
  PASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  line_22: {
    alignSelf: 'center',
    marginTop: 77
  },
  birthday: {
    alignSelf: 'center',
    marginTop: 41,
    height: 104
  },
  BIRTHDAY: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  May151984: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginTop: 18,
    textAlign: 'left'
  },
  line_18: {
    alignSelf: 'center',
    marginTop: 21
  },
  gender: {
    alignSelf: 'center',
    marginTop: 51,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  female: {
    width: 138,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  Female: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  male: {
    width: 105,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  Male: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  GENDER: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line: {
    alignSelf: 'center',
    marginTop: 44
  },
  notifications: {
    alignSelf: 'center',
    marginTop: 51,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchon: {

  },
  NOTIFICATIONS: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  }
})
