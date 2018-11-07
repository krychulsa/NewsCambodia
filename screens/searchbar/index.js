import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text
} from "native-base";
import {Platform, StyleSheet} from 'react-native';
import styles from "./styles";

class NHSearchbar extends Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded
          hasSubtitle 
          style={{backgroundColor:'#3866b8'}}
          androidStatusBarColor="#3866b8"
          iosBarStyle="light-content"
        >
        <Icon 
            style={{color:'white', paddingTop: Platform.OS ==='ios'? 7 : 12, marginRight: Platform.OS ==='ios'? 15 : 20, }} 
            name ="arrow-back"
            onPress={()=>this.props.navigation.goBack()}  
            />
          <Item style={{backgroundColor:"white"}}>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
        </Header>

        <Content padder>
        
        </Content>
      </Container>
    );
  }
}

export default NHSearchbar;
