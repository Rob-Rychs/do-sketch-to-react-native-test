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

import avatar_60 from './11-Timeline_images/avatar_60.png'
import group_84 from './11-Timeline_images/group_84.png'
import line_56 from './11-Timeline_images/line_56.png'
import line_46 from './11-Timeline_images/line_46.png'
import avatar_51 from './11-Timeline_images/avatar_51.png'
import line_36 from './11-Timeline_images/line_36.png'
import avatar_31 from './11-Timeline_images/avatar_31.png'
import avatar from './11-Timeline_images/avatar.png'
import line from './11-Timeline_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._11Timeline}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.date_65}>
                <View style={styles.bg_66}>
                  <Text style={styles.MONDAYFEB82015}>MONDAY, FEB 8, 2015</Text>
                </View>
              </View>
              <View style={styles._1}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_64} />
                  <Image source={avatar_60} style={styles.avatar_60} />
                  <Text style={styles.CallwithRyan}>Call with Ryan</Text>
                  <Text style={styles._2pm}>2pm</Text>
                </View>
              </View>
              <View style={styles.options}>
                <View style={styles.bg_83}>
                  <Image source={group_84} style={styles.group_84} />
                </View>
              </View>
            </View>
          </View>
          <Image source={line_56} style={styles.line_56} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Image source={line_46} style={styles.line_46} />
              <View style={styles._2}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_55} />
                  <Image source={avatar_51} style={styles.avatar_51} />
                  <Text style={styles.LunchwithDiane}>
                    <Text>Lunch with </Text>{'\n'}
                    <Text>Diane</Text>{'\n'}
                  </Text>
                  <Text style={styles._1pm}>1pm</Text>
                  <Text style={styles.Restaurant}>Restaurant</Text>
                </View>
              </View>
              <View style={styles._3}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_45} />
                  <View style={styles.avatar_41} />
                  <Text style={styles.CatchupwithTom}>
                    <Text>Catch up with </Text>{'\n'}
                    <Text>Tom</Text>{'\n'}
                  </Text>
                  <Text style={styles._1112pm}>11 – 12pm</Text>
                  <Text style={styles.Hangouts}>Hangouts</Text>
                </View>
              </View>
            </View>
          </View>
          <Image source={line_36} style={styles.line_36} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles._5_87}>
                <View style={styles.avatar_89}>
                  <View style={styles.category_93} />
                </View>
              </View>
              <View style={styles._4}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category_35} />
                  <Image source={avatar_31} style={styles.avatar_31} />
                  <Text style={styles.NewsubpageforJane}>
                    <Text>New subpage for </Text>{'\n'}
                    <Text>Janet</Text>{'\n'}
                  </Text>
                  <Text style={styles._810am}>8 – 10am</Text>
                </View>
              </View>
              <View style={styles.date}>
                <View style={styles.bg}>
                  <Text style={styles.SUNDAYFEB72015}>SUNDAY, FEB 7, 2015</Text>
                </View>
              </View>
              <View style={styles._5}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.category} />
                  <Image source={avatar} style={styles.avatar} />
                  <Text style={styles.WalkwithMary}>Walk with Mary </Text>
                  <Text style={styles._8am}>8am</Text>
                  <Text style={styles.CityPark}>City Park</Text>
                </View>
              </View>
              <Image source={line} style={styles.line} />
              <Text style={styles.LunchwithAdam}>Lunch with Adam</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _11Timeline: {

  },
  date_65: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_66: {
    height: 110,
    alignItems: 'flex-start',
    marginLeft: 40,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  MONDAYFEB82015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 40
  },
  _1: {
    width: 348,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_64: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar_60: {

  },
  CallwithRyan: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _2pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 140
  },
  options: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_83: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_84: {

  },
  line_56: {
    alignSelf: 'flex-end'
  },
  line_46: {

  },
  _2: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_55: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar_51: {

  },
  LunchwithDiane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _1pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  Restaurant: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 30
  },
  _3: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_45: {
    height: 140,
    backgroundColor: '#FCAB53',
    width: 6
  },
  avatar_41: {
    backgroundColor: '#1D1D26',
    width: 85,
    height: 86
  },
  CatchupwithTom: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 5
  },
  _1112pm: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 134
  },
  Hangouts: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_36: {
    alignSelf: 'flex-end'
  },
  _5_87: {
    height: 167,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  avatar_89: {
    backgroundColor: '#1D1D26',
    width: 250,
    alignItems: 'flex-start',
    marginLeft: 71,
    justifyContent: 'flex-end',
    marginBottom: 5
  },
  category_93: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  _4: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category_35: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar_31: {

  },
  NewsubpageforJane: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _810am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 160
  },
  date: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 110,
    alignItems: 'flex-start',
    marginLeft: 40,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  SUNDAYFEB72015: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 40
  },
  _5: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  category: {
    height: 140,
    backgroundColor: '#50D2C2',
    width: 6
  },
  avatar: {

  },
  WalkwithMary: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  _8am: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'center'
  },
  CityPark: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 32
  },
  line: {

  },
  LunchwithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
