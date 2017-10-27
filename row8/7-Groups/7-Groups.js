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

import group_59 from './7-Groups_images/group_59.png'
import group_53 from './7-Groups_images/group_53.png'
import active from './7-Groups_images/active.png'
import img_37 from './7-Groups_images/img_37.png'
import oval_34 from './7-Groups_images/oval_34.png'
import img_28 from './7-Groups_images/img_28.png'
import oval_25 from './7-Groups_images/oval_25.png'
import img_19 from './7-Groups_images/img_19.png'
import line from './7-Groups_images/line.png'
import oval from './7-Groups_images/oval.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_51}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_63} />
                    <Image source={group_59} style={styles.group_59} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_56} />
                    <Image source={group_53} style={styles.group_53} />
                  </View>
                </View>
                <Text style={styles.Overview}>Overview</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.ACTIVE}>ACTIVE</Text>
              <Text style={styles.POPULAR}>POPULAR</Text>
              <Text style={styles.RECENT}>RECENT</Text>
            </View>
            <Image source={active} style={styles.active} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._1}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={img_37} style={styles.img_37} />
                  <View style={styles.bg_32}>
                    <Text style={styles.Salads}>Salads</Text>
                    <View style={styles.count_33}>
                      <Image source={oval_34} style={styles.oval_34}>
                        <Text style={styles._8}>8</Text>
                      </Image>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._2}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={img_28} style={styles.img_28} />
                  <View style={styles.bg_23}>
                    <Text style={styles.Travel}>Travel</Text>
                    <View style={styles.count_24}>
                      <Image source={oval_25} style={styles.oval_25}>
                        <Text style={styles._4}>4</Text>
                      </Image>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._3}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={img_19} style={styles.img_19} />
                  <View style={styles.bg_14}>
                    <Text style={styles.Work}>Work</Text>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.add}>
                        <View style={styles.bg_46}>
                          <View style={styles.group}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View style={styles.bounds} />
                              <Image source={line} style={styles.line} />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.count}>
                        <Image source={oval} style={styles.oval}>
                          <Text style={styles._15}>15</Text>
                        </Image>
                      </View>
                    </View>
                  </View>
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
    backgroundColor: 'url(#linearGradient-1)'
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
  bounds_63: {
    height: 50,
    width: 50
  },
  group_59: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_56: {
    height: 50,
    width: 50
  },
  group_53: {

  },
  Overview: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  tabs: {
    alignSelf: 'flex-end',
    marginRight: 112,
    marginTop: 30,
    height: 40
  },
  ACTIVE: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  POPULAR: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  RECENT: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 7
  },
  _1: {
    height: 412,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_37: {

  },
  bg_32: {
    height: 360,
    backgroundColor: '#FFFFFF10'
  },
  Salads: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 130,
    textAlign: 'right'
  },
  count_33: {
    alignSelf: 'flex-end',
    marginRight: 154,
    marginTop: 25,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_34: {
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _8: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _2: {
    height: 415,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_28: {

  },
  bg_23: {
    height: 360,
    backgroundColor: '#FFFFFF10'
  },
  Travel: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 138,
    textAlign: 'right'
  },
  count_24: {
    alignSelf: 'flex-end',
    marginRight: 154,
    marginTop: 25,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_25: {
    alignItems: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center'
  },
  _4: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _3: {
    height: 404,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_19: {

  },
  bg_14: {
    height: 360,
    backgroundColor: '#FFFFFF10'
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 142,
    textAlign: 'right'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_46: {
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
  count: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval: {
    alignItems: 'flex-start',
    marginLeft: 13,
    justifyContent: 'center'
  },
  _15: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
