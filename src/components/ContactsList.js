import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	ListView,
	TouchableHighlight
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import LoadMoreFooter from '../components/LoadMoreFooter';

// styles
import styles from '../styles/index.js';
const { homePageStyles } = styles;

export default class ContactsList extends Component {
  constructor(props, context) {
    super(props, context);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      pageSize: 1,
      users: [],
      dataSource: ds.cloneWithRows([])
    }; 
    this.getData();
  }

  getData(pageSize = 1) {
    fetch('http://api.randomuser.me?results=20&page=' + pageSize)
    .then(response => response.json())
    .catch(error => console.warn('fetch error: ',error))
    .then((response) => {
      let { results } = response;
      let users = [];
      for (r of results){
        users.push({
          name: `${r.name.first} ${r.name.last}`,
          avatar: r.picture.medium
        })
      }
      let usersAll = this.state.users.concat(users);
      this.setState({
        users: usersAll,
        dataSource: this.state.dataSource.cloneWithRows(usersAll)
      })
    })
  }

  _renderFooter() {
    return <LoadMoreFooter text={'Loading...'} />
  }


  _renderRow(rowData: object, sectionID: number, rowID: number) {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0,0,0,0.6)'
    }];

    return(
      <Swipeout 
        right={swipeBtns}
        autoClose='true'
        backgroundColor='transparent'
      >
        <TouchableHighlight
          underlayColor='#eee'
        >
          <View style={[homePageStyles.rows.row, {alignItems: 'center'}]}>
            <View style={homePageStyles.rows.avatarContainer}>
              <Image source={{uri: rowData.avatar}} style={homePageStyles.rows.avatar} />
            </View>
            <Text style={homePageStyles.rows.name}>{ rowData.name }</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  loadMore(e) {
    console.log('end: ' ,e)
    let { pageSize } = this.state;
    this.setState({
      pageSize: pageSize+1
    })
    this.getData(pageSize)

  }

  render() {
      return (
          <ListView
            onLayout={(event) => {
                let {x, y, width, height} = event.nativeEvent.layout;
                console.log(x,y,width,height);
              }}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            onEndReached={this.loadMore.bind(this)}
            onEndReachedThreshold={20}
            renderHeader={this.props.renderHeader}
            renderFooter={this._renderFooter.bind(this)}
            renderRow={ this._renderRow.bind(this) }
          />
      )
  }
}