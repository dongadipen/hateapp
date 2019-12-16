import * as React from 'react';
import {StyleSheet, AsyncStorage, BackHandler, View, Image} from 'react-native';
import {Container, Content} from 'native-base';
import image from './img/12345.jpg';
import HomeHeader from './HomeHeader';
import HomeSubHeader from './HomeSubHeader';

export default class Status extends React.Component {
  render() {
    return (
      <Container>
        <HomeHeader />
        <HomeSubHeader
          navigation={this.props.navigation}
          activeButton={'status'}
        />
        <Content>
          <Image source={image} />
        </Content>
      </Container>
    );
  }
}
