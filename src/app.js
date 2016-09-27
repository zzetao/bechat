import React, { Component, PropTypes } from 'react';
import {
  TabBarIOS,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';


import Home from './views/home';
import Contacts from './views/contacts';
import Me from './views/me';

import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'Chat',
    };
  }
  
  render() {
    return (
      <TabBarIOS
        tintColor="#42d17f"
        translucent={true}
        barTintColor="#eee">
        <Icon.TabBarItemIOS
          title="Chat"
          iconName="ios-chatbubbles-outline"
          selectedIconName="ios-chatbubbles"
          selected={this.state.selectedTab === 'Chat'}
          onPress={() => {
            this.setState({
              selectedTab: 'Chat',
            });
          }}>

          <Home />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Contacts"
          iconName="ios-people-outline"
          selectedIconName="ios-people"
          selected={this.state.selectedTab === 'Contacts'}
          onPress={() => {
            this.setState({
              selectedTab: 'Contacts',
            });
          }}>
          <Contacts />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Me"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.state.selectedTab === 'Me'}
          onPress={() => {
            this.setState({
              selectedTab: 'Me',
            });
          }}>
          <Me />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}


