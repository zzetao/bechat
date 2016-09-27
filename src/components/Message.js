import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Text,
  Image,
  View,
  ListView,
  AlertIOS,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


let avatarUri = 'https://avatars0.githubusercontent.com/u/8110936?v=3&s=466';


export default class Message extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  propTypes: {
    position: PropTypes.string,
    data: PropTypes.object
  }

  render() {
    let { data } = this.props;

    return(
      <View style={ data.position === 'left' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'} }>
        <View style={ messageStyles.avatarContainer }>
          <Image source={{uri: data.user.avatarUri}} style={messageStyles.avatar} />
        </View>
        <View style={ messageStyles.messageWrap }>
          <View style={ data.position === 'left' ? messageStyles.messageContent : messageStyles.rightMessageContent }>
            <Text style={ messageStyles.messageText }>
              { data.content }
            </Text>
          </View>
        </View>
      </View>
    )
  }
}



let messageStyles = {
  container: {
    flexDirection: 'row-reverse',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: 60,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  messageWrap: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  messageContent: {
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginRight: 45,
  },
  messageText: {
    borderRadius: 3,
    padding: 12,
  },
  rightMessageContent: {
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginLeft: 45,
  }
}