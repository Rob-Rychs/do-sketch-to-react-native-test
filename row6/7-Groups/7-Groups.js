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

import group_20 from './7-Groups_images/group_20.png'
import group from './7-Groups_images/group.png'
import group_85 from './7-Groups_images/group_85.png'
import group_79 from './7-Groups_images/group_79.png'
import group_58 from './7-Groups_images/group_58.png'
import oval_32 from './7-Groups_images/oval_32.png'
import oval_52 from './7-Groups_images/oval_52.png'
import oval_42 from './7-Groups_images/oval_42.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={styles.navbar}>
            <View style={styles.bounds}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.menu}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_24} />
                    <Image source={group_20} style={styles.group_20} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_17} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <Text style={styles.Groups}>Groups</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.tabbar}>
                <View style={styles.bg_56}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.add}>
                      <View style={styles.group_73}>
                        <View style={styles.bounds_77} />
                      </View>
                    </View>
                    <View style={styles.calendar}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_94} />
                        <Image source={group_85} style={styles.group_85} />
                      </View>
                    </View>
                    <View style={styles.overview}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_83} />
                        <Image source={group_79} style={styles.group_79} />
                      </View>
                    </View>
                    <View style={styles.lists}>
                      <View style={styles.bounds_70} />
                    </View>
                    <View style={styles.timeline}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_62} />
                        <Image source={group_58} style={styles.group_58} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._3}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bg_27} />
                  <View style={styles.bg_26}>
                    <Text style={styles.Food}>Food</Text>
                    <View style={styles.count}>
                      <Image source={oval_32} style={styles.oval_32}>
                        <Text style={styles._9}>9</Text>
                      </Image>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._1}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bg_47} />
                  <View style={styles.bg_46}>
                    <Text style={styles.Adventure}>
                      <Text>Adventur</Text>{'\n'}
                      <Text>e</Text>{'\n'}
                    </Text>
                    <View style={styles.count_51}>
                      <Image source={oval_52} style={styles.oval_52}>
                        <Text style={styles._12}>
                          <Text>1</Text>{'\n'}
                          <Text>2</Text>{'\n'}
                        </Text>
                      </Image>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles._2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bg_37} />
                  <View style={styles.bg_36}>
                    <Text style={styles.Concerts}>
                      <Text>Concert</Text>{'\n'}
                      <Text>s</Text>{'\n'}
                    </Text>
                    <View style={styles.count_41}>
                      <Image source={oval_42} style={styles.oval_42}>
                        <Text style={styles._7}>7</Text>
                      </Image>
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
    backgroundColor: '#1D1D26'
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
  bounds_24: {
    height: 50,
    width: 50
  },
  group_20: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_17: {
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
    textAlign: 'left',
    marginLeft: 115
  },
  tabbar: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_56: {
    height: 120,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_73: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_77: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_94: {
    height: 50,
    width: 50
  },
  group_85: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_83: {
    height: 50,
    width: 50
  },
  group_79: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_70: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_62: {
    height: 49,
    width: 50
  },
  group_58: {

  },
  _3: {
    height: 477,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_27: {
    backgroundColor: '#1D1D26'
  },
  bg_26: {
    height: 345,
    backgroundColor: '#FFFFFF',
    paddingTop: 100,
    paddingBottom: 106
  },
  Food: {
    backgroundColor: 'transparent',
    fontSize: 49,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 109,
    textAlign: 'right'
  },
  count: {
    alignSelf: 'flex-end',
    marginRight: 138,
    marginTop: 14,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_32: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  _9: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _1: {
    height: 394,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_47: {
    backgroundColor: '#1D1D26'
  },
  bg_46: {
    height: 345,
    backgroundColor: '#FFFFFF',
    paddingTop: 100,
    paddingBottom: 106
  },
  Adventure: {
    backgroundColor: 'transparent',
    fontSize: 49,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 49,
    textAlign: 'right'
  },
  count_51: {
    alignSelf: 'flex-end',
    marginRight: 138,
    marginTop: 14,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_52: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _2: {
    height: 401,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_37: {
    backgroundColor: '#1D1D26'
  },
  bg_36: {
    height: 345,
    backgroundColor: '#FFFFFF'
  },
  Concerts: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 64,
    textAlign: 'left'
  },
  count_41: {
    alignSelf: 'flex-start',
    marginLeft: 139,
    marginTop: 14,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_42: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  _7: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
