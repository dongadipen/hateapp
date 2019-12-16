import React from 'react';
import {} from 'react-native';

import {
  Container,
  Left,
  Body,
  Title,
  Right,
  Header,
  Button,
  Icon,
  Content,
  Subtitle,
} from 'native-base';

export default class HomeHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Body>
            <Title style={{margin: 10}}>HateApp</Title>
          </Body>
        </Left>

        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>

          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    );
  }
}
