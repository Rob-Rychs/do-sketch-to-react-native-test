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

import group_46 from './7-Groups_images/group_46.png'
import group from './7-Groups_images/group.png'
import category_32 from './7-Groups_images/category_32.png'
import category from './7-Groups_images/category.png'
import category_27 from './7-Groups_images/category_27.png'
import category2 from './7-Groups_images/category2.png'
import category3 from './7-Groups_images/category3.png'
import category4 from './7-Groups_images/category4.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#F4F4F4'}}>
        <View style={styles._7Groups}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles.menu}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_50} />
                          <Image source={group_46} style={styles.group_46} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_44} />
                          <Image source={group} style={styles.group} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.MyGroups}>My Groups</Text>
              </View>
              <View style={styles.shop}>
                <View style={styles.bg_29}>
                  <Text style={styles.Shop}>Shop</Text>
                  <Text style={styles._25ITEMS}>
                    <Text>25 ITEM</Text>{'\n'}
                    <Text>S</Text>{'\n'}
                  </Text>
                  <Image source={category_32} style={styles.category_32} />
                </View>
              </View>
              <View style={styles.work}>
                <View style={styles.bg_14}>
                  <Text style={styles.Work}>Work</Text>
                  <Text style={styles._12ITEMS}>12 ITEMS</Text>
                  <Image source={category} style={styles.category} />
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.health}>
              <View style={styles.bg_24}>
                <Text style={styles.Health}>Health</Text>
                <Text style={styles._3ITEMS}>
                  <Text>3 ITEM</Text>{'\n'}
                  <Text>S</Text>{'\n'}
                </Text>
                <Image source={category_27} style={styles.category_27} />
              </View>
            </View>
            <View style={styles.travel}>
              <View style={styles.bg_19}>
                <Text style={styles.Travel}>Travel</Text>
                <Text style={styles._8ITEMS}>8 ITEMS</Text>
                <Image source={category2} style={styles.category2} />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.bills}>
              <View style={styles.bg_9}>
                <Text style={styles.Bills}>Bills</Text>
                <Text style={styles._16ITEMS}>
                  <Text>16 ITEM</Text>{'\n'}
                  <Text>S</Text>{'\n'}
                </Text>
                <Image source={category3} style={styles.category3} />
              </View>
            </View>
            <View style={styles.auto}>
              <View style={styles.bg}>
                <Text style={styles.Auto}>Auto</Text>
                <Text style={styles._14ITEMS}>14 ITEMS</Text>
                <Image source={category4} style={styles.category4} />
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
  header: {
    backgroundColor: '#1D1D26',
    height: 445,
    paddingTop: 36,
    paddingBottom: 153
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 25,
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
  bounds_50: {
    height: 50,
    width: 50
  },
  group_46: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_44: {
    height: 50,
    width: 50
  },
  group: {

  },
  MyGroups: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 89,
    marginTop: 32,
    textAlign: 'left'
  },
  shop: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_29: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Shop: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _25ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category_32: {
    alignSelf: 'center',
    marginTop: 33
  },
  work: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_14: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _12ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category: {
    alignSelf: 'center',
    marginTop: 33
  },
  health: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_24: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Health: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _3ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category_27: {
    alignSelf: 'center',
    marginTop: 33
  },
  travel: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_19: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Travel: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _8ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category2: {
    alignSelf: 'center',
    marginTop: 33
  },
  bills: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_9: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Bills: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _16ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category3: {
    alignSelf: 'center',
    marginTop: 33
  },
  auto: {
    height: 317,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 317,
    backgroundColor: '#FFFFFF',
    paddingTop: 80,
    paddingBottom: 96
  },
  Auto: {
    backgroundColor: 'transparent',
    fontSize: 50,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    textAlign: 'center'
  },
  _14ITEMS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center'
  },
  category4: {
    alignSelf: 'center',
    marginTop: 33
  }
})
