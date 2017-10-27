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

import group_44 from './3-Walkthrough_images/group_44.png'
import shape_38 from './3-Walkthrough_images/shape_38.png'
import shape from './3-Walkthrough_images/shape.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds_41}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.back}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_47} />
                    <Image source={group_44} style={styles.group_44} />
                  </View>
                </View>
                <Text style={styles.Signup}>
                  <Text>Sign u</Text>{'\n'}
                  <Text>p</Text>{'\n'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._3}>
                <View style={styles.bg_34}>
                  <View style={styles.group_36}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds_39} />
                      <Image source={shape_38} style={styles.shape_38} />
                    </View>
                  </View>
                  <Text style={styles.Manageyourtasksfr_35}>
                    <Text>Manage your tasks from </Text>{'\n'}
                    <Text>anywhere you want</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <View style={styles._2}>
                <View style={styles.bg_20}>
                  <View style={styles.group_22}>
                    <View style={styles.bounds_32} />
                  </View>
                  <Text style={styles.Manageyourtasksfr_21}>
                    <Text>Manage your tasks from </Text>{'\n'}
                    <Text>anywhere you want</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <View style={styles._1}>
                <View style={styles.bg_13}>
                  <View style={styles.group}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.bounds} />
                      <Image source={shape} style={styles.shape} />
                    </View>
                  </View>
                  <Text style={styles.Manageyourtasksfr}>
                    <Text>Manage your tasks from </Text>{'\n'}
                    <Text>anywhere you want</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.pagecontroller} />
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
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_41: {
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
  bounds_47: {
    height: 50,
    width: 50
  },
  group_44: {

  },
  Signup: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _3: {
    height: 800,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_34: {
    height: 800,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingTop: 200,
    paddingBottom: 99
  },
  group_36: {
    alignSelf: 'center',
    width: 240,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_39: {
    height: 240,
    width: 240
  },
  shape_38: {

  },
  Manageyourtasksfr_35: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 180,
    textAlign: 'center'
  },
  _2: {
    height: 704,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_20: {
    height: 704,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingTop: 176,
    paddingBottom: 87
  },
  group_22: {
    alignSelf: 'center',
    width: 211,
    height: 211,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_32: {
    height: 211,
    width: 211
  },
  Manageyourtasksfr_21: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 158,
    textAlign: 'center'
  },
  _1: {
    height: 576,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_13: {
    height: 576,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    paddingTop: 144,
    paddingBottom: 71
  },
  group: {
    alignSelf: 'center',
    width: 173,
    height: 173,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 173,
    width: 173
  },
  shape: {

  },
  Manageyourtasksfr: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 130,
    textAlign: 'center'
  },
  pagecontroller: {
    alignSelf: 'center',
    marginTop: 414,
    width: 120,
    height: 20
  }
})
