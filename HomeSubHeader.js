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
          <Button active={this.props.activeButton == 'chats' ? true : false}>
            <Text style={{fontSize: 13}}>CHATS</Text>
          </Button>
          <Button
            active={this.props.activeButton == 'status' ? true : false}
            onPress={() => {
              this.props.navigation.navigate('Status');
            }}>
            <Text style={{fontSize: 13}}>STATUS</Text>
          </Button>
          <Button
            active={this.props.activeButton == 'calls' ? true : false}
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
