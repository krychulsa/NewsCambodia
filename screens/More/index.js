import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Card,
  Icon,
  CardItem,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import {TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons';
import styles from "./styles"
import HeaderComponent from '../CustomeComponents/headerComponents/index'
class CardComponent extends Component {
  render(){
    return(
      <TouchableOpacity onPress={()=>alert(this.props.text)}>
          <CardItem bordered >
            <Left>
              <Icon
                active
                name={this.props.siconName}
                style={{ color: this.props.color }}
              />
              <Text>{this.props.text}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
        </TouchableOpacity>
       
    )
  }
}

class HeaderComponents extends Component{
  render(){
    return (
      <Header
          hasSubtitle 
          style={{backgroundColor:'#3866b8'}}
          androidStatusBarColor="#3866b8"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color:'white'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Popular News</Title>
          </Body>
          <Right />
        </Header>
    )
  }
}

class index extends Component {
  static navigationOptions = {
    header:null,
    tabBarLabel : null,
    tabBarIcon : ({tintColor}) =>(
        <Icons name = "ios-menu" size ={25} color={tintColor}></Icons>
    )
  } 


  
  render() {
    return (
      <Container style={styles.container}>

          <HeaderComponent/>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered style={styles.cardHeaderBackground}>
              <Text style={styles.cardHeaderText}>GENERAL</Text>
            </CardItem>
              <CardComponent siconName = "logo-googleplus" color= "#DD5044" text = "Google Plus"/>
              <CardComponent siconName = "logo-facebook" color= "#3B579D" text = "facebook"/>
              <CardComponent siconName = "logo-twitter" color= "#55ACEE" text = "Twitter"/>
              <CardComponent siconName = "logo-reddit" color= "#FF4500" text = "Reddit"/>
              <CardComponent siconName = "logo-linkedin" color= "#007BB6" text = "LinkedIn"/>
              <CardComponent siconName = "logo-youtube" color= "#D62727" text = "YouTube"/>
          </Card>

          <Card style={styles.mb}>
            <CardItem header bordered style={styles.cardHeaderBackground}>
              <Text style={styles.cardHeaderText}>SETTING</Text>
            </CardItem>
              <CardComponent siconName = "logo-googleplus" color= "#DD5044" text = "Google Plus"/>
              <CardComponent siconName = "logo-facebook" color= "#3B579D" text = "facebook"/>
              <CardComponent siconName = "logo-twitter" color= "#55ACEE" text = "Twitter"/>
              <CardComponent siconName = "logo-reddit" color= "#FF4500" text = "Reddit"/>
              <CardComponent siconName = "logo-linkedin" color= "#007BB6" text = "LinkedIn"/>
          </Card> 

          <Card style={styles.mb}> 
            <CardItem header bordered style={styles.cardHeaderBackground}>
              <Text style={styles.cardHeaderText}>ABOUT</Text>
            </CardItem>
            <CardComponent siconName = "logo-youtube" color= "#D62727" text = "YouTube"/>
            <CardComponent siconName = "logo-googleplus" color= "#DD5044" text = "Google Plus"/>
            <CardComponent siconName = "logo-facebook" color= "#3B579D" text = "facebook"/>
            <CardComponent siconName = "logo-twitter" color= "#55ACEE" text = "Twitter"/>
            <CardComponent siconName = "logo-reddit" color= "#FF4500" text = "Reddit"/>
            <CardComponent siconName = "logo-linkedin" color= "#007BB6" text = "LinkedIn"/>
            <CardComponent siconName = "logo-youtube" color= "#D62727" text = "YouTube"/>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default index;
