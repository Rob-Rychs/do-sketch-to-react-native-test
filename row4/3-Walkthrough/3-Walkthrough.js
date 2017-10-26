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

import bg_17 from './3-Walkthrough_images/bg_17.png'
import edit from './3-Walkthrough_images/edit.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.bg}>
          <Text style={styles.Walkthrough}>
            <Text>Walkthroug</Text>{'\n'}
            <Text>h</Text>{'\n'}
          </Text>
          <View style={styles.icon}>
            <Image source={bg_17} style={styles.bg_17}>
              <Image source={edit} style={styles.edit} />
            </Image>
          </View>
          <Text style={styles.Thelasttaskmanage}>
            <Text>The last task management app </Text>{'\n'}
            <Text>you’ll ever need</Text>{'\n'}
          </Text>
            <Text style={styles.Thelasttaskmanage2}>
              <Text>The last task management app </Text>{'\n'}
              <Text>you’ll ever need</Text>{'\n'}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.skip}>
              <View style={styles.bg_12}>
                <Text style={styles.Skip}>Skip</Text>
              </View>
            </View>
            <View style={styles.next}>
              <View style={styles.bg_9}>
                <Text style={styles.Next}>Next</Text>
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
    backgroundColor: 'url(#linearGradient-1)'
  },
  Walkthrough: {
    backgroundColor: 'transparent',
    fontSize: 70,
    fontWeight: '300',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 193,
    textAlign: 'center'
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 266,
    marginTop: 164,
    width: 260,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_17: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  edit: {

  },
  Thelasttaskmanage: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 175,
    marginTop: 200,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Thelasttaskmanage2: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#FFFFFF'
  },
  skip: {
    width: 298,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_12: {
    height: 108,
    borderRadius: 54,
    width: 298,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Skip: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  next: {
    width: 300,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg_9: {
    height: 110,
    backgroundColor: '#FF3366',
    borderRadius: 55,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Next: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
