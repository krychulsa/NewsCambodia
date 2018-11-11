import React, { Component } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    Platform
} from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Item,
  Input
} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons'
import styles from '../style'
import {withNavigation} from 'react-navigation'
class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <Header 
            hasSubtitle 
            style={{backgroundColor:'#3866b8'}}
            androidStatusBarColor="#3866b8"
            iosBarStyle="light-content"
        >
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                    <Icon name="arrow-back" style={{ color: "#FFF" }}></Icon>
                </Button>
            </Left>
            <Body>
                <Title style={styles.textColor}>{this.props.title}</Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>alert("Press Button Search")}>
                <Icon name="globe" size={30} style={{ color: "#FFF" }} />
                </Button>
                <Button transparent onPress={()=>alert("Press Button Like")}>
                    <Icon name="heart" style={{ color: "#FFF" }}></Icon>
                </Button>
                <Button transparent onPress={()=>alert("Press Button More")}>
                    <Icon name="share" style={{ color: "#FFF" }}></Icon>
                </Button>
            </Right>
    </Header>
      </View>
    );
  }
}
export default withNavigation(HeaderComponent);
