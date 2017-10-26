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

import group_21 from './8-List_images/group_21.png'
import group_16 from './8-List_images/group_16.png'
import group from './8-List_images/group.png'
import group_62 from './8-List_images/group_62.png'
import line_57 from './8-List_images/line_57.png'
import group_54 from './8-List_images/group_54.png'
import line_49 from './8-List_images/line_49.png'
import line_45 from './8-List_images/line_45.png'
import line_41 from './8-List_images/line_41.png'
import group_38 from './8-List_images/group_38.png'
import line_33 from './8-List_images/line_33.png'
import line_29 from './8-List_images/line_29.png'
import group_96 from './8-List_images/group_96.png'
import group_90 from './8-List_images/group_90.png'
import group_69 from './8-List_images/group_69.png'
import line_65 from './8-List_images/line_65.png'

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
                    <View style={styles.bounds_25} />
                    <Image source={group_21} style={styles.group_21} />
                  </View>
                </View>
                <View style={styles.share}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_18} />
                    <Image source={group_16} style={styles.group_16} />
                  </View>
                </View>
                <View style={styles.search}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.bounds_14} />
                    <Image source={group} style={styles.group} />
                  </View>
                </View>
                <Text style={styles.Work}>Work</Text>
              </View>
            </View>
          </View>
          <View style={styles._1}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done}>
                <View style={styles.oval_61}>
                  <Image source={group_62} style={styles.group_62} />
                </View>
              </View>
              <Text style={styles.Designnewicons}>Design new icons</Text>
            </View>
          </View>
          <Image source={line_57} style={styles.line_57} />
          <View style={styles._2}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done3}>
                <View style={styles.oval_53}>
                  <Image source={group_54} style={styles.group_54} />
                </View>
              </View>
              <Text style={styles.Weeklydesignmeetin}>Weekly design meeting</Text>
            </View>
          </View>
          <Image source={line_49} style={styles.line_49} />
          <View style={styles._3}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_48} />
              <Text style={styles.WorkonUIKit}>Work on UI Kit</Text>
            </View>
          </View>
          <Image source={line_45} style={styles.line_45} />
          <View style={styles._4}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_44} />
              <Text style={styles.ReviseWireframes}>Revise Wireframes</Text>
            </View>
          </View>
          <Image source={line_41} style={styles.line_41} />
          <View style={styles._5}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.done2}>
                <View style={styles.oval_37}>
                  <Image source={group_38} style={styles.group_38} />
                </View>
              </View>
              <Text style={styles.CatchupwithAdam}>Catch up with Adam</Text>
            </View>
          </View>
          <Image source={line_33} style={styles.line_33} />
          <View style={styles._6}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.do_32} />
              <Text style={styles.Deisgnresearchfor}>Deisgn research for new project</Text>
            </View>
          </View>
          <Image source={line_29} style={styles.line_29} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.tabbar}>
                <View style={styles.bg_67}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.add}>
                      <View style={styles.group_84}>
                        <View style={styles.bounds_88} />
                      </View>
                    </View>
                    <View style={styles.calendar}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_105} />
                        <Image source={group_96} style={styles.group_96} />
                      </View>
                    </View>
                    <View style={styles.overview}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_94} />
                        <Image source={group_90} style={styles.group_90} />
                      </View>
                    </View>
                    <View style={styles.lists}>
                      <View style={styles.bounds_81} />
                    </View>
                    <View style={styles.timeline}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.bounds_73} />
                        <Image source={group_69} style={styles.group_69} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Image source={line_65} style={styles.line_65} />
              <View style={styles._7}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={styles.do_28} />
                  <Text style={styles.Updatecolors}>Update colors</Text>
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
  bounds_25: {
    height: 50,
    width: 50
  },
  group_21: {

  },
  share: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_18: {
    height: 50,
    width: 50
  },
  group_16: {

  },
  search: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_14: {
    height: 50,
    width: 50
  },
  group: {

  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 115
  },
  _1: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 60,
    width: 355,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_61: {
    height: 80,
    backgroundColor: '#8C88FF',
    borderRadius: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_62: {

  },
  Designnewicons: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_57: {
    alignSelf: 'center',
    marginTop: 41
  },
  _2: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 41,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done3: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_53: {
    height: 80,
    backgroundColor: '#8C88FF',
    borderRadius: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_54: {

  },
  Weeklydesignmeetin: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_49: {
    alignSelf: 'center',
    marginTop: 41
  },
  _3: {
    alignSelf: 'flex-start',
    marginLeft: 41,
    marginTop: 42,
    width: 314,
    height: 79,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_48: {
    height: 79,
    borderRadius: 40,
    width: 79
  },
  WorkonUIKit: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_45: {
    alignSelf: 'center',
    marginTop: 42
  },
  _4: {
    alignSelf: 'flex-start',
    marginLeft: 41,
    marginTop: 42,
    height: 79,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_44: {
    height: 79,
    borderRadius: 40,
    width: 79
  },
  ReviseWireframes: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_41: {
    alignSelf: 'center',
    marginTop: 43
  },
  _5: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 42,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done2: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oval_37: {
    height: 80,
    backgroundColor: '#8C88FF',
    borderRadius: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  group_38: {

  },
  CatchupwithAdam: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_33: {
    alignSelf: 'center',
    marginTop: 42
  },
  _6: {
    alignSelf: 'flex-start',
    marginLeft: 41,
    marginTop: 43,
    height: 79,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_32: {
    height: 79,
    borderRadius: 40,
    width: 79
  },
  Deisgnresearchfor: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  },
  line_29: {
    alignSelf: 'center',
    marginTop: 43
  },
  tabbar: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_67: {
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
  group_84: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_88: {
    height: 50,
    width: 50
  },
  calendar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_105: {
    height: 50,
    width: 50
  },
  group_96: {

  },
  overview: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_94: {
    height: 50,
    width: 50
  },
  group_90: {

  },
  lists: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_81: {
    height: 50,
    width: 50
  },
  timeline: {
    width: 50,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_73: {
    height: 49,
    width: 50
  },
  group_69: {

  },
  line_65: {

  },
  _7: {
    width: 307,
    height: 79,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_28: {
    height: 79,
    borderRadius: 40,
    width: 79
  },
  Updatecolors: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'right'
  }
})
