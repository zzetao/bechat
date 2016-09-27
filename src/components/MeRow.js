import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MeRow extends Component {
	render() {
		return(
			<TouchableHighlight
				underlayColor="#f8f8f8"
				onPress={this.props.onPress}
			>
				<View style={styles.row}>
					<Icon name={this.props.icon} style={styles.icon} size={30} color="#999" />
					<Text style={styles.text}>{this.props.text}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = {
	row: {
    flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		padding: 15,
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	icon: {
		paddingRight: 20
	},
	text: {
		color: '#666',
		fontSize: 18
	}
}