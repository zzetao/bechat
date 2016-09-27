import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

let icon = 'https://avatars1.githubusercontent.com/u/8110936?v=3&s=460';

let iconStyles = {
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  box: {
    // flex: 1,
    padding: 10,
    margin: 10,
    height: 80,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  pic: {
    marginBottom: 5,
    width: 40,
    height: 40
  },
  text: {
    textAlign: 'center',
    color: '#999'
  }
}

export default class iconList extends Component {
  render() {
    return (
      <View>
        <View style={iconStyles.container}>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>美食</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>外卖</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>鲜果购</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>下午茶</Text>
          </View>
        </View>
        <View style={iconStyles.container}>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>正餐优选</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>美团专送</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>精选小吃</Text>
          </View>
          <View style={iconStyles.box}>
            <Image style={iconStyles.pic} source={{uri: icon}} ></Image>
            <Text style={iconStyles.text}>新商家</Text>
          </View>
        </View>
      </View>
    )
  }
}

