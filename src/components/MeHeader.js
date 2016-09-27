import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';

const avatarUri = 'https://avatars0.githubusercontent.com/u/8110936?v=3&s=466';


export default class MeHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.avatarContainer}>
					<Image source={{uri: avatarUri}} style={styles.avatar} />
				</View>
				<View style={styles.text}>
					<Text style={styles.name}>ZZETAO</Text>
					<Text style={styles.desc}>Good job, react native! </Text>
				</View>
			</View>
		)
	}
}

const styles = {
	wrapper: {
		paddingTop: 64,
		backgroundColor: '#58d18c'
	},
	avatarContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 10
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40
	},
	text: {
		padding: 20,
		paddingTop: 0
	},
	name: {
		textAlign: 'center',
		fontSize: 26,
		color: '#fff',
	},
	desc: {
		textAlign: 'center',
		fontSize: 16,
		color: '#fff',
		lineHeight: 22
	}
}