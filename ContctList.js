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

export default class ContctList extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.contcts.map(contct => {
              return (
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={contct.image} />
                  </Left>
                  <Body>
                    <Text numberOfLines={1}>{contct.name}</Text>
                    <Text note numberOfLines={1}>
                      {contct.lastMsg}
                    </Text>
                  </Body>

                  <Right>
                    <Text note>{contct.lastTime}</Text>
                    <Badge success>
                      <Text>2</Text>
                    </Badge>
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
