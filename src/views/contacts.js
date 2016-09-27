import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
  NavigatorIOS,
} from 'react-native';

import SearchBar from 'react-native-search-bar';
import ContactsTop from './../components/ContactsTop';
import ContactsFunction from './../components/ContactsFunction';
import TitleBar from './../components/TitleBar';
import ContactsList from './../components/ContactsList';

export default class NavigatorIOSApp extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}


  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ContactsPage,
          title: 'Contacts',
          titleTextColor: '#fff',
          tintColor: '#fff',
          barTintColor: '#42d17f',
          rightButtonTitle: '＋',
          backButtonTitle: 'back',
          passProps: {
            title: 'hello'
          },
          shadowHidden: true,
          onRightButtonPress: () => {
            // this.refs.nav.push({
            //   title: 'Chat',
            //   component: ChatPage,
            //   navigationBarHidden: false
            // })
          }
        }}
        style={{flex: 1}} />
    );
  }
}

class ContactsPage extends Component {
	searchBarHandle() {

	}
	render() {
    let renderHeader = () => {
      return(
        <View>
          <ContactsFunction />
          <TitleBar text="Top Contacts" />
          <ContactsTop />
          <TitleBar text="Contacts" />
        </View>
      )
    }
		return(
      <ContactsList 
        renderHeader={renderHeader}
      />
		)
	}
}