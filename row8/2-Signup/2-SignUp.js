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

import group_59 from './2-SignUp_images/group_59.png'
import avatar from './2-SignUp_images/avatar.png'
import group_46 from './2-SignUp_images/group_46.png'
import line_42 from './2-SignUp_images/line_42.png'
import group_38 from './2-SignUp_images/group_38.png'
import line_34 from './2-SignUp_images/line_34.png'
import group_29 from './2-SignUp_images/group_29.png'
import line_25 from './2-SignUp_images/line_25.png'
import group from './2-SignUp_images/group.png'
import line from './2-SignUp_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_56}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.back}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_62} />
                    <Image source={group_59} style={styles.group_59} />
                  </View>
                </View>
                <Text style={styles.Signup}>
                  <Text>Sign u</Text>{'\n'}
                  <Text>p</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.name}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_50} />
              <Text style={styles.NAME}>NAME</Text>
              <Image source={group_46} style={styles.group_46} />
              <Text style={styles.Entername}>Enter name</Text>
            </View>
          </View>
          <Image source={line_42} style={styles.line_42} />
          <View style={styles.email}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_41} />
              <Text style={styles.EMAIL}>EMAIL</Text>
              <Image source={group_38} style={styles.group_38} />
              <Text style={styles.Enteremail}>Enter email</Text>
            </View>
          </View>
          <Image source={line_34} style={styles.line_34} />
          <View style={styles.password}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_33} />
              <Text style={styles.PASSWORD}>PASSWORD</Text>
              <Image source={group_29} style={styles.group_29} />
              <Text style={styles.Enterpassword}>Enter password</Text>
            </View>
          </View>
          <Image source={line_25} style={styles.line_25} />
          <View style={styles.phone}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds} />
              <Text style={styles.PHONE}>PHONE</Text>
              <Image source={group} style={styles.group} />
              <Text style={styles.Enterphonenumber}>Enter phone number</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.continue}>
            <View style={styles.bg_14}>
              <Text style={styles.Continue}>Continue</Text>
            </View>
          </View>
          <View style={styles.singin}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.ALREADYHAVEANACCO}>ALREADY HAVE AN ACCOUNT</Text>
              <Text style={styles.SIGNIN}>SIGN IN</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'url(#linearGradient-1)',
    paddingTop: 26,
    paddingBottom: 90
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 77,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_56: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 50,
    width: 50
  },
  group_59: {

  },
  Signup: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  avatar: {
    alignSelf: 'flex-end',
    marginRight: 347,
    marginTop: 38
  },
  name: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 73,
    width: 244,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_50: {
    height: 50,
    width: 50
  },
  NAME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 79
  },
  group_46: {

  },
  Entername: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_42: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  email: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 41,
    width: 242,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_41: {
    height: 50,
    width: 50
  },
  EMAIL: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 75
  },
  group_38: {

  },
  Enteremail: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_34: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  password: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 41,
    width: 292,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_33: {
    height: 50,
    width: 50
  },
  PASSWORD: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 70
  },
  group_29: {

  },
  Enterpassword: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_25: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  phone: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 41,
    width: 360,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  PHONE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  group: {

  },
  Enterphonenumber: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 77,
    marginTop: 59
  },
  continue: {
    alignSelf: 'flex-end',
    marginRight: 138,
    marginTop: 78,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_14: {
    height: 108,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Continue: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  singin: {
    alignSelf: 'flex-end',
    marginRight: 237,
    marginTop: 61,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ALREADYHAVEANACCO: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  }
})
