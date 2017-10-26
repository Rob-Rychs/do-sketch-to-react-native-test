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

import group_51 from './8-List_images/group_51.png'
import group_56 from './8-List_images/group_56.png'
import group from './8-List_images/group.png'
import line_31 from './8-List_images/line_31.png'
import line_24 from './8-List_images/line_24.png'
import line_20 from './8-List_images/line_20.png'
import line_16 from './8-List_images/line_16.png'
import line from './8-List_images/line.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles._8List}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.navbar}>
              <View style={styles.bounds_40}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.share}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_53} />
                      <Image source={group_51} style={styles.group_51} />
                    </View>
                  </View>
                  <View style={styles.menu}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_60} />
                      <Image source={group_56} style={styles.group_56} />
                    </View>
                  </View>
                  <View style={styles.add}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.bounds_49} />
                      <Image source={group} style={styles.group} />
                    </View>
                  </View>
                  <View style={styles.search}>
                    <View style={styles.bounds_44} />
                  </View>
                  <Text style={styles.Lists}>
                    <Text>List</Text>{'\n'}
                    <Text>s</Text>{'\n'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.bg_33}>
                <Text style={styles.Work}>
                  <Text>Wor</Text>{'\n'}
                  <Text>k</Text>{'\n'}
                </Text>
                <Text style={styles.FREELANCEPROJECTS}>FREELANCE PROJECTS</Text>
              </View>
            </View>
            <View style={styles._1}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.done_27}>
                  <View style={styles.bg_28} />
                </View>
                <Text style={styles.Designnewicons}>Design new icons</Text>
                <Image source={line_31} style={styles.line_31} />
              </View>
            </View>
            <View style={styles._2}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.do_23} />
                <Text style={styles.WorkonUIKit}>Work on UI Kit</Text>
                <Image source={line_24} style={styles.line_24} />
              </View>
            </View>
            <View style={styles._3}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.do_19} />
                <Text style={styles.ReadArticleDesig}>Read Article: “Designing for Mobile”</Text>
                <Image source={line_20} style={styles.line_20} />
              </View>
            </View>
            <View style={styles._4}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.done}>
                  <View style={styles.bg} />
                </View>
                <Text style={styles.Revisewireframes}>Revise wireframes</Text>
                <Image source={line_16} style={styles.line_16} />
              </View>
            </View>
            <View style={styles._5}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.do_8} />
                <Text style={styles.CatchupwithMary}>Catch up with Mary</Text>
                <Image source={line} style={styles.line} />
              </View>
            </View>
            <View style={styles._6}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.do_5} />
                <Text style={styles.Designexplorations}>Design explorations for new project</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbar: {
    height: 128,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 22
  },
  bounds_40: {
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
  bounds_53: {
    height: 50,
    width: 50
  },
  group_51: {

  },
  menu: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_60: {
    height: 50,
    width: 50
  },
  group_56: {

  },
  add: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bounds_49: {
    height: 50,
    width: 50
  },
  group: {

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
  Lists: {
    backgroundColor: 'transparent',
    fontSize: 34,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 115
  },
  header: {
    height: 461,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_33: {
    backgroundColor: '#1D1D26',
    paddingTop: 164,
    paddingBottom: 177
  },
  Work: {
    backgroundColor: 'transparent',
    fontSize: 60,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 304,
    textAlign: 'center'
  },
  FREELANCEPROJECTS: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 241,
    marginTop: 8,
    textAlign: 'center'
  },
  _1: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done_27: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_28: {
    height: 130,
    backgroundColor: '#50D2C2',
    width: 130
  },
  Designnewicons: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 180
  },
  line_31: {

  },
  _2: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_23: {
    height: 130,
    backgroundColor: '#1D1D2603',
    width: 130
  },
  WorkonUIKit: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 180
  },
  line_24: {

  },
  _3: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_19: {
    height: 130,
    backgroundColor: '#1D1D2603',
    width: 130
  },
  ReadArticleDesig: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right',
    marginRight: 109
  },
  line_20: {

  },
  _4: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  done: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg: {
    height: 130,
    backgroundColor: '#50D2C2',
    width: 130
  },
  Revisewireframes: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 180
  },
  line_16: {

  },
  _5: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_8: {
    height: 130,
    backgroundColor: '#1D1D2603',
    width: 130
  },
  CatchupwithMary: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'left',
    marginLeft: 180
  },
  line: {

  },
  _6: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  do_5: {
    height: 130,
    width: 130
  },
  Designexplorations: {
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight: 'normal',
    color: '#1D1D26',
    textAlign: 'right'
  }
})
