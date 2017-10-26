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

import group from './12-Settings_images/group.png'
import group_59 from './12-Settings_images/group_59.png'
import more_45 from './12-Settings_images/more_45.png'
import line_43 from './12-Settings_images/line_43.png'
import switchon from './12-Settings_images/switchon.png'
import line_37 from './12-Settings_images/line_37.png'
import switchoff from './12-Settings_images/switchoff.png'
import line_31 from './12-Settings_images/line_31.png'
import more_28 from './12-Settings_images/more_28.png'
import line_24 from './12-Settings_images/line_24.png'
import more_21 from './12-Settings_images/more_21.png'
import line_18 from './12-Settings_images/line_18.png'
import more_15 from './12-Settings_images/more_15.png'
import line from './12-Settings_images/line.png'
import more from './12-Settings_images/more.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._12Settings}>
          <View style={styles.header}>
            <View style={styles.navbar}>
              <View style={styles.bounds_51}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_57} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <View style={styles.logout}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_63} />
                      <Image source={group_59} style={styles.group_59} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.NicoleJames}>Nicole James</Text>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Image source={more_45} style={styles.more_45} />
              <Text style={styles.general}>
                <Text>Genera</Text>{'\n'}
                <Text>l</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_43} style={styles.line_43} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchon} style={styles.switchon} />
              <Text style={styles.notifications}>
                <Text>Notification</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_37} style={styles.line_37} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={switchoff} style={styles.switchoff} />
              <Text style={styles.sound}>
                <Text>Soun</Text>{'\n'}
                <Text>d</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_31} style={styles.line_31} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row'}}>
              <Image source={more_28} style={styles.more_28} />
              <Text style={styles.theme}>
                <Text>Them</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
              <Text style={styles.standard}>
                <Text>Standar</Text>{'\n'}
                <Text>d</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_24} style={styles.line_24} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row'}}>
              <Image source={more_21} style={styles.more_21} />
              <Text style={styles.support}>
                <Text>Suppor</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_18} style={styles.line_18} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row'}}>
              <Image source={more_15} style={styles.more_15} />
              <Text style={styles.privacy_14}>
                <Text>Privac</Text>{'\n'}
                <Text>y</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._7}>
            <View style={{flexDirection: 'row'}}>
              <Image source={more} style={styles.more} />
              <Text style={styles.privacy}>
                <Text>Logou</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
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
  header: {
    backgroundColor: '#1D1D26',
    alignSelf: 'center',
    height: 498,
    paddingTop: 38,
    paddingBottom: 48
  },
  navbar: {
    alignSelf: 'flex-end',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_51: {
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
  bounds_57: {
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
  bounds_63: {
    height: 50,
    width: 50
  },
  group_59: {

  },
  NicoleJames: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 202,
    textAlign: 'left'
  },
  _1: {
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  more_45: {

  },
  general: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_43: {
    alignSelf: 'flex-end',
    marginRight: 0,
    marginTop: 41
  },
  _2: {
    alignSelf: 'flex-end',
    marginRight: 51,
    marginTop: 45,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchon: {

  },
  notifications: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_37: {
    alignSelf: 'flex-end',
    marginRight: 0,
    marginTop: 46
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 45,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchoff: {

  },
  sound: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_31: {
    alignSelf: 'flex-end',
    marginTop: 47
  },
  _4: {
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  more_28: {

  },
  theme: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  standard: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 71
  },
  line_24: {
    alignSelf: 'flex-end',
    marginTop: 41
  },
  _5: {
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  more_21: {

  },
  support: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_18: {
    alignSelf: 'flex-end',
    marginTop: 41
  },
  _6: {
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  more_15: {

  },
  privacy_14: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 41
  },
  _7: {
    alignSelf: 'flex-end',
    marginRight: 38,
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  more: {

  },
  privacy: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  }
})
