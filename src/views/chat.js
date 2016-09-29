import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  ListView
} from 'react-native';

// styles
import styles from '../styles/index.js'
const { chatPageStyles } = styles;

// components
import InputBox from '../components/InputBox';
import Message from '../components/Message';
import Time from '../components/Time';

import InvertibleScrollView from 'react-native-invertible-scroll-view';

export default class chatPage extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    let datas = [];

    for (var i = 20 - 1; i >= 0; i--) {
      datas.push({
        position: i%2 == 0 ? 'left' : 'right' ,
        user: {
          id: 1,
          name: 'zzetao',
          avatarUri: 'https://avatars0.githubusercontent.com/u/8110936?v=3&s=466',
        },
        time: `2016-09-15 10:00:00`,
        content: 'hello world' + i
      })
    }

    // reverse
    let dataIds = datas.map((d, index) => index).reverse();

    this.state = {
      messages: datas,
      dataSource: ds.cloneWithRows(datas, dataIds)  
    };
 }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    // render leftMessage
    if (rowData.position === 'left'){
      return(
        <Message 
          position="left"
          data={rowData}
        />
      )
    }

    // render time
    let now = new Date().getTime()/1000;
    let t = new Date(rowData.time);
    let _t = t.getTime()/1000;

    // if ( now - _t > 150 ) {
    //   return(
    //     <Time time={t.toUTCString()} />
    //   )
    // }

    // render rightMessage
    return(
      <Message 
        position="right"
        data={rowData}
      />
    )
  }

  _appendMessage(text) {
    let newMessage = [{
      position:'right',
      user: {
        id: 1,
        name: 'zzetao',
        avatarUri: 'https://avatars0.githubusercontent.com/u/8110936?v=3&s=466',
      },
      time: `2016-09-15 10:00:00`,
      content: text
    }]

    let messages = this.state.messages.concat(newMessage);

    let messageIds = messages.map((d, index) => index).reverse();

    this.setState({
      messages,
      dataSource: this.state.dataSource.cloneWithRows(messages, messageIds)
    })
  }

  render() {
      return (
        <View style={{flex: 1,marginBottom: 49, marginTop: 64}}>
          <ListView
            ref="listview"
            onLayout={(event) => {
              let {x, y, width, height} = event.nativeEvent.layout;
              console.log(x,y,width,height);
            }}
            renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
            enableEmptySections={true}
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={ this._renderRow.bind(this) }
          />
          <InputBox onPress={this._appendMessage.bind(this)} />
        </View>
      )
  }
}