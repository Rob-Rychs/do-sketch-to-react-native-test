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

import oval_43 from './1-Login_images/oval_43.png'
import group_44 from './1-Login_images/group_44.png'
import line_34 from './1-Login_images/line_34.png'
import group from './1-Login_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.mark}>
            <Image source={oval_43} style={styles.oval_43}>
              <Image source={group_44} style={styles.group_44} />
            </Image>
          </View>
          <Text style={styles.GetStarted}>
            <Text>Get Started</Text>{'\n'}
            <Text>!</Text>{'\n'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.blur}>
                <View style={styles.username}>
                  <Text style={styles.Username}>
                    <Text>Usernam</Text>{'\n'}
                    <Text>e</Text>{'\n'}
                  </Text>
                  <Text style={styles.marieinvisionappco}>marie@invisionapp.com</Text>
                </View>
                <Image source={line_34} style={styles.line_34} />
                <View style={styles.password}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.Password}>Password</Text>
                    <View style={styles.attention}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.signup}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.Donthaveanaccoun}>Don’t have an account?</Text>
                    <Text style={styles.SignUp}>Sign Up</Text>
                  </View>
                </View>
              </View>
              <View style={styles.singin}>
                <View style={styles.bg_14}>
                  <Text style={styles.SignIn}>Sign In</Text>
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
  bg: {
    backgroundColor: '#50D2C2'
  },
  mark: {
    alignSelf: 'flex-end',
    marginRight: 175,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_43: {
    alignItems: 'flex-end',
    marginRight: 60,
    justifyContent: 'center'
  },
  group_44: {

  },
  GetStarted: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 231,
    marginTop: 80,
    textAlign: 'center'
  },
  blur: {
    height: 509,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    paddingBottom: 41
  },
  username: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    width: 306,
    height: 78
  },
  Username: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  marieinvisionappco: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 7
  },
  line_34: {
    alignSelf: 'center',
    marginTop: 26
  },
  password: {
    alignSelf: 'center',
    marginTop: 31,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  attention: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  signup: {
    alignSelf: 'center',
    marginTop: 234,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Donthaveanaccoun: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  SignUp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  singin: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_14: {
    height: 120,
    backgroundColor: '#6563A4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SignIn: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
