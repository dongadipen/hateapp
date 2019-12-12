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
} from 'native-base';

export default class HomeHeader extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>Hateapp</Title>
        </Body>
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
