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

import group_65 from './8-List_images/group_65.png'
import group_58 from './8-List_images/group_58.png'
import line_45 from './8-List_images/line_45.png'
import group from './8-List_images/group.png'
import line_34 from './8-List_images/line_34.png'
import done from './8-List_images/done.png'
import line_26 from './8-List_images/line_26.png'
import line_21 from './8-List_images/line_21.png'
import do_18 from './8-List_images/do_18.png'
import line_13 from './8-List_images/line_13.png'
import line from './8-List_images/line.png'
import line_53 from './8-List_images/line_53.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._8List}>
          <View style={styles.navbar}>
            <View style={styles.bounds_56}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.back}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_68} />
                    <Image source={group_65} style={styles.group_65} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_61} />
                    <Image source={group_58} style={styles.group_58} />
                  </View>
                </View>
                <Text style={styles.Auto}>Auto</Text>
                <Text style={styles._7_62}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.NewTires}>New Tires</Text>
              <View style={styles.oval_49} />
              <Text style={styles.Mar252015}>Mar 25, 2015</Text>
            </View>
          </View>
          <Image source={line_45} style={styles.line_45} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles._2}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ChangeOil}>Change Oil</Text>
                <View style={styles.oval_44} />
                <Text style={styles.Jan12015}>Jan 1, 2015</Text>
              </View>
            </View>
            <View style={styles.attention}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.bounds_40} />
                <Image source={group} style={styles.group} />
              </View>
            </View>
          </View>
          <Image source={line_34} style={styles.line_34} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.oval_30}>
                <Image source={done} style={styles.done} />
              </View>
              <Text style={styles.Battery}>Battery</Text>
              <Text style={styles.Feb52015}>Feb 5, 2015</Text>
            </View>
          </View>
          <Image source={line_26} style={styles.line_26} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.RenewLicensePlate}>Renew License Plate</Text>
              <View style={styles.oval_25} />
              <Text style={styles.Aug102015}>Aug 10, 2015</Text>
            </View>
          </View>
          <Image source={line_21} style={styles.line_21} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.oval_17}>
                <Image source={do_18} style={styles.do_18} />
              </View>
              <Text style={styles.ReplaceSparkPlugs}>Replace Spark Plugs</Text>
              <Text style={styles.Oct182015}>Oct 18, 2015</Text>
            </View>
          </View>
          <Image source={line_13} style={styles.line_13} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.TimingBelt}>Timing Belt</Text>
              <View style={styles.oval_12} />
              <Text style={styles._60000miles}>60,000 miles</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._7}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.NewBrakes}>New Brakes</Text>
                  <View style={styles.oval} />
                  <Text style={styles.Apr12015}>Apr 1, 2015</Text>
                </View>
              </View>
              <View style={styles.add}>
                <View style={styles.bg}>
                  <View style={styles.group_52}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_54} />
                      <Image source={line_53} style={styles.line_53} />
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
  _8List: {

  },
  navbar: {
    alignSelf: 'flex-end',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_56: {
    height: 128,
    backgroundColor: '#BA77FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_68: {
    height: 50,
    width: 50
  },
  group_65: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_61: {
    height: 50,
    width: 50
  },
  group_58: {

  },
  Auto: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  _7_62: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 307
  },
  _1: {
    alignSelf: 'flex-start',
    marginTop: 46,
    width: 273,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  NewTires: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 12
  },
  oval_49: {
    height: 78,
    borderRadius: 39,
    width: 78
  },
  Mar252015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_45: {
    alignSelf: 'flex-end',
    marginTop: 78
  },
  _2: {
    width: 282,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ChangeOil: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  oval_44: {
    height: 78,
    borderRadius: 39,
    width: 78
  },
  Jan12015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 29
  },
  attention: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_40: {
    height: 50,
    width: 50
  },
  group: {

  },
  line_34: {
    alignSelf: 'flex-end'
  },
  _3: {
    alignSelf: 'flex-start',
    marginTop: 41,
    width: 259,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_30: {
    height: 80,
    backgroundColor: '#50D2C2',
    borderRadius: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {

  },
  Battery: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 37
  },
  Feb52015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_26: {
    alignSelf: 'flex-end',
    marginTop: 41
  },
  _4: {
    alignSelf: 'flex-end',
    marginTop: 41,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  RenewLicensePlate: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  oval_25: {
    height: 78,
    borderRadius: 39,
    width: 78
  },
  Aug102015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  line_21: {
    alignSelf: 'flex-end',
    marginTop: 78
  },
  _5: {
    alignSelf: 'flex-end',
    marginTop: 41,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_17: {
    height: 80,
    backgroundColor: '#50D2C2',
    borderRadius: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_18: {

  },
  ReplaceSparkPlugs: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  Oct182015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 120
  },
  line_13: {
    alignSelf: 'flex-end',
    marginTop: 41
  },
  _6: {
    alignSelf: 'center',
    marginTop: 41,
    width: 282,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TimingBelt: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  oval_12: {
    height: 78,
    borderRadius: 39,
    width: 78
  },
  _60000miles: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 16
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 78
  },
  _7: {
    width: 288,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center'
  },
  NewBrakes: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  oval: {
    height: 78,
    borderRadius: 39,
    width: 78
  },
  Apr12015: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 33
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#BA77FF',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_52: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_54: {
    height: 50,
    width: 50
  },
  line_53: {

  }
})
