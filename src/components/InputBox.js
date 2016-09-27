import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';


export default class InputBox extends Component {
	sendHandle() {
		AlertIOS.alert('send.....')
	}
	render() {
		return(
			<View style={styles.container}> 
        <TextInput 
        	style={styles.input}
          placeholder={'Type a message...'}
          placeholderTextColor='#eee'
        />
        <TouchableHighlight
        	onPress={this.sendHandle.bind(this)}
        	style={styles.button}
        	underlayColor='#249e58'
        >

		        <Text style={styles.buttonText}>Send</Text>

        </TouchableHighlight>
			</View>
		)
	}
}

const styles = {
	input: {
		borderColor: '#42d17f',
		borderWidth: 1,
		height: 40,
		padding: 8,
		flex: 1
	},
	container: {
    flexDirection: 'row'
    // flexWrap: 'wrap'
	},
	button: {
		width: 80,
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#42d17f'
	},
	buttonText: {
		color: '#fff'
	}
}