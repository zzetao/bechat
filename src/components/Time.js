import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

export default class Time extends Component {
	render() {
    let { time } = this.props;

		return(
      <View>
        <Text style={styles.text}>
            {time}
        </Text>
      </View>			
		)
	}
}

let styles = {
	text: {
    textAlign: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
    fontSize: 12,
    borderRadius: 3,
    color: '#666',
    padding: 3
	}
}