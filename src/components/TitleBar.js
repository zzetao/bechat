import  React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';


export default class TitleBar extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		backgroundColor: '#eee'
	},
	text: {
		padding: 8,
		color: '#333'
	}
}