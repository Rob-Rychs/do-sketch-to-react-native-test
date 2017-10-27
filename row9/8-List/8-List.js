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

import group_63 from './8-List_images/group_63.png'
import group_54 from './8-List_images/group_54.png'
import line from './8-List_images/line.png'
import do_47 from './8-List_images/do_47.png'
import done_41 from './8-List_images/done_41.png'
import do_37 from './8-List_images/do_37.png'
import done from './8-List_images/done.png'
import do_26 from './8-List_images/do_26.png'
import do_21 from './8-List_images/do_21.png'
import do_16 from './8-List_images/do_16.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={styles._8List}>
          <View style={styles.headerbg}>
            <View style={styles.navbar}>
              <View style={styles.bounds_52}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.notification}>
                    <Text style={styles._8}>8</Text>
                  </View>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_67} />
                      <Image source={group_63} style={styles.group_63} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_57} />
                      <Image source={group_54} style={styles.group_54} />
                    </View>
                  </View>
                  <Text style={styles.Lists}>Lists</Text>
                </View>
              </View>
            </View>
            <Text style={styles.Cakes}>Cakes</Text>
            <View style={styles.add}>
              <View style={styles.bg}>
                <View style={styles.group}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={line} style={styles.line} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles._1}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={do_47} style={styles.do_47} />
                <Text style={styles.Applepie}>
                  <Text>Apple</Text>{'\n'}
                  <Text> pie</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={done_41} style={styles.done_41} />
              <Text style={styles.Cheesecake}>Cheesecake</Text>
            </View>
          </View>
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_37} style={styles.do_37} />
              <Text style={styles.Chocolatecake}>Chocolate cake</Text>
            </View>
          </View>
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={done} style={styles.done} />
              <Text style={styles.Coffeecake}>Coffee cake</Text>
            </View>
          </View>
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_26} style={styles.do_26} />
              <Text style={styles.Cupcake}>Cupcake</Text>
            </View>
          </View>
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_21} style={styles.do_21} />
              <Text style={styles.Layercake}>Layer cake</Text>
            </View>
          </View>
          <View style={styles._7}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_16} style={styles.do_16} />
              <Text style={styles.Wafflecake}>Waffle cake</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _8List: {

  },
  headerbg: {
    backgroundColor: 'url(#linearGradient-1)',
    alignSelf: 'center',
    height: 634,
    paddingTop: 30,
    paddingBottom: 64
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 26,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 15
  },
  bounds_52: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notification: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
    marginLeft: 19,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_67: {
    height: 50,
    width: 50
  },
  group_63: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_57: {
    height: 50,
    width: 50
  },
  group_54: {

  },
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  Cakes: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 304,
    marginTop: 32,
    textAlign: 'center'
  },
  add: {
    alignSelf: 'flex-end',
    marginRight: 83,
    marginTop: 19,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#FF3366',
    width: 110,
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
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 105,
    width: 225,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_47: {

  },
  Applepie: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 6,
    width: 267,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_41: {

  },
  Cheesecake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 70,
    width: 317,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_37: {

  },
  Chocolatecake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 70,
    width: 265,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {

  },
  Coffeecake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 70,
    width: 218,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_26: {

  },
  Cupcake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 70,
    width: 245,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_21: {

  },
  Layercake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _7: {
    alignSelf: 'flex-start',
    marginLeft: 76,
    marginTop: 70,
    width: 259,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_16: {

  },
  Wafflecake: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
