import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView
} from 'react-native';

import ContactsTopItem from './ContactsTopItem';

const avatarUri = 'https://avatars0.githubusercontent.com/u/8110936?v=3&s=466';

export default class TopContacts extends Component {

	render() {
		return(
			<ScrollView
				style={styles.container}
				centerContent={true}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
			<ContactsTopItem name="ZZETAO" avatarUri={avatarUri} />
			<ContactsTopItem name="ZZETAO" avatarUri={avatarUri} />
			<ContactsTopItem name="ZZETAO" avatarUri={avatarUri} />
			<ContactsTopItem name="ZZETAO" avatarUri={avatarUri} />
			<ContactsTopItem isAdd={true}/>
			</ScrollView>
		)
	}
}

const styles = {
	container: {
		backgroundColor: '#f8f8f8',
		height: 100
	}
}