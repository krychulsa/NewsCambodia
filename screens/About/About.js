import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Header,
  Container,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Content,
  Toast,
  List
} from "native-base";
//import Icon from 'react-native-vector-icons/Ionicons';
import contentData from "../asset/data/contents.json";
import index from "../More/index.js";

class FlatListDataItem extends Component {
    render(){
      return(
          <TouchableOpacity onPress={()=>alert(this.props.company)}>
              <View style={{flex:1, flexDirection:'row', height:150}}>
                  <View style={{flex:30}}>
                  <Image 
                        source={{uri: this.props.picture}}
                        style={{width: 100, height: 100}} />
                  </View>
                  <View style={{flex:70}}>
                    <Text>{this.props.about} </Text>
                  </View>
              </View>
          </TouchableOpacity>
      )
    }
}

class AboutScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="settings" color={tintColor} size={24} />
    )
  };
  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    return fetch(
      "http://www.json-generator.com/api/json/get/bZuAiFGmYy?indent=2"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            data: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.warn(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Container style={styles.container}>
          <Header
            hasSubtitle
            style={{ backgroundColor: "#3866b8" }}
            androidStatusBarColor="#3866b8"
            iosBarStyle="light-content"
          >
            <Left>
              <Button transparent>
                <Icon name="arrow-back" style={{ color: "#FFF" }} />
              </Button>
            </Left>
            <Body>
                <Title style={styles.textColor}>Loading ...</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="search" size={30} style={{ color: "#FFF" }} />
              </Button>
              <Button transparent>
                <Icon name="heart" style={{ color: "#FFF" }} />
              </Button>
              <Button transparent>
                <Icon name="share" style={{ color: "#FFF" }} />
              </Button>
            </Right>
          </Header>
          <Content padder>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <ActivityIndicator />
            </View>
          </Content>
        </Container>
      );
    } else {
      return (
        <Container style={styles.container}>
          <Header
            hasSubtitle
            style={{ backgroundColor: "#3866b8" }}
            androidStatusBarColor="#3866b8"
            iosBarStyle="light-content"
          >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" style={{ color: "#FFF" }} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.textColor}>Home</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("search")}
              >
                <Icon name="search" size={30} style={{ color: "#FFF" }} />
              </Button>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("favorite")}
              >
                <Icon name="heart" style={{ color: "#FFF" }} />
              </Button>
              <Button transparent onPress={() => alert("Press Button More")}>
                <Icon name="share" style={{ color: "#FFF" }} />
              </Button>
            </Right>
          </Header>
          <Content padder>
            <List>
              <FlatList
                data={this.state.data}
                renderItem={({ item, index }) => (
                  index === 0 ? <FlatListDataItem company={item.company} picture={item.picture} about = {item.about}/> : <FlatListDataItem company={item.company} picture={item.picture} about = {item.greeting}/>
                )}
                keyExtractor={({id}, index) => id}
              />
              
            </List>
          </Content>
        </Container>
      );
    }
  }
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
  textColor: {
    color: "#fff"
  }
});
