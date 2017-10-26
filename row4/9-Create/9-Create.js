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

import group_75 from './9-Create_images/group_75.png'
import group_69 from './9-Create_images/group_69.png'
import shape2 from './9-Create_images/shape2.png'
import line_54 from './9-Create_images/line_54.png'
import group_48 from './9-Create_images/group_48.png'
import line_45 from './9-Create_images/line_45.png'
import group from './9-Create_images/group.png'
import line_35 from './9-Create_images/line_35.png'
import line_31 from './9-Create_images/line_31.png'
import line_27 from './9-Create_images/line_27.png'
import avatar_18 from './9-Create_images/avatar_18.png'
import avatar_22 from './9-Create_images/avatar_22.png'
import avatar from './9-Create_images/avatar.png'
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
              <View style={styles.header}>
                <View style={styles.navbar}>
                  <View style={styles.bounds_67}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                      <View style={styles.close}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={styles.bounds_78} />
                          <Image source={group_75} style={styles.group_75} />
                        </View>
                      </View>
                      <View style={styles.image}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.bounds_73} />
                          <Image source={group_69} style={styles.group_69} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.DesignMeeting_65}>Design Meeting</Text>
              </View>
              <View style={styles.add_60}>
                <View style={styles.bg}>
                  <View style={styles.group_62}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_64} />
                      <Image source={shape2} style={styles.shape2} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.DesignMeeting}>Design Meeting</Text>
          <Image source={line_54} style={styles.line_54} />
          <View style={styles.date}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.add}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds_51} />
                  <Image source={group_48} style={styles.group_48} />
                </View>
              </View>
              <Text style={styles.Date}>Date</Text>
              <Text style={styles.February92015}>February 9, 2015 </Text>
            </View>
          </View>
          <Image source={line_45} style={styles.line_45} />
          <View style={styles.fromto}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.From}>From</Text>
              <Text style={styles.To}>To</Text>
              <View style={styles.remove}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.bounds} />
                  <Image source={group} style={styles.group} />
                </View>
              </View>
              <Text style={styles._900am}>9:00am</Text>
              <Text style={styles._1000am}>10:00am</Text>
            </View>
          </View>
          <Image source={line_35} style={styles.line_35} />
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Hangouts}>Hangouts</Text>
              <Text style={styles.Location}>
                <Text>Locatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
            </View>
          </View>
          <Image source={line_31} style={styles.line_31} />
          <View style={styles.notification}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Notification}>
                <Text>Notificatio</Text>{'\n'}
                <Text>n</Text>{'\n'}
              </Text>
              <Text style={styles._20minutesbefore}>20 minutes before</Text>
            </View>
          </View>
          <Image source={line_27} style={styles.line_27} />
          <View style={styles.whosgoing}>
            <View style={{flexDirection: 'row'}}>
              <Image source={avatar_18} style={styles.avatar_18} />
              <Image source={avatar_22} style={styles.avatar_22} />
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.Whosgoing}>Who’s going</Text>
            </View>
          </View>
          <Image source={line} style={styles.line} />
          <View style={styles.repeat}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.Repeat}>
                <Text>Repea</Text>{'\n'}
                <Text>t</Text>{'\n'}
              </Text>
              <Text style={styles.None}>None</Text>
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
  header: {
    backgroundColor: 'url(#linearGradient-7)',
    height: 419,
    paddingTop: 3,
    paddingBottom: 160
  },
  navbar: {
    alignSelf: 'center',
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  bounds_67: {
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
  bounds_78: {
    height: 50,
    width: 50
  },
  group_75: {

  },
  image: {
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
  DesignMeeting_65: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginLeft: 67,
    marginTop: 32,
    textAlign: 'left'
  },
  add_60: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    backgroundColor: '#FF3366',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_62: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_64: {
    height: 50,
    width: 50
  },
  shape2: {

  },
  DesignMeeting: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    alignSelf: 'flex-start',
    marginLeft: 67,
    marginTop: 54,
    textAlign: 'left'
  },
  line_54: {
    alignSelf: 'center',
    marginTop: 37
  },
  date: {
    alignSelf: 'flex-end',
    marginRight: 59,
    marginTop: 34,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_51: {
    height: 50,
    width: 50
  },
  group_48: {

  },
  Date: {
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
    marginRight: 105
  },
  line_45: {
    alignSelf: 'center',
    marginTop: 37
  },
  fromto: {
    alignSelf: 'flex-end',
    marginRight: 59,
    marginTop: 46,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center'
  },
  From: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  To: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 246
  },
  remove: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds: {
    height: 50,
    width: 50
  },
  group: {

  },
  _900am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  _1000am: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 246
  },
  line_35: {
    alignSelf: 'center',
    marginTop: 95
  },
  location: {
    alignSelf: 'center',
    marginTop: 46,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Hangouts: {
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
  line_31: {
    alignSelf: 'center',
    marginTop: 38
  },
  notification: {
    alignSelf: 'center',
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
  _20minutesbefore: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  },
  line_27: {
    alignSelf: 'center',
    marginTop: 38
  },
  whosgoing: {
    alignSelf: 'flex-end',
    marginRight: 61,
    marginTop: 31,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar_18: {

  },
  avatar_22: {

  },
  avatar: {

  },
  Whosgoing: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left'
  },
  line: {
    alignSelf: 'center',
    marginTop: 35
  },
  repeat: {
    alignSelf: 'flex-end',
    marginRight: 63,
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
  None: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
