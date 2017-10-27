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

import bgoverlay from './12-Settings_images/bgoverlay.png'
import group_66 from './12-Settings_images/group_66.png'
import group_60 from './12-Settings_images/group_60.png'
import open from './12-Settings_images/open.png'
import line_51 from './12-Settings_images/line_51.png'
import line_47 from './12-Settings_images/line_47.png'
import line_43 from './12-Settings_images/line_43.png'
import line_31 from './12-Settings_images/line_31.png'
import line_22 from './12-Settings_images/line_22.png'
import avatar from './12-Settings_images/avatar.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={bgoverlay} style={styles.bgoverlay} />
            <View style={styles.navbar}>
              <View style={styles.bounds_57}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_69} />
                      <Image source={group_66} style={styles.group_66} />
                    </View>
                  </View>
                  <View style={styles.logout}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_64} />
                      <Image source={group_60} style={styles.group_60} />
                    </View>
                  </View>
                  <Text style={styles.SETTINGS}>SETTINGS</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={styles.GENERAL}>
                <Text>GENERA</Text>{'\n'}
                <Text>L</Text>{'\n'}
              </Text>
              <Image source={open} style={styles.open} />
            </View>
            <Image source={line_51} style={styles.line_51} />
            <View style={styles.name}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.NAME}>NAME</Text>
                <Text style={styles.PaulJensen}>Paul Jensen</Text>
              </View>
              <Image source={line_47} style={styles.line_47} />
            </View>
            <View style={styles.email}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.EMAIL}>EMAIL</Text>
                <Text style={styles.paulinvisionappcom}>paul@invisionapp.com</Text>
              </View>
              <Image source={line_43} style={styles.line_43} />
            </View>
            <View style={styles.password}>
              <Text style={styles.PASSWORD}>PASSWORD</Text>
              <Image source={line_31} style={styles.line_31} />
            </View>
            <View style={styles.gender}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.GENDER}>GENDER</Text>
                <View style={styles.male}>
                  <Text style={styles.Male}>Male</Text>
                </View>
                <View style={styles.female}>
                  <Text style={styles.Female}>Female</Text>
                </View>
              </View>
              <Image source={line_22} style={styles.line_22} />
            </View>
            <View style={styles.birthday}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.May251983}>May 25, 1983</Text>
                <Text style={styles.BIRTHDAY}>BIRTHDAY</Text>
              </View>
            </View>
          </Image>
          <Image source={avatar} style={styles.avatar} />
            <View style={styles.addphoto}>
              <View style={styles.group}>
                <View style={styles.bounds} />
              </View>
            </View>
          </Image>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_57: {
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
  bounds_69: {
    height: 50,
    width: 50
  },
  group_66: {

  },
  logout: {
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
  SETTINGS: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  GENERAL: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 60
  },
  open: {

  },
  line_51: {
    alignSelf: 'center',
    marginTop: 36
  },
  name: {
    alignSelf: 'center',
    marginTop: 43,
    height: 74
  },
  NAME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  PaulJensen: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 220
  },
  line_47: {
    alignSelf: 'center',
    marginTop: 36
  },
  email: {
    alignSelf: 'center',
    marginTop: 79,
    height: 74
  },
  EMAIL: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  paulinvisionappcom: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 130
  },
  line_43: {
    alignSelf: 'center',
    marginTop: 36
  },
  password: {
    alignSelf: 'center',
    marginTop: 87,
    height: 66
  },
  PASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  line_31: {
    alignSelf: 'center',
    marginTop: 39
  },
  gender: {
    alignSelf: 'center',
    marginTop: 41,
    height: 76
  },
  GENDER: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  male: {
    width: 106,
    height: 41,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  Male: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  female: {
    width: 138,
    height: 41,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  Female: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_22: {
    alignSelf: 'center',
    marginTop: 35
  },
  birthday: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 78,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  May251983: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  BIRTHDAY: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  avatar: {
    alignItems: 'flex-start',
    marginLeft: 77,
    justifyContent: 'flex-end',
    marginBottom: 76
  },
  addphoto: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 39
  },
  group: {
    width: 54,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  }
})
