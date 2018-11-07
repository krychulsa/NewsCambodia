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
    Content,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
} from "native-base";
import styles from "./Style";
class DetailScreen extends Component {

    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="home"></Icon>
        )
    } 

    render() {
        return (
            <Container style={styles.container}>
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
                        <Title style={styles.textColor}>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>alert("Press Button Search")}>
                        <Icon name="search" size={30} style={{ color: "#FFF" }} />
                        </Button>
                        <Button transparent onPress={()=>alert("Press Button Like")}>
                            <Icon name="heart" style={{ color: "#FFF" }}></Icon>
                        </Button>
                        <Button transparent onPress={()=>alert("Press Button More")}>
                            <Icon name="share" style={{ color: "#FFF" }}></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Text>Content go here</Text>
                </Content>
            </Container>
        );
    }
}
export default DetailScreen;