import React, { Component } from "react";
import { View, Text, Dimensions ,Image} from "react-native";

import {
  Container,
  Content,
} from "native-base";
import style from "./style";
import HeaderComponent from "../CustomeComponents/headerComponentDetail";
const { width, height } = Dimensions.get("window");

class DetailScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container style={style.container}>
        <HeaderComponent 
            title={this.props.navigation.state.params.address} />
        <Content padder>
          <View>
            <View>
              <Image
                //source={{uri: this.props.picture}}
                source={require("./asset/img2.png")}
                style={{ width: width - 20, height: 200, borderRadius: 5 }}
              />
            </View>
            <View
              padder
              style={{ flex: 1, flexDirection: "row", marginTop: 5 }}
            >
              <View style={{ flex: 88 }}>
                <Text style={style.titleText}>{this.props.navigation.state.params.address} </Text>
              </View>
              <View style={{ flex: 12, alignItems: "flex-end" }}>
                <Image
                  source={require("./asset/save.png")}
                  style={{ width: 40, height: 40, marginTop: -5 }}
                />
              </View>
            </View>
            <View padder style={{ marginTop: 5 }}>
              <Text style={style.descriptionText}>{this.props.navigation.state.params.about}</Text>
            </View>
          </View>

          <View style={{borderTopWidth:1, borderTopColor:'#f0f3f4', marginTop:10}}>
              <Text style={{fontStyle:'italic', paddingTop:10, color:'grey'}}>{`Credit: ${this.props.navigation.state.params.picture}`}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
export default DetailScreen;
