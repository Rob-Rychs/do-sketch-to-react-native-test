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

import bgoverlay from './2-SignUp_images/bgoverlay.png'
import group_64 from './2-SignUp_images/group_64.png'
import group_56 from './2-SignUp_images/group_56.png'
import line_49 from './2-SignUp_images/line_49.png'
import twitter from './2-SignUp_images/twitter.png'
import line_48 from './2-SignUp_images/line_48.png'
import group from './2-SignUp_images/group.png'
import line_39 from './2-SignUp_images/line_39.png'
import line_36 from './2-SignUp_images/line_36.png'
import line_32 from './2-SignUp_images/line_32.png'
import line_20 from './2-SignUp_images/line_20.png'
import line from './2-SignUp_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <Image source={bgoverlay} style={styles.bgoverlay} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.navbar}>
                <View style={styles.bounds_61}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.close}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_67} />
                        <Image source={group_64} style={styles.group_64} />
                      </View>
                    </View>
                    <Text style={styles.SIGNUP}>SIGN UP</Text>
                  </View>
                </View>
              </View>
              <View style={styles.twitterfacebook}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.twitter_55}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{flexDirection: 'column'}}>
                        <View style={styles.bounds_58} />
                        <Image source={group_56} style={styles.group_56} />
                      </View>
                    </View>
                    <Text style={styles.Connectwith_59}>
                      <Text>Connect with</Text>{'\n'}
                      <Text>Twitte</Text>{'\n'}
                      <Text>r</Text>{'\n'}
                    </Text>
                  </View>
                  <Image source={line_49} style={styles.line_49} />
                  <View style={styles.facebook}>
                    <Image source={twitter} style={styles.twitter} />
                    <Text style={styles.Connectwith}>
                      <Text>Connect with</Text>{'\n'}
                      <Text>Facebook</Text>{'\n'}
                    </Text>
                  </View>
                </View>
                <Image source={line_48} style={styles.line_48} />
              </View>
            </View>
          </View>
          <View style={styles.oruseyouremailademail}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.email}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.oruseyouremailad}>or use your email address</Text>
            </View>
          </View>
          <Image source={line_39} style={styles.line_39} />
          <View style={styles.name}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.NAME}>NAME</Text>
              <Text style={styles.PaulJensen}>Paul Jensen</Text>
            </View>
            <Image source={line_36} style={styles.line_36} />
          </View>
          <View style={styles.emailcopy}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.EMAIL}>EMAIL</Text>
              <Text style={styles.paulinvisionappcom}>paul@invisionapp.com</Text>
            </View>
            <Image source={line_32} style={styles.line_32} />
          </View>
          <View style={styles.password}>
            <Text style={styles.PASSWORD}>PASSWORD</Text>
            <Image source={line_20} style={styles.line_20} />
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
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.birthday}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.May251983}>May 25, 1983</Text>
              <Text style={styles.BIRTHDAY}>BIRTHDAY</Text>
            </View>
          </View>
          <Text style={styles.CONTINUE}>CONTINUE</Text>
        </Image>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {

  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_61: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  group_64: {

  },
  SIGNUP: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  twitterfacebook: {
    height: 261
  },
  twitter_55: {
    width: 185,
    height: 150
  },
  bounds_58: {
    height: 49,
    width: 50
  },
  group_56: {

  },
  Connectwith_59: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginTop: 25,
    textAlign: 'center'
  },
  line_49: {

  },
  facebook: {
    width: 185,
    height: 150
  },
  twitter: {
    alignSelf: 'flex-start',
    marginLeft: 64
  },
  Connectwith: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 25
  },
  line_48: {
    alignSelf: 'center',
    marginTop: 1
  },
  oruseyouremailademail: {
    alignSelf: 'center',
    marginTop: 327,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  email: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  oruseyouremailad: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_39: {
    alignSelf: 'center',
    marginTop: 66
  },
  name: {
    alignSelf: 'center',
    marginTop: 61,
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
  line_36: {
    alignSelf: 'center',
    marginTop: 36
  },
  emailcopy: {
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
  line_32: {
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
  line_20: {
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
    textAlign: 'left',
    marginLeft: 1
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
  line: {
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
  CONTINUE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 120,
    textAlign: 'center'
  }
})
