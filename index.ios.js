import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
  } from 'react-native';
  
  import TabNavigator from 'react-native-tab-navigator';
  
  export default class App extends Component {
      constructor(props){
          super(props);
          this.state={
              selectedTab:'home',
          }
      }
      
    render() {
      return (
        <View style={styles.container}>
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image source={require('./res/images/gm_tab_car_normal_38x27_.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/gm_tab_car_selected_38x27_.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
             <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./res/images/gm_tab_alarm_normal_30x27_.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/gm_tab_alarm_selected_30x27_.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
               <View style={styles.page2}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'myinfo'}
              title="myinfo"
              renderIcon={() => <Image source={require('./res/images/gm_tab_my_normal_38x27_.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/gm_tab_my_selected_38x27_.png')} />}
              onPress={() => this.setState({ selectedTab: 'myinfo' })}>
               <View style={styles.page3}></View>
            </TabNavigator.Item>
          </TabNavigator>
        </View>
    
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor:'red',
    },
    page2: {
        flex: 1,
        backgroundColor:'yellow',
    },
    page3: {
      flex: 1,
      backgroundColor:'#4e6bb9',
  },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  