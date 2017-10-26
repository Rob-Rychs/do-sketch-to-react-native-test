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

import bg_31 from './7-Groups_images/bg_31.png'
import oval from './7-Groups_images/oval.png'
import group_48 from './7-Groups_images/group_48.png'
import more from './7-Groups_images/more.png'
import line_13 from './7-Groups_images/line_13.png'
import line from './7-Groups_images/line.png'
import line_36 from './7-Groups_images/line_36.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.headerbg}>
                <View style={styles.tabs}>
                  <View style={styles.bg}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles._1_30}>
                        <Image source={bg_31} style={styles.bg_31} />
                          <Text style={styles.Popular}>Popular</Text>
                        </Image>
                      </View>
                      <View style={styles._2_27}>
                        <View style={styles.bg_28}>
                          <Text style={styles.Latest}>Latest</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.Recipes}>Recipes</Text>
                <View style={styles.count}>
                  <Image source={oval} style={styles.oval}>
                    <Text style={styles._12}>
                      <Text>1</Text>{'\n'}
                      <Text>2</Text>{'\n'}
                    </Text>
                  </Image>
                </View>
              </View>
              <View style={styles.navbar}>
                <View style={styles.bounds_39}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_52} />
                        <Image source={group_48} style={styles.group_48} />
                      </View>
                    </View>
                    <Image source={more} style={styles.more} />
                    <Text style={styles.GROUPS}>GROUPS</Text>
                  </View>
                </View>
              </View>
              <View style={styles._1}>
                <Text style={styles.Drinks}>
                  <Text>Drink</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
                <Text style={styles._24ITEMS_15}>24 ITEMS</Text>
              </View>
            </View>
          </View>
          <Image source={line_13} style={styles.line_13} />
          <View style={styles._2}>
            <Text style={styles.Soups}>
              <Text>Soup</Text>{'\n'}
              <Text>s</Text>{'\n'}
            </Text>
            <Text style={styles._4ITEMS}>4 ITEMS</Text>
          </View>
          <Image source={line} style={styles.line} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles._3}>
              <Text style={styles.Desserts}>
                <Text>Dessert</Text>{'\n'}
                <Text>s</Text>{'\n'}
              </Text>
              <Text style={styles._24ITEMS}>24 ITEMS</Text>
            </View>
            <View style={styles.add}>
              <View style={styles.bg_34}>
                <View style={styles.group}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds} />
                    <Image source={line_36} style={styles.line_36} />
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
  headerbg: {
    backgroundColor: '#6563A4',
    height: 658,
    paddingTop: 16,
    paddingBottom: 239
  },
  tabs: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 144,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  _1_30: {
    width: 300,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_31: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Popular: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#00B9FF',
    textAlign: 'center'
  },
  _2_27: {
    width: 298,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_28: {
    height: 62,
    borderRadius: 31,
    width: 298,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Latest: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Recipes: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 274,
    marginTop: 80,
    textAlign: 'center'
  },
  count: {
    alignSelf: 'flex-start',
    marginLeft: 366,
    marginTop: 26,
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval: {
    alignItems: 'flex-start',
    marginLeft: 12,
    justifyContent: 'center'
  },
  _12: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_39: {
    height: 128,
    backgroundColor: '#00B9FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_52: {
    height: 50,
    width: 50
  },
  group_48: {

  },
  more: {

  },
  GROUPS: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _1: {
    width: 144,
    height: 100
  },
  Drinks: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _24ITEMS_15: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 2,
    textAlign: 'center'
  },
  line_13: {
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 324,
    marginTop: 71,
    width: 141,
    height: 110
  },
  Soups: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _4ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 12,
    textAlign: 'center'
  },
  line: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 58
  },
  _3: {
    width: 197,
    height: 100
  },
  Desserts: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: '300',
    color: '#1D1D26',
    alignSelf: 'center'
  },
  _24ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 2,
    textAlign: 'center'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_34: {
    backgroundColor: '#D667CD',
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
  line_36: {

  }
})
