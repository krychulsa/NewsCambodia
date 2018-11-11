import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon, Container, Content } from "native-base";
//import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../CustomeComponents/headerComponents/index'
class SettingScreen extends Component {

    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="settings" style ={{color:tintColor, fontSize:27}}></Icon>
        )
    } 

    render() {
        return (
            <Container style ={styles.container}>

                <HeaderComponent/>
                
                <Content padder>
                    <Text>Content go here!</Text>
                </Content>
            </Container>
        );
    }
}
export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#fff'
    }
});