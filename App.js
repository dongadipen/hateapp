/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import HomeHeader from './HomeHeader';

import ContctList from './ContctList';

import {
  Container,
  Header,
  Content,
  Body,
  Text,
  Label,
  Item,
  Button,
  Icon,
  Title,
  Left,
  Right,
  View,
  card,
} from 'native-base';
import image0 from './img/download.jpg';
import image1 from './img/download1.jpg';
import image2 from './img/download2.jpg';
import image3 from './img/download3.jpg';
import image4 from './img/downlaod4.jpg';
import image5 from './img/downlaod5.jpg';
import image6 from './img/download6.jpg';
import image7 from './img/download7.jpg';

export default class App extends React.Component {
  state = {
    contcts: [
      {
        name: 'rakesh',
        lastMsg: 'hello world',
        lastTime: '10:00 am',
        image: image0,
      },
      {
        name: 'dipen',
        lastMsg: ' Doing what you like will always keep you happy . .',
        lastTime: '9:00 pm',
        image: image1,
      },
      {
        name: 'miralbahi',
        lastMsg: 'welcome to react-native..... ',
        lastTime: '8:30 am',
        image: image2,
      },
      {
        name: 'kumar pratik',
        lastMsg: 'hi how are you bro....',
        lastTime: '7:00 pm',
        image: image3,
      },
      {
        name: 'rameshbhai chair',
        lastMsg: 'hindustan glass products',
        lastTime: '6:40 am',
        image: image4,
      },
      {
        name: 'v.k cello chair',
        lastMsg: 'law of attraction',
        lastTime: '3:20 pm',
        image: image5,
      },
      {
        name: 'react-native',
        lastMsg: 'kem cho ?',
        lastTime: '4:53 am',
        image: image6,
      },
      {
        name: 'beti bachavo beti padhavo',
        lastMsg: 'hello gmmmmm su ke kamka',
        lastTime: '2:30 pm',
        image: image7,
      },
    ],
  };

  render() {
    return (
      <View style={styles.paragraph}>
        <HomeHeader />
        <ContctList contcts={this.state.contcts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    height: '100%',
  },
  paragraph: {
    fontSize: 10,
    fontWeight: 'bold',

    flex: 1,
  },
});
