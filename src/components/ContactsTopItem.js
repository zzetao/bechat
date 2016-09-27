import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TopContactsItem extends Component {
	render() {
		if (this.props.isAdd) {
			return(
				<TouchableOpacity
					onPress={this.props.onPress}
					activeOpacity={0.6}
				>
					<View style={styles.item}>
						<Icon name="ios-add-circle-outline" size={45} color="#ddd" />
					</View>
				</TouchableOpacity>
			)
		}

		return(
			<TouchableOpacity
				onPress={this.props.onPress}
				activeOpacity={0.6}
			>
				<View style={styles.item}>
					<Image source={{uri: this.props.avatarUri}} style={styles.avatar} />
					<Text style={styles.text}>{this.props.name}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = {
	item: {
		justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 14,
    paddingRight: 14
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	text: {
		textAlign: 'center',
		color: '#999',
		paddingTop: 5,
		fontSize: 12
	}
}