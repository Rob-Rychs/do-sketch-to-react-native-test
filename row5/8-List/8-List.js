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

import group_61 from './8-List_images/group_61.png'
import group_55 from './8-List_images/group_55.png'
import do_45 from './8-List_images/do_45.png'
import line_42 from './8-List_images/line_42.png'
import group from './8-List_images/group.png'
import done_28 from './8-List_images/done_28.png'
import line_26 from './8-List_images/line_26.png'
import do_23 from './8-List_images/do_23.png'
import line_20 from './8-List_images/line_20.png'
import done from './8-List_images/done.png'
import line_14 from './8-List_images/line_14.png'
import do_10 from './8-List_images/do_10.png'
import line from './8-List_images/line.png'
import do_4 from './8-List_images/do_4.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._8List}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.bg_48} />
              <View style={styles.navbar}>
                <View style={styles.bounds_53}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.back}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_64} />
                        <Image source={group_61} style={styles.group_61} />
                      </View>
                    </View>
                    <View style={styles.add}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_58} />
                        <Image source={group_55} style={styles.group_55} />
                      </View>
                    </View>
                    <Text style={styles.Food}>Food</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_45} style={styles.do_45} />
              <Text style={styles.Apples}>
                <Text>Apple</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_42} style={styles.line_42} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.delete}>
              <View style={styles.bg}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_41} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
            </View>
            <View style={styles._2}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={done_28} style={styles.done_28} />
                <Text style={styles.Bananas}>
                  <Text>Banana</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <Image source={line_26} style={styles.line_26} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_23} style={styles.do_23} />
              <Text style={styles.Juice}>
                <Text>Juic</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_20} style={styles.line_20} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={done} style={styles.done} />
              <Text style={styles.Bread}>
                <Text>Brea</Text>{'\n'}
                <Text>d</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_14} style={styles.line_14} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_10} style={styles.do_10} />
              <Text style={styles.Cheese}>
                <Text>Chees</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_4} style={styles.do_4} />
              <Text style={styles.Milk}>
                <Text>Mil</Text>{'\n'}
                <Text>k</Text>{'\n'}
              </Text>
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
  bg_48: {
    backgroundColor: '#1D1D26',
    height: 451
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_53: {
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
  bounds_64: {
    height: 50,
    width: 50
  },
  group_61: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_58: {
    height: 50,
    width: 50
  },
  group_55: {

  },
  Food: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    width: 203,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_45: {

  },
  Apples: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_42: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 41
  },
  delete: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 130,
    backgroundColor: '#50D2C2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_41: {
    height: 50,
    width: 50
  },
  group: {

  },
  _2: {
    width: 222,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_28: {

  },
  Bananas: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_26: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 1
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 40,
    width: 176,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_23: {

  },
  Juice: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_20: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 42
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 40,
    width: 186,
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
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_14: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 42
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 40,
    width: 210,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_10: {

  },
  Cheese: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 11,
    marginTop: 42
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 71,
    marginTop: 40,
    width: 161,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_4: {

  },
  Milk: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
