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

import group_69 from './8-List_images/group_69.png'
import group_63 from './8-List_images/group_63.png'
import line_58 from './8-List_images/line_58.png'
import do_48 from './8-List_images/do_48.png'
import line_45 from './8-List_images/line_45.png'
import done_41 from './8-List_images/done_41.png'
import line_39 from './8-List_images/line_39.png'
import do_36 from './8-List_images/do_36.png'
import group from './8-List_images/group.png'
import line_29 from './8-List_images/line_29.png'
import done from './8-List_images/done.png'
import line_23 from './8-List_images/line_23.png'
import do_19 from './8-List_images/do_19.png'
import line_17 from './8-List_images/line_17.png'
import do_13 from './8-List_images/do_13.png'
import line from './8-List_images/line.png'
import do_7 from './8-List_images/do_7.png'

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
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_61}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.back}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_72} />
                          <Image source={group_69} style={styles.group_69} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_66} />
                          <Image source={group_63} style={styles.group_63} />
                        </View>
                      </View>
                      <Text style={styles._1224}>
                        <Text>12 / 2</Text>{'\n'}
                        <Text>4</Text>{'\n'}
                      </Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.Salad}>Salad</Text>
              </View>
              <View style={styles.add}>
                <View style={styles.bg}>
                  <View style={styles.group_57}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_59} />
                      <Image source={line_58} style={styles.line_58} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_48} style={styles.do_48} />
              <Text style={styles.Carrots}>Carrots</Text>
            </View>
          </View>
          <Image source={line_45} style={styles.line_45} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={done_41} style={styles.done_41} />
              <Text style={styles.Nuts}>Nuts</Text>
            </View>
          </View>
          <Image source={line_39} style={styles.line_39} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <Image source={do_36} style={styles.do_36} />
              <View style={styles.star}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_34} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.Lettuce}>Lettuce</Text>
            </View>
          </View>
          <Image source={line_29} style={styles.line_29} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={done} style={styles.done} />
              <Text style={styles.Arugula}>Arugula</Text>
            </View>
          </View>
          <Image source={line_23} style={styles.line_23} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_19} style={styles.do_19} />
              <Text style={styles.Dressing}>Dressing</Text>
            </View>
          </View>
          <Image source={line_17} style={styles.line_17} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_13} style={styles.do_13} />
              <Text style={styles.Cheese}>Cheese</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._7}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_7} style={styles.do_7} />
              <Text style={styles.Lime}>Lime</Text>
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
  header: {
    backgroundColor: 'url(#linearGradient-1)',
    height: 416,
    paddingTop: 4,
    paddingBottom: 156
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_61: {
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
  bounds_72: {
    height: 50,
    width: 50
  },
  group_69: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  group_63: {

  },
  _1224: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 127
  },
  Salad: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 69,
    marginTop: 32,
    textAlign: 'left'
  },
  add: {
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
  group_57: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_59: {
    height: 50,
    width: 50
  },
  line_58: {

  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 48,
    width: 196,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_48: {

  },
  Carrots: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_45: {
    alignSelf: 'center',
    marginTop: 41
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 40,
    width: 158,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_41: {

  },
  Nuts: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_39: {
    alignSelf: 'center',
    marginTop: 42
  },
  _3: {
    alignSelf: 'center',
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_36: {

  },
  star: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_34: {
    height: 50,
    width: 50
  },
  group: {

  },
  Lettuce: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 90
  },
  line_29: {
    alignSelf: 'center',
    marginTop: 42
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 44,
    width: 205,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {

  },
  Arugula: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_23: {
    alignSelf: 'center',
    marginTop: 38
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 41,
    width: 217,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_19: {

  },
  Dressing: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_17: {
    alignSelf: 'center',
    marginTop: 41
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 41,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_13: {

  },
  Cheese: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'center',
    marginTop: 41
  },
  _7: {
    alignSelf: 'flex-start',
    marginLeft: 68,
    marginTop: 40,
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_7: {

  },
  Lime: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
