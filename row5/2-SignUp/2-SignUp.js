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

import group_47 from './2-SignUp_images/group_47.png'
import avatar from './2-SignUp_images/avatar.png'
import group from './2-SignUp_images/group.png'
import line_30 from './2-SignUp_images/line_30.png'
import line_26 from './2-SignUp_images/line_26.png'
import line_14 from './2-SignUp_images/line_14.png'
import line from './2-SignUp_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._2SignUp}>
          <View style={styles.navbar}>
            <View style={styles.bounds_44}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.close}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.bounds_50} />
                    <Image source={group_47} style={styles.group_47} />
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
            <View style={styles.add}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.bounds} />
                <Image source={group} style={styles.group} />
              </View>
            </View>
          </Image>
          <View style={styles.name}>
            <Text style={styles.FULLNAME}>FULL NAME</Text>
            <Text style={styles.AndreaPierce}>Andrea Pierce</Text>
            <Image source={line_30} style={styles.line_30} />
          </View>
          <View style={styles.email}>
            <Text style={styles.EMAIL}>EMAIL</Text>
            <Text style={styles.andreainvisionappc}>andrea@invisionapp.com</Text>
            <Image source={line_26} style={styles.line_26} />
          </View>
          <View style={styles.password}>
            <Text style={styles.PASSWORD}>PASSWORD</Text>
            <Image source={line_14} style={styles.line_14} />
          </View>
          <View style={styles.birthday}>
            <Text style={styles.BIRTHDAY}>BIRTHDAY</Text>
            <Text style={styles.May151984}>May 15, 1984</Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.create}>
            <View style={styles.bg}>
              <Text style={styles.Create}>Create</Text>
            </View>
          </View>
          <View style={styles.signin}>
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
  _2SignUp: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_44: {
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
  bounds_50: {
    height: 50,
    width: 50
  },
  group_47: {

  },
  Signup: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 18,
    alignItems: 'flex-end',
    marginRight: 20,
    justifyContent: 'flex-start'
  },
  add: {
    width: 59,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 27,
    width: 27
  },
  group: {

  },
  name: {
    alignSelf: 'center',
    marginTop: 70,
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
  line_30: {
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
  line_26: {
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
  line_14: {
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
  line: {
    alignSelf: 'center',
    marginTop: 21
  },
  create: {
    alignSelf: 'center',
    marginTop: 67,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 110,
    backgroundColor: '#50D2C2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Create: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  signin: {
    alignSelf: 'center',
    marginTop: 60,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ALREADYHAVEANACCO: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  SIGNIN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
