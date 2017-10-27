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
import left from './8-List_images/left.png'
import group_52 from './8-List_images/group_52.png'
import group_45 from './8-List_images/group_45.png'
import line_40 from './8-List_images/line_40.png'
import group_37 from './8-List_images/group_37.png'
import line_32 from './8-List_images/line_32.png'
import line_28 from './8-List_images/line_28.png'
import line_24 from './8-List_images/line_24.png'
import group from './8-List_images/group.png'
import line_16 from './8-List_images/line_16.png'
import line from './8-List_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.navbar}>
                <View style={styles.bounds_61}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.menu}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_73} />
                        <Image source={group_69} style={styles.group_69} />
                      </View>
                    </View>
                    <View style={styles.search}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_66} />
                        <Image source={group_63} style={styles.group_63} />
                      </View>
                    </View>
                    <Text style={styles.Lists}>Lists</Text>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={styles.bg_49}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={left} style={styles.left} />
                    <Text style={styles.Salads}>Salads</Text>
                    <View style={styles.right}>
                      <Image source={group_52} style={styles.group_52} />
                    </View>
                  </View>
                  <Text style={styles._28}>2 / 8</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done4}>
                <View style={styles.oval_44}>
                  <Image source={group_45} style={styles.group_45} />
                </View>
              </View>
              <Text style={styles.PastaSalad}>Pasta Salad</Text>
            </View>
          </View>
          <Image source={line_40} style={styles.line_40} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done3}>
                <View style={styles.oval_36}>
                  <Image source={group_37} style={styles.group_37} />
                </View>
              </View>
              <Text style={styles.SeafoodSalad}>Seafood Salad</Text>
            </View>
          </View>
          <Image source={line_32} style={styles.line_32} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_31} />
              <Text style={styles.ChickenSalad}>Chicken Salad</Text>
            </View>
          </View>
          <Image source={line_28} style={styles.line_28} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_27} />
              <Text style={styles.FruitSalad}>Fruit Salad</Text>
            </View>
          </View>
          <Image source={line_24} style={styles.line_24} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done5}>
                <View style={styles.oval}>
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.CaesarSalad}>Caesar Salad</Text>
            </View>
          </View>
          <Image source={line_16} style={styles.line_16} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_15} />
              <Text style={styles.PotatoSalad}>Potato Salad</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._7}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_11} />
              <Text style={styles.AvocadoSalad}>Avocado Salad</Text>
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
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
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
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60
  },
  bg_49: {
    height: 250,
    backgroundColor: '#FFFFFF05'
  },
  left: {

  },
  Salads: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  right: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_52: {

  },
  _28: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 291,
    width: 262,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done4: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_44: {
    height: 58,
    borderRadius: 29,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_45: {

  },
  PastaSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_40: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 302,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done3: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_36: {
    height: 58,
    borderRadius: 29,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_37: {

  },
  SeafoodSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_32: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 298,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_31: {
    height: 58,
    borderRadius: 29,
    width: 58
  },
  ChickenSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_28: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 251,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_27: {
    height: 58,
    borderRadius: 29,
    width: 58
  },
  FruitSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_24: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 282,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done5: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval: {
    height: 58,
    borderRadius: 29,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {

  },
  CaesarSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_16: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 279,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_15: {
    height: 58,
    borderRadius: 29,
    width: 58
  },
  PotatoSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 42
  },
  _7: {
    alignSelf: 'flex-start',
    marginLeft: 186,
    marginTop: 42,
    width: 309,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_11: {
    height: 58,
    borderRadius: 29,
    width: 58
  },
  AvocadoSalad: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  }
})
