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

class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <Header
          searchBar
          rounded
          hasSubtitle
          style={{ backgroundColor: "#3866b8" }}
          androidStatusBarColor="#3866b8"
          iosBarStyle="light-content"
        >
          <Icon
            style={{
              color: "white",
              paddingTop: Platform.OS === "ios" ? 7 : 12,
              marginRight: Platform.OS === "ios" ? 15 : 15,
              paddingLeft : 15
            }}
            name="download"
            onPress={() => this.props.navigation.goBack()}
          />
          <Item style={{ backgroundColor: "white", borderRadius:25}}>
            <Icon active name="search" />
            <Input placeholder="Search"/>
            {/* <Icon active name="people" /> */}
          </Item>
          <Icon
            style={{
              color: "white",
              paddingTop: Platform.OS === "ios" ? 7 : 12,
              paddingLeft : 15,
              paddingRight: 15
            }}
            name="people"
            onPress={() => this.props.navigation.goBack()}
          />

        </Header>
      </View>
    );
  }
}
export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
