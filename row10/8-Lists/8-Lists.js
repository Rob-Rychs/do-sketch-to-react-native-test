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

import bgoverlay from './8-Lists_images/bgoverlay.png'
import group_72 from './8-Lists_images/group_72.png'
import group_66 from './8-Lists_images/group_66.png'
import do_60 from './8-Lists_images/do_60.png'
import done_53 from './8-Lists_images/done_53.png'
import do_48 from './8-Lists_images/do_48.png'
import done from './8-Lists_images/done.png'
import do_34 from './8-Lists_images/do_34.png'
import do_28 from './8-Lists_images/do_28.png'
import do_21 from './8-Lists_images/do_21.png'
import line_19 from './8-Lists_images/line_19.png'
import do_15 from './8-Lists_images/do_15.png'
import line from './8-Lists_images/line.png'
import line_57 from './8-Lists_images/line_57.png'
import line_51 from './8-Lists_images/line_51.png'
import line_44 from './8-Lists_images/line_44.png'
import line_38 from './8-Lists_images/line_38.png'
import line_32 from './8-Lists_images/line_32.png'
import line_25 from './8-Lists_images/line_25.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={bgoverlay} style={styles.bgoverlay} />
            <View style={styles.navbar}>
              <View style={styles.bounds_64}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_75} />
                      <Image source={group_72} style={styles.group_72} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_69} />
                      <Image source={group_66} style={styles.group_66} />
                    </View>
                  </View>
                  <Text style={styles.TRAVEL}>TRAVEL</Text>
                </View>
              </View>
            </View>
            <View style={styles._1}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Paris}>Paris</Text>
                <Image source={do_60} style={styles.do_60} />
              </View>
            </View>
            <View style={styles._2}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={done_53} style={styles.done_53} />
                <Text style={styles.Bananas}>London</Text>
              </View>
            </View>
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <Image source={do_48} style={styles.do_48} />
                <Text style={styles.Barcelona}>Barcelona</Text>
              </View>
            </View>
            <View style={styles._4}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={done} style={styles.done} />
                <Text style={styles.Bread}>Maui</Text>
              </View>
            </View>
            <View style={styles._5}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={do_34} style={styles.do_34} />
                <Text style={styles.Cheese}>New York</Text>
              </View>
            </View>
            <View style={styles._6}>
              <View style={{flexDirection: 'row'}}>
                <Image source={do_28} style={styles.do_28} />
                <Text style={styles.SanFrancisco}>San Francisco</Text>
              </View>
            </View>
            <View style={styles._7_20}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={do_21} style={styles.do_21} />
                <Text style={styles.BoraBora}>Bora Bora</Text>
              </View>
            </View>
            <Image source={line_19} style={styles.line_19} />
            <View style={styles._7}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={do_15} style={styles.do_15} />
                <Text style={styles.Yogurt}>Zurich</Text>
              </View>
            </View>
            <View style={styles.tabbar}>
              <View style={styles.add}>
                <View style={styles.bg_10}>
                  <View style={styles.group}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds} />
                      <Image source={line} style={styles.line} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Image>
          <Image source={line_57} style={styles.line_57} />
          <Image source={line_51} style={styles.line_51} />
          <Image source={line_44} style={styles.line_44} />
          <Image source={line_38} style={styles.line_38} />
          <Image source={line_32} style={styles.line_32} />
          <Image source={line_25} style={styles.line_25} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bgoverlay: {
    paddingBottom: 15
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_64: {
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
  bounds_75: {
    height: 50,
    width: 50
  },
  group_72: {

  },
  search: {
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
  TRAVEL: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 44,
    width: 159,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Paris: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  do_60: {

  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 84,
    width: 202,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_53: {

  },
  Bananas: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _3: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 82,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_48: {

  },
  Barcelona: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 90
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 82,
    width: 162,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {

  },
  Bread: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 82,
    width: 229,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_34: {

  },
  Cheese: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  _6: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 82,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_28: {

  },
  SanFrancisco: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 90
  },
  _7_20: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 82,
    width: 236,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_21: {

  },
  BoraBora: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_19: {
    alignSelf: 'center',
    marginTop: 41
  },
  _7: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 41,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_15: {

  },
  Yogurt: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  tabbar: {
    alignSelf: 'center',
    marginTop: 77,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_10: {
    backgroundColor: '#FFFFFF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  line: {

  },
  line_57: {

  },
  line_51: {

  },
  line_44: {

  },
  line_38: {

  },
  line_32: {

  },
  line_25: {

  }
})
