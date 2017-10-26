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

import group_62 from './8-List_images/group_62.png'
import group_67 from './8-List_images/group_67.png'
import group from './8-List_images/group.png'
import do_51 from './8-List_images/do_51.png'
import line_75 from './8-List_images/line_75.png'
import bg_41 from './8-List_images/bg_41.png'
import line_48 from './8-List_images/line_48.png'
import done_44 from './8-List_images/done_44.png'
import line_40 from './8-List_images/line_40.png'
import do_37 from './8-List_images/do_37.png'
import bg from './8-List_images/bg.png'
import line_34 from './8-List_images/line_34.png'
import done_30 from './8-List_images/done_30.png'
import line_26 from './8-List_images/line_26.png'
import do_22 from './8-List_images/do_22.png'
import line_20 from './8-List_images/line_20.png'
import do_16 from './8-List_images/do_16.png'
import line from './8-List_images/line.png'
import do_10 from './8-List_images/do_10.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._8List}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_55}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.share}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_64} />
                          <Image source={group_62} style={styles.group_62} />
                        </View>
                      </View>
                      <View style={styles.back}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_70} />
                          <Image source={group_67} style={styles.group_67} />
                        </View>
                      </View>
                      <View style={styles.search}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_60} />
                          <Image source={group} style={styles.group} />
                        </View>
                      </View>
                      <Text style={styles._26}>26</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.Shop}>Shop</Text>
              </View>
              <View style={styles._1}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={do_51} style={styles.do_51} />
                  <Text style={styles.Apples}>
                    <Text>Apple</Text>{'\n'}
                    <Text>s</Text>{'\n'}
                  </Text>
                </View>
              </View>
              <View style={styles.add}>
                <View style={styles.bg_73}>
                  <View style={styles.group_74}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_76} />
                      <Image source={line_75} style={styles.line_75} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image source={bg_41} style={styles.bg_41} />
            <Image source={line_48} style={styles.line_48} />
            <View style={styles._2}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={done_44} style={styles.done_44} />
                <Text style={styles.Bananas}>
                  <Text>Banana</Text>{'\n'}
                  <Text>s</Text>{'\n'}
                </Text>
              </View>
            </View>
          </Image>
          <Image source={line_40} style={styles.line_40} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_37} style={styles.do_37} />
              <Text style={styles.Juice}>
                <Text>Juic</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={bg} style={styles.bg} />
            <Image source={line_34} style={styles.line_34} />
            <View style={styles._4}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={done_30} style={styles.done_30} />
                <Text style={styles.Bread}>
                  <Text>Brea</Text>{'\n'}
                  <Text>d</Text>{'\n'}
                </Text>
              </View>
            </View>
          </Image>
          <Image source={line_26} style={styles.line_26} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_22} style={styles.do_22} />
              <Text style={styles.Cheese}>
                <Text>Chees</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_20} style={styles.line_20} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_16} style={styles.do_16} />
              <Text style={styles.Milk}>
                <Text>Mil</Text>{'\n'}
                <Text>k</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles._7}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={do_10} style={styles.do_10} />
              <Text style={styles.Yogurt}>
                <Text>Yogur</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _8List: {

  },
  header: {
    backgroundColor: '#1D1D26',
    height: 401,
    paddingBottom: 145
  },
  navbar: {
    alignSelf: 'flex-start',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 22
  },
  bounds_55: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  share: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_64: {
    height: 50,
    width: 50
  },
  group_62: {

  },
  back: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_70: {
    height: 50,
    width: 50
  },
  group_67: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_60: {
    height: 50,
    width: 50
  },
  group: {

  },
  _26: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 229
  },
  Shop: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 32,
    textAlign: 'left'
  },
  _1: {
    width: 193,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_51: {

  },
  Apples: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_73: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_74: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_76: {
    height: 50,
    width: 50
  },
  line_75: {

  },
  bg_41: {
    alignSelf: 'flex-start',
    marginTop: 110,
    paddingBottom: 40
  },
  line_48: {
    alignSelf: 'center'
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 40,
    width: 212,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_44: {

  },
  Bananas: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_40: {
    alignSelf: 'flex-start',
    marginTop: 1
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 40,
    width: 166,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_37: {

  },
  Juice: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  bg: {
    alignSelf: 'flex-start',
    marginTop: 41,
    paddingBottom: 36
  },
  line_34: {
    alignSelf: 'center'
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 44,
    width: 176,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_30: {

  },
  Bread: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_26: {
    alignSelf: 'flex-start',
    marginTop: 1
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 42,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_22: {

  },
  Cheese: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_20: {
    alignSelf: 'flex-start',
    marginTop: 40
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 40,
    width: 151,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_16: {

  },
  Milk: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line: {
    alignSelf: 'flex-start',
    marginTop: 41
  },
  _7: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginTop: 40,
    width: 185,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_10: {

  },
  Yogurt: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
