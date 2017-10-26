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

import group_71 from './9-Create_images/group_71.png'
import group_65 from './9-Create_images/group_65.png'
import line_59 from './9-Create_images/line_59.png'
import line_54 from './9-Create_images/line_54.png'
import switchoff from './9-Create_images/switchoff.png'
import line_42 from './9-Create_images/line_42.png'
import group from './9-Create_images/group.png'
import line_34 from './9-Create_images/line_34.png'
import line_30 from './9-Create_images/line_30.png'
import avatar from './9-Create_images/avatar.png'
import avatar_21 from './9-Create_images/avatar_21.png'
import line from './9-Create_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._9Create}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.bg}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_63}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles.close}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={styles.bounds_74} />
                          <Image source={group_71} style={styles.group_71} />
                        </View>
                      </View>
                      <View style={styles.image}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_69} />
                          <Image source={group_65} style={styles.group_65} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.AddTitle}>Add Title</Text>
              </View>
              <View style={styles.add}>
                <View style={styles.bg_57}>
                  <View style={styles.group_58}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_60} />
                      <Image source={line_59} style={styles.line_59} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.Shortdescription}>
            <Text>Short descriptio</Text>{'\n'}
            <Text>n</Text>{'\n'}
          </Text>
          <Image source={line_54} style={styles.line_54} />
          <View style={styles.time}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Allday}>
                <Text>All da</Text>{'\n'}
                <Text>y</Text>{'\n'}
              </Text>
              <Image source={switchoff} style={styles.switchoff} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.From}>From</Text>
              <Text style={styles.February92015_47}>February 9, 2015 </Text>
              <Text style={styles._900am}>9:00am</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.To}>To</Text>
              <Text style={styles.February92015}>February 9, 2015 </Text>
              <Text style={styles._1030am}>10:30am</Text>
            </View>
          </View>
          <Image source={line_42} style={styles.line_42} />
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.navigate}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles.Starbucks}>Starbucks</Text>
              <Text style={styles.Location}>
                <Text>Locatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_34} style={styles.line_34} />
          <View style={styles.notification}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Notification}>
                <Text>Notificatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
              <Text style={styles.viaEmail}>via Email</Text>
            </View>
          </View>
          <Image source={line_30} style={styles.line_30} />
          <View style={styles.people}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar} style={styles.avatar} />
              <Image source={avatar_21} style={styles.avatar_21} />
              <View style={styles.avatar_25} />
              <Text style={styles.People}>
                <Text>Peopl</Text>{'\n'}
                <Text>e</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.repeat}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Repeat}>
                <Text>Repea</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
              <Text style={styles.Monthly}>
                <Text>Monthl</Text>{'\n'}
                <Text>y</Text>{'\n'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _9Create: {

  },
  bg: {
    backgroundColor: '#1D1D26',
    height: 438,
    paddingTop: 35,
    paddingBottom: 147
  },
  navbar: {
    alignSelf: 'flex-end',
    marginRight: 21,
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_63: {
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
  bounds_74: {
    height: 50,
    width: 50
  },
  group_71: {

  },
  image: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_69: {
    height: 50,
    width: 50
  },
  group_65: {

  },
  AddTitle: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 85,
    marginTop: 32,
    textAlign: 'left'
  },
  add: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_57: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_58: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_60: {
    height: 50,
    width: 50
  },
  line_59: {

  },
  Shortdescription: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 85,
    marginTop: 47,
    textAlign: 'left'
  },
  line_54: {
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 37
  },
  time: {
    alignSelf: 'flex-end',
    marginRight: 72,
    marginTop: 206,
    height: 198
  },
  Allday: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  switchoff: {

  },
  From: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  February92015_47: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 185
  },
  _900am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 0
  },
  To: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  February92015: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 185
  },
  _1030am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 0
  },
  line_42: {
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 37
  },
  location: {
    alignSelf: 'flex-end',
    marginRight: 72,
    marginTop: 38,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigate: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  Starbucks: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  Location: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line_34: {
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 34
  },
  notification: {
    alignSelf: 'flex-end',
    marginRight: 72,
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Notification: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  viaEmail: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_30: {
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 38
  },
  people: {
    alignSelf: 'flex-end',
    marginRight: 66,
    marginTop: 28,
    height: 71,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {

  },
  avatar_21: {

  },
  avatar_25: {
    backgroundColor: '#1D1D26',
    width: 63,
    height: 64
  },
  People: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line: {
    alignSelf: 'flex-end',
    marginRight: 21,
    marginTop: 23
  },
  repeat: {
    alignSelf: 'flex-end',
    marginRight: 72,
    marginTop: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Repeat: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  Monthly: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
