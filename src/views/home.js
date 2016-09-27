import React, { Component, PropTypes } from 'react';
import {
  NavigatorIOS,
  Text,
  Image,
  View,
  ListView,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/Ionicons';

// styles
import styles from '../styles/index.js';
const { homePageStyles } = styles;


import IconsPage from './icons.js';
import ChatPage from './chat.js';
import LoadMoreFooter from '../components/LoadMoreFooter';


export default class NavigatorIOSApp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentWillMount() {
    Icon.getImageSource('ios-add', 30).then((source) => {
      this.setState({ addIcon: source })
    });
  }

  render() {
    if (!this.state.addIcon){
      return false;
    }
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: HomePage,
          title: 'Bechat',
          titleTextColor: '#fff',
          tintColor: '#fff',
          barTintColor: '#42d17f',
          rightButtonIcon: this.state.addIcon,
          backButtonTitle: 'back',
          passProps: {
            title: 'hello'
          },
          onRightButtonPress: () => {
            this.refs.nav.push({
              title: 'Icons',
              titleTextColor: '#fff',
              tintColor: '#fff',
              barTintColor: '#42d17f',
              component: IconsPage,
              // navigationBarHidden: false
            })
          }
        }}
        style={{flex: 1}} />
    );
  }
}

class HomePage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._deleteRow = this._deleteRow.bind(this);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      pageSize: 1,
      users: [],
      dataSource: ds.cloneWithRows([])
    }; 
    console.log(this.state)
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
          description: `${r.location.city} ${r.location.postcode} ${r.location.street}`,
          date: r.registered,
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

  _gotoChat(sectionID, rowID) {
    this.props.navigator.push({
      title: 'Chat',
      component: ChatPage,
      titleTextColor: '#fff',
      tintColor: '#fff',
      barTintColor: '#42d17f',
      wrapperStyle: {
        backgroundColor: '#fff'
      },
      passProps: {
        sectionID,
        rowID
      }
    });
  }

  _deleteRow(sectionID, rowID) {
    AlertIOS.alert('delete row',`sectionID: ${sectionID} rowID: ${rowID}`)
  }

  _renderRow(rowData: object, sectionID: number, rowID: number) {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0,0,0,0.6)',
      onPress: () => { this._deleteRow(sectionID, rowID)}
    }];

    return(
      <Swipeout 
        right={swipeBtns}
        autoClose='true'
        backgroundColor='transparent'
      >
        <TouchableHighlight
          underlayColor='#eee'
          onPress={() => this._gotoChat(sectionID, rowID) }
        >
          <View style={homePageStyles.rows.row}>
            <View style={homePageStyles.rows.avatarContainer}>
              <Image source={{uri: rowData.avatar}} style={homePageStyles.rows.avatar} />
            </View>
            <View style={{flex: 1}}>
              <View style={homePageStyles.rows.info}>
                <Text style={homePageStyles.rows.name}>{ rowData.name }</Text>
                <Text style={homePageStyles.rows.date}>{ rowData.date }</Text>
              </View>
              <Text style={homePageStyles.rows.description} numberOfLines={1}>{ rowData.description }</Text>
            </View>
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

  _renderFooter() {
    return <LoadMoreFooter text={'Loading...'} />
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
            renderFooter={this._renderFooter.bind(this)}
            renderRow={ this._renderRow.bind(this) }
          />
      )
  }
}
