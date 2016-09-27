import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ContactFunction extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.item}>
					<View style={styles.iconContainer}>
						<Icon name="ios-person-add" color="#4f8ff7" size={40} style={styles.icon} />
					</View>
					<Text style={styles.text}>New Friends</Text>
				</View>
				<View style={styles.item}>
					<View style={styles.iconContainer}>
						<Icon name="ios-people" color="#f9ba49" size={40} style={styles.icon} />
					</View>
					<Text style={styles.text}>Saved Groups</Text>
				</View>
				<View style={styles.item}>
					<View style={styles.iconContainer}>
						<Icon name="ios-star" color="#83b362" size={40} style={styles.icon} />
					</View>
					<Text style={styles.text}>Official Accounts</Text>
				</View>
			</View>
		)
	}
}


const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
    alignItems: 'center',
	},
	item: {
		padding: 15
	},
	text: {
		textAlign: 'center',
		marginTop: 8,
		color: '#666'
	},
	iconContainer:{
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignSelf:  'center',
		width: 60,
		height: 60,
		borderRadius: 30,
		overflow: 'hidden'
	},
	icon: {
		alignSelf:  'center'
	}
}