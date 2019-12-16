import * as React from 'react';
import {StyleSheet, AsyncStorage, BackHandler, View, Image} from 'react-native';
import {} from 'native-base';
import image from './img/12345.jpg';

export default class Status extends React.Component {
  render() {
    return (
      <View style={{height: 50, width: 50}}>
        <Image source={image} />
      </View>
    );
  }
}
