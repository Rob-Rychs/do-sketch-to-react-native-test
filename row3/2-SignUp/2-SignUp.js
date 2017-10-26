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

import avatar from './2-SignUp_images/avatar.png'
import group_38 from './2-SignUp_images/group_38.png'
import group_46 from './2-SignUp_images/group_46.png'
import line_32 from './2-SignUp_images/line_32.png'
import line_28 from './2-SignUp_images/line_28.png'
import line_17 from './2-SignUp_images/line_17.png'
import line from './2-SignUp_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._2SignUp}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <Image source={avatar} style={styles.avatar} />
                  <View style={styles.add}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_41} />
                      <Image source={group_38} style={styles.group_38} />
                    </View>
                  </View>
                </Image>
              </View>
              <View style={styles.navbar}>
                <View style={styles.bounds_43}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.close}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_49} />
                        <Image source={group_46} style={styles.group_46} />
                      </View>
                    </View>
                    <Text style={styles.Signup}>
                      <Text>Sign u</Text>{'\n'}
                      <Text>p</Text>{'\n'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.name}>
            <Text style={styles.Name2}>
              <Text>Nam</Text>{'\n'}
              <Text>e</Text>{'\n'}
            </Text>
            <Text style={styles.MarieSimpson}>Marie Simpson</Text>
            <Image source={line_32} style={styles.line_32} />
          </View>
          <View style={styles.email}>
            <Text style={styles.Email}>Email</Text>
            <Text style={styles.marieinvisionappco}>marie@invisionapp.com</Text>
            <Image source={line_28} style={styles.line_28} />
          </View>
          <View style={styles.password}>
            <Text style={styles.Password}>Password</Text>
            <Image source={line_17} style={styles.line_17} />
          </View>
          <View style={styles.birthday}>
            <Text style={styles.Birthday}>Birthday</Text>
            <Text style={styles.January121976}>January 12, 1976</Text>
            <Image source={line} style={styles.line} />
          </View>
          <View style={styles.done}>
            <View style={styles.bg_8} />
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _2SignUp: {

  },
  headerbg: {
    backgroundColor: '#50D2C2',
    height: 443,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 117
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_41: {
    height: 50,
    width: 50
  },
  group_38: {

  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_43: {
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
  bounds_49: {
    height: 50,
    width: 50
  },
  group_46: {

  },
  Signup: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  name: {
    alignSelf: 'center',
    marginTop: 460,
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
  line_32: {
    alignSelf: 'center',
    marginTop: 26
  },
  email: {
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
  line_28: {
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
  line_17: {
    alignSelf: 'center',
    marginTop: 71
  },
  birthday: {
    alignSelf: 'center',
    marginTop: 30,
    height: 104
  },
  Birthday: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    textAlign: 'left'
  },
  January121976: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 7,
    textAlign: 'left'
  },
  line: {
    alignSelf: 'center',
    marginTop: 26
  },
  done: {
    alignSelf: 'center',
    marginTop: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_8: {
    height: 120,
    backgroundColor: '#6563A4',
    borderRadius: 4
  }
})
