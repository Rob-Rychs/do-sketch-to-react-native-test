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

import active from './7-Groups_images/active.png'
import group_52 from './7-Groups_images/group_52.png'
import group from './7-Groups_images/group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#F8F8F9'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.tabs}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.ACTIVE}>ACTIVE</Text>
                  <Text style={styles.ARCHIVED}>ARCHIVED</Text>
                </View>
                <Image source={active} style={styles.active} />
              </View>
              <View style={styles.navbg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_56} />
                          <Image source={group_52} style={styles.group_52} />
                        </View>
                      </View>
                      <View style={styles.add}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_49} />
                          <Image source={group} style={styles.group} />
                        </View>
                      </View>
                      <Text style={styles.Groups}>Groups</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.food}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.img_35} />
                  <View style={styles.bg_33}>
                    <Text style={styles.Food}>Food</Text>
                  </View>
                </View>
              </View>
              <View style={styles.architecture}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.img_29} />
                  <View style={styles.bg_27}>
                    <Text style={styles.Architecture}>Architecture</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.travel}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.img_23} />
                  <View style={styles.bg_21}>
                    <Text style={styles.Travel}>Travel</Text>
                  </View>
                </View>
              </View>
              <View style={styles.work}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.img} />
                  <View style={styles.bg}>
                    <Text style={styles.Work}>Work</Text>
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
  _7Groups: {

  },
  tabs: {
    height: 58
  },
  ACTIVE: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 144
  },
  ARCHIVED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginTop: 28
  },
  navbg: {
    height: 250,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navbar: {
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
  bounds_56: {
    height: 50,
    width: 50
  },
  group_52: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 50,
    width: 50
  },
  group: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  food: {
    height: 519,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_35: {
    backgroundColor: '#1D1D26',
    height: 398
  },
  bg_33: {
    backgroundColor: '#FFFFFF',
    width: 345,
    height: 510,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 52
  },
  Food: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  architecture: {
    height: 532,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_29: {
    backgroundColor: '#1D1D26',
    height: 403
  },
  bg_27: {
    backgroundColor: '#FFFFFF',
    width: 345,
    height: 510,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 52
  },
  Architecture: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  travel: {
    height: 526,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_23: {
    backgroundColor: '#1D1D26',
    height: 413
  },
  bg_21: {
    backgroundColor: '#FFFFFF',
    width: 345,
    height: 510,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 52
  },
  Travel: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  work: {
    height: 520,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    backgroundColor: '#1D1D26',
    height: 384
  },
  bg: {
    backgroundColor: '#FFFFFF',
    width: 345,
    height: 510,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 52
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  }
})
