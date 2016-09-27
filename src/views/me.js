import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';


import MeHeader from './../components/MeHeader';
import MeRow from './../components/MeRow';

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
          component: MePage,
          title: 'Me',
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

class MePage extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	rowHandle() {
		console.log(this)
	}

	render() {
		return (
			<View>
				<MeHeader />

				<MeRow
					text="Photos"
					icon="ios-photos-outline"
					onPress={this.rowHandle.bind(this)}
				/>
				<MeRow
					text="Help"
					icon="ios-help-circle-outline"
					onPress={this.rowHandle.bind(this)}
				/>
				<MeRow
					text="Settings"
					icon="ios-settings-outline"
					onPress={this.rowHandle.bind(this)}
				/>
				<MeRow
					text="Security"
					icon="ios-medkit-outline"
					onPress={this.rowHandle.bind(this)}
				/>
			</View>
		)
	}
}