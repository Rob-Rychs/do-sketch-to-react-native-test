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

import group_34 from './3-Walkthrough_images/group_34.png'
import oval from './3-Walkthrough_images/oval.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_31}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_38} />
                    <Image source={group_34} style={styles.group_34} />
                  </View>
                </View>
                <Text style={styles.Walkthrough}>Walkthrough</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles._1} />
            <View style={styles._2}>
              <View style={styles.bg_20}>
                <View style={styles.add}>
                  <Image source={oval} style={styles.oval}>
                    <View style={styles.group}>
                      <View style={styles.bounds} />
                    </View>
                  </Image>
                </View>
                <Text style={styles.AddampManageTasks}>Add &amp; Manage Tasks</Text>
              </View>
            </View>
            <View style={styles._3} />
          </View>
          <View style={styles.pagecontroller} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1D1D26'
  },
  navbar: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_31: {
    height: 128,
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_38: {
    height: 50,
    width: 50
  },
  group_34: {

  },
  Walkthrough: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  _1: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 500
  },
  _2: {
    height: 600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_20: {
    backgroundColor: '#FFFFFF',
    paddingTop: 120,
    paddingBottom: 69
  },
  add: {
    alignSelf: 'center',
    width: 260,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 100,
    width: 100
  },
  AddampManageTasks: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 149,
    marginTop: 110,
    textAlign: 'center'
  },
  _3: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 500
  },
  pagecontroller: {
    alignSelf: 'flex-start',
    marginLeft: 332,
    marginTop: 302,
    width: 118,
    height: 20
  }
})
