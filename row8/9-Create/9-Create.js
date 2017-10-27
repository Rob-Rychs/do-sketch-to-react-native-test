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

import group_98 from './9-Create_images/group_98.png'
import create from './9-Create_images/create.png'
import group_76 from './9-Create_images/group_76.png'
import select_69 from './9-Create_images/select_69.png'
import line_67 from './9-Create_images/line_67.png'
import select from './9-Create_images/select.png'
import group_63 from './9-Create_images/group_63.png'
import line_55 from './9-Create_images/line_55.png'
import group_52 from './9-Create_images/group_52.png'
import line_47 from './9-Create_images/line_47.png'
import group_35 from './9-Create_images/group_35.png'
import group_41 from './9-Create_images/group_41.png'
import line_32 from './9-Create_images/line_32.png'
import group from './9-Create_images/group.png'
import group_26 from './9-Create_images/group_26.png'
import line from './9-Create_images/line.png'
import pantone from './9-Create_images/pantone.png'

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
                <View style={styles.bounds_91}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.close}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.bounds_101} />
                        <Image source={group_98} style={styles.group_98} />
                      </View>
                    </View>
                    <Image source={create} style={styles.create} />
                    <Text style={styles.AddNew}>Add New</Text>
                  </View>
                </View>
              </View>
              <View style={styles.monthpicker}>
                <View style={styles.bg_87}>
                  <Text style={styles.NewEvent}>New Event</Text>
                  <Text style={styles.DESCRIPTION}>DESCRIPTION</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.date}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.calendar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_85} />
                  <Image source={group_76} style={styles.group_76} />
                </View>
              </View>
              <Text style={styles.DATE}>DATE</Text>
              <Image source={select_69} style={styles.select_69} />
              <Text style={styles.March252015}>March 25, 2015</Text>
            </View>
          </View>
          <Image source={line_67} style={styles.line_67} />
          <View style={styles.time}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_66} />
              <Text style={styles.TIME}>TIME</Text>
              <Image source={select} style={styles.select} />
              <Image source={group_63} style={styles.group_63} />
              <Text style={styles._1000am}>10:00am</Text>
            </View>
          </View>
          <Image source={line_55} style={styles.line_55} />
          <View style={styles.password}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.location}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_54} />
                  <Image source={group_52} style={styles.group_52} />
                </View>
              </View>
              <Text style={styles.LOCATION}>LOCATION</Text>
              <Text style={styles.Enterlocation}>Enter location</Text>
            </View>
          </View>
          <Image source={line_47} style={styles.line_47} />
          <View style={styles.people}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_46} />
              <Text style={styles.PEOPLE}>PEOPLE</Text>
              <View style={styles.add_34}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_38} />
                  <Image source={group_35} style={styles.group_35} />
                </View>
              </View>
              <Image source={group_41} style={styles.group_41} />
              <Text style={styles.Addpeople}>Add people</Text>
            </View>
          </View>
          <Image source={line_32} style={styles.line_32} />
          <View style={styles.notification}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.bounds_31} />
              <Text style={styles.NOTIFICATION}>NOTIFICATION</Text>
              <View style={styles.add}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds_23} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Image source={group_26} style={styles.group_26} />
              <Text style={styles.Addnotification}>Add notification</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.labelcolor}>
            <View style={{flexDirection: 'row'}}>
              <Image source={pantone} style={styles.pantone} />
              <Text style={styles.LABELCOLOR}>LABEL COLOR</Text>
              <View style={styles.Rectangle1842} />
              <Text style={styles.Pink}>Pink</Text>
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
  bounds_91: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_101: {
    height: 50,
    width: 50
  },
  group_98: {

  },
  create: {

  },
  AddNew: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  monthpicker: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_87: {
    height: 250
  },
  NewEvent: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center'
  },
  DESCRIPTION: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 4,
    textAlign: 'center'
  },
  date: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 320,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_85: {
    height: 50,
    width: 50
  },
  group_76: {

  },
  DATE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  select_69: {

  },
  March252015: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  line_67: {
    alignSelf: 'flex-end',
    marginTop: 59
  },
  time: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 41,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_66: {
    height: 50,
    width: 50
  },
  TIME: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  select: {

  },
  group_63: {

  },
  _1000am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  line_55: {
    alignSelf: 'flex-end',
    marginTop: 59
  },
  password: {
    alignSelf: 'flex-start',
    marginLeft: 185,
    marginTop: 41,
    width: 274,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  location: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_54: {
    height: 49,
    width: 50
  },
  group_52: {

  },
  LOCATION: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 58
  },
  Enterlocation: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_47: {
    alignSelf: 'flex-end',
    marginTop: 60
  },
  people: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 41,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_46: {
    height: 49,
    width: 50
  },
  PEOPLE: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  add_34: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_38: {
    height: 50,
    width: 50
  },
  group_35: {

  },
  group_41: {

  },
  Addpeople: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  line_32: {
    alignSelf: 'flex-end',
    marginTop: 60
  },
  notification: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 41,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_31: {
    height: 50,
    width: 50
  },
  NOTIFICATION: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_23: {
    height: 50,
    width: 50
  },
  group: {

  },
  group_26: {

  },
  Addnotification: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  line: {
    alignSelf: 'flex-end',
    marginTop: 59
  },
  labelcolor: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 41,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pantone: {

  },
  LABELCOLOR: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  },
  Rectangle1842: {
    height: 50,
    backgroundColor: '#FF3366',
    borderRadius: 25,
    width: 50
  },
  Pink: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 100
  }
})
