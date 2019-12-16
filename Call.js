import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

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
import ContactList from './ContactList';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

export default class Call extends React.Component {
  state = {
    contact: [
      {
        name: 'rakesh',
        Date: '11 December',

        lastTime: '10:00 am',
        image: image0,
      },
      {
        name: 'dipen',
        Date: 'Today',

        lastTime: '9:00 pm',
        image: image1,
      },
      {
        name: 'miralbhai',
        Date: 'Yesterday',

        lastTime: '8:30 am',
        image: image2,
      },
      {
        name: 'kumar pratik',
        Date: '5 Octomber',

        lastTime: '7:00 pm',
        image: image3,
      },
      {
        name: 'rameshbhai chair',
        Date: '23 September',

        lastTime: '6:40 am',
        image: image4,
      },
      {
        name: 'v.k cello chair',
        Date: '17 March',

        lastTime: '3:20 pm',
        image: image5,
      },
      {
        name: 'react-native',
        Date: '28 August',
        lastTime: '4:53 am',
        image: image6,
      },
      {
        name: 'beti bachavo beti padhavo',
        Date: '20 August',

        lastTime: '2:30 pm',
        image: image7,
      },
    ],
  };

  render() {
    return (
      <Container>
        <HomeHeader />
        <HomeFooter navigation={this.props.navigation} />
        <ContactList contact={this.state.contact} />
      </Container>
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
