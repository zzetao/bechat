import React, { Component, PropTypes } from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableOpacity
} from 'react-native';


export default class LoadMoreFooter extends Component {
	render() {
		let { text } = this.props; 

		return(
			<View style={styles.footer}>
				<Text style={styles.footerTitle}>{text}</Text>
			</View>
		)
	}
}

const styles = {
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40
	},
	footerTitle: {
		fontSize: 14,
		color: '#999'
	}
}