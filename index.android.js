'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import QRCodeScreen from './QRCodeScreen';

export default class Example extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ title: 'Index', index: 0 }}
        renderScene={(route, navigator) => {
          console.log(route.title)
          if (route.title =='QRCode') {
            return <QRCodeScreen title={route.title} navigator={navigator} />
          } else {
            return <Index title={route.title} navigator={navigator} onSucess={this._onSucess}/>
          }

        }}
      />
    );
  };

  _onSucess(result) {
    console.log(result);
  };
};

var Index = React.createClass({

  render: function() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={this._onPressQRCode}>
          <Text>Read QRCode</Text>
        </TouchableOpacity>
      </View>
    );
  },

  _onPressQRCode: function() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      data: {
        onSucess: this._onSucess,
      },
    });
  },



});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('Example', () => Example);
