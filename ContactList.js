import * as React from 'react';
import {StyleSheet, AsyncStorage, BackHandler} from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Text,
  Left,
  Right,
  List,
  ListItem,
  Thumbnail,
  Badge,
} from 'native-base';

export default class ContactList extends React.Component {
  render() {
    return (
      <Content>
        <List>
          {this.props.contact.map(contact => {
            return (
              <ListItem avatar>
                <Left>
                  <Thumbnail source={contact.image} />
                </Left>
                <Body>
                  <Text numberOfLines={1}>{contact.name}</Text>
                  <Text note numberOfLines={1}>
                    {contact.Date}
                  </Text>
                </Body>

                <Right>
                  <Text note>{contact.lastTime}</Text>
                  <Badge success>
                    <Text>2</Text>
                  </Badge>
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Content>
    );
  }
}
