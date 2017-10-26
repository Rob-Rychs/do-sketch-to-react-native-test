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

import group_45 from './3-Walkthrough_images/group_45.png'
import card_38 from './3-Walkthrough_images/card_38.png'
import bg_18 from './3-Walkthrough_images/bg_18.png'
import group_35 from './3-Walkthrough_images/group_35.png'
import line_33 from './3-Walkthrough_images/line_33.png'
import line_34 from './3-Walkthrough_images/line_34.png'
import group_29 from './3-Walkthrough_images/group_29.png'
import line_27 from './3-Walkthrough_images/line_27.png'
import line_28 from './3-Walkthrough_images/line_28.png'
import group from './3-Walkthrough_images/group.png'
import line from './3-Walkthrough_images/line.png'
import line_22 from './3-Walkthrough_images/line_22.png'
import card from './3-Walkthrough_images/card.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._3Walkthrough}>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_49} />
                    <Image source={group_45} style={styles.group_45} />
                  </View>
                </View>
                <Text style={styles.Walkthrough}>
                  <Text>Walkthroug</Text>{'\n'}
                  <Text>h</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={card_38} style={styles.card_38} />
            <View style={styles.card_15}>
              <View style={styles.bg_16}>
                <Image source={bg_18} style={styles.bg_18}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.tasks}>
                      <View style={styles._1}>
                        <View style={{flexDirection: 'row'}}>
                          <Image source={group_35} style={styles.group_35} />
                          <Image source={line_33} style={styles.line_33} />
                          <Image source={line_34} style={styles.line_34} />
                        </View>
                      </View>
                      <View style={styles._2}>
                        <View style={{flexDirection: 'row'}}>
                          <Image source={group_29} style={styles.group_29} />
                          <Image source={line_27} style={styles.line_27} />
                          <Image source={line_28} style={styles.line_28} />
                        </View>
                      </View>
                    </View>
                    <View style={styles._3}>
                      <View style={{flexDirection: 'row'}}>
                        <Image source={group} style={styles.group} />
                        <Image source={line} style={styles.line} />
                        <Image source={line_22} style={styles.line_22} />
                      </View>
                    </View>
                  </View>
                </Image>
                <Text style={styles.Manageyourtasksqu}>
                  <Text>Manage your tasks quickly </Text>{'\n'}
                  <Text>and efficiently</Text>{'\n'}
                </Text>
              </View>
            </View>
            <Image source={card} style={styles.card} />
          </View>
          <View style={styles.pagecontroller} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _3Walkthrough: {

  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds: {
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
  bounds_49: {
    height: 50,
    width: 50
  },
  group_45: {

  },
  Walkthrough: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  card_38: {

  },
  card_15: {
    height: 860,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_16: {
    backgroundColor: '#FFFFFF',
    paddingTop: 176,
    paddingBottom: 89
  },
  bg_18: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tasks: {
    width: 252,
    height: 249,
    paddingBottom: 101
  },
  _1: {
    alignSelf: 'center',
    width: 252,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_35: {

  },
  line_33: {

  },
  line_34: {

  },
  _2: {
    alignSelf: 'flex-start',
    marginTop: 54,
    width: 222,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_29: {

  },
  line_27: {

  },
  line_28: {

  },
  _3: {
    width: 242,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {

  },
  line: {

  },
  line_22: {

  },
  Manageyourtasksqu: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'flex-end',
    marginRight: 91,
    marginTop: 255,
    textAlign: 'center'
  },
  card: {

  },
  pagecontroller: {
    alignSelf: 'center',
    marginTop: 120,
    width: 118,
    height: 20
  }
})
