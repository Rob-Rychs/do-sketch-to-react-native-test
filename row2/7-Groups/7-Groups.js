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

import group_54 from './7-Groups_images/group_54.png'
import group from './7-Groups_images/group.png'
import active from './7-Groups_images/active.png'
import line_62 from './7-Groups_images/line_62.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.navbg}>
              <View style={styles.navbar}>
                <View style={styles.bounds}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_58} />
                        <Image source={group_54} style={styles.group_54} />
                      </View>
                    </View>
                    <View style={styles.search}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_51} />
                        <Image source={group} style={styles.group} />
                      </View>
                    </View>
                    <Text style={styles.Groups}>Groups</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tabs}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.POPULAR}>POPULAR</Text>
                <Text style={styles.LATEST}>LATEST</Text>
                <Text style={styles.ARCHIVED}>ARCHIVED</Text>
              </View>
              <Image source={active} style={styles.active} />
            </View>
            <View style={styles.work}>
              <View style={styles.bg_30}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.count_35}>
                    <View style={styles.bg_36}>
                      <Text style={styles._28}>28</Text>
                    </View>
                  </View>
                  <Text style={styles.Work}>
                    <Text>Wor</Text>{'\n'}
                    <Text>k</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.food}>
              <View style={styles.bg_20}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.count_25}>
                    <View style={styles.bg_26}>
                      <Text style={styles._14}>14</Text>
                    </View>
                  </View>
                  <Text style={styles.Food}>Food</Text>
                </View>
              </View>
            </View>
            <View style={styles.auto}>
              <View style={styles.bg}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.add}>
                    <View style={styles.bg_60}>
                      <View style={styles.group_61}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_63} />
                          <Image source={line_62} style={styles.line_62} />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.count}>
                    <View style={styles.bg_16}>
                      <Text style={styles._7}>7</Text>
                    </View>
                  </View>
                  <Text style={styles.Auto}>Auto</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbg: {
    height: 260,
    backgroundColor: '#BA77FF',
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
  bounds_58: {
    height: 50,
    width: 50
  },
  group_54: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_51: {
    height: 50,
    width: 50
  },
  group: {

  },
  Groups: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  tabs: {
    height: 58
  },
  POPULAR: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 72
  },
  LATEST: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 269
  },
  ARCHIVED: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  active: {
    alignSelf: 'flex-start',
    marginTop: 28
  },
  work: {
    height: 385,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 54
  },
  bg_30: {
    backgroundColor: '#B574F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  count_35: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_36: {
    height: 80,
    borderRadius: 40,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 22,
    justifyContent: 'center'
  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 50
  },
  food: {
    height: 383,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 53
  },
  bg_20: {
    backgroundColor: '#B574F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  count_25: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_26: {
    height: 80,
    borderRadius: 40,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 22,
    justifyContent: 'center'
  },
  _14: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Food: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 41
  },
  auto: {
    height: 388,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 44
  },
  bg: {
    backgroundColor: '#B574F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_60: {
    backgroundColor: '#BA77FF',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_61: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_63: {
    height: 50,
    width: 50
  },
  line_62: {

  },
  count: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_16: {
    height: 80,
    borderRadius: 40,
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 29,
    justifyContent: 'center'
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Auto: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 49
  }
})
