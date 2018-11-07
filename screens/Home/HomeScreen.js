import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Button } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from "react-navigation"
import DetailScreen from "../Header/DetailScreen";
import AboutScreen from '../Route/RouteAboutScreen'
import SettingScreen from '../Setting/SettingScreen'
import ProfileScreen from '../Profile/ProfileScreen'
import MoreScreen from '../More/index'

const HomeTabNavigation = createBottomTabNavigator(
    {
        Home : {
            screen : AboutScreen,
            navigationOptions : {
                header:null,
                tabBarLabel : null,
                tabBarIcon : ({tintColor}) =>(
                    <Icon name="ios-home" color={tintColor} size={25}/>
                )
            } 
        },
        Setting : SettingScreen,
        About : DetailScreen,
        Profile : ProfileScreen,
        More : MoreScreen
    }, {
        initialRouteName :'Home',
        navigationOptions : {
            tabBarVisible : true,
        },
        tabBarOptions :{
            activeTintColor : '#3866b8',
            inactiveTintColor: 'grey'
        }
    }
)

class HomeScreen extends Component {
    static navigationOptions={
        header:null,
    }
    render() {
        return (
            <Container style={styles.container}>
                <Button onPress = {()=>this.props.navigation.navigate('Detail')}>
                    <Text>Detail Screen</Text>
                </Button>
                
            </Container>
        );
    }
}



export default HomeTabNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});