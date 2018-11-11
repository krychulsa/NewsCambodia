import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Button, Icon } from "native-base";
//import Icon from 'react-native-vector-icons/Ionicons';
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
                    <Icon name="home" style={{color:tintColor, fontSize:27}}/>
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
            activeTintColor : 'grey',
            inactiveTintColor: '#3866b8'
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