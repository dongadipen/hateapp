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
  Text,
  Content,
  Footer,
  FooterTab,
} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Text style={{fontSize: 13}}>CHATS</Text>
          </Button>
          <Button
            active
            onPress={() => {
              this.props.navigation.navigate('Status');
            }}>
            <Text style={{fontSize: 13}}>STATUS</Text>
          </Button>
          <Button
            Title
            onPress={() => {
              this.props.navigation.navigate('Call');
            }}>
            <Text style={{fontSize: 13}}>CALLS</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
