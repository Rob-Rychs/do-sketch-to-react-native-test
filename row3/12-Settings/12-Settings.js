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
import group_52 from './12-Settings_images/group_52.png'
import avatar from './12-Settings_images/avatar.png'
import line_37 from './12-Settings_images/line_37.png'
import line_33 from './12-Settings_images/line_33.png'
import line_22 from './12-Settings_images/line_22.png'
import switchon from './12-Settings_images/switchon.png'
import line from './12-Settings_images/line.png'
import switchoff from './12-Settings_images/switchoff.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._12Settings}>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_63} />
                    <Image source={group_59} style={styles.group_59} />
                  </View>
                </View>
                <View style={styles.image}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_50} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <View style={styles.logout}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_56} />
                    <Image source={group_52} style={styles.group_52} />
                  </View>
                </View>
                <Text style={styles.Settings}>
                  <Text>Setting</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.general}>
            <View style={styles.bg_41}>
              <Text style={styles.GENERAL}>
                <Text>GENERA</Text>{'\n'}
                <Text>L</Text>{'\n'}
              </Text>
            </View>
          </View>
          <View style={styles.name}>
            <Text style={styles.Name2}>
              <Text>Nam</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <Text style={styles.MarieSimpson}>Marie Simpson</Text>
            <Image source={line_37} style={styles.line_37} />
          </View>
          <View style={styles.email_32}>
            <Text style={styles.Email}>Email</Text>
            <Text style={styles.marieinvisionappco}>marie@invisionapp.com</Text>
            <Image source={line_33} style={styles.line_33} />
          </View>
          <View style={styles.password}>
            <Text style={styles.Password}>Password</Text>
            <Image source={line_22} style={styles.line_22} />
          </View>
          <View style={styles.birthday}>
            <Text style={styles.Birthday}>Birthday</Text>
            <Text style={styles.January121976}>January 12, 1976</Text>
          </View>
          <View style={styles.notifications}>
            <View style={styles.bg}>
              <Text style={styles.NOTIFICATIONS}>NOTIFICATIONS</Text>
            </View>
          </View>
          <View style={styles.email_10}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchon} style={styles.switchon} />
              <View style={styles.EmailNotifications} />
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.phone}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchoff} style={styles.switchoff} />
              <View style={styles.email}>
                <Text style={styles.PhoneNotifications}>Phone Notifications</Text>
              </View>
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
  image: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_50: {
    height: 50,
    width: 50
  },
  group: {

  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_56: {
    height: 50,
    width: 50
  },
  group_52: {

  },
  Settings: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  avatar: {
    alignSelf: 'flex-start',
    marginLeft: 270,
    marginTop: 26
  },
  general: {
    alignSelf: 'center',
    marginTop: 27,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_41: {
    height: 100,
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'center'
  },
  GENERAL: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 50
  },
  name: {
    alignSelf: 'center',
    marginTop: 40,
    height: 104
  },
  Name2: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    textAlign: 'left'
  },
  MarieSimpson: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 7,
    textAlign: 'left'
  },
  line_37: {
    alignSelf: 'center',
    marginTop: 26
  },
  email_32: {
    alignSelf: 'center',
    marginTop: 30,
    height: 104
  },
  Email: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    textAlign: 'left'
  },
  marieinvisionappco: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 7,
    textAlign: 'left'
  },
  line_33: {
    alignSelf: 'center',
    marginTop: 26
  },
  password: {
    alignSelf: 'center',
    marginTop: 30,
    height: 104
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 51,
    textAlign: 'left'
  },
  line_22: {
    alignSelf: 'center',
    marginTop: 71
  },
  birthday: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 30,
    width: 221,
    height: 78
  },
  Birthday: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  January121976: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 7
  },
  notifications: {
    alignSelf: 'center',
    marginTop: 26,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 100,
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'center'
  },
  NOTIFICATIONS: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 50
  },
  email_10: {
    alignSelf: 'flex-end',
    marginRight: 41,
    marginTop: 39,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchon: {

  },
  EmailNotifications: {
    width: 209,
    height: 33
  },
  line: {
    alignSelf: 'center',
    marginTop: 43
  },
  phone: {
    alignSelf: 'center',
    marginTop: 40,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchoff: {

  },
  email: {
    width: 219,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PhoneNotifications: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26'
  }
})
