import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
 import {createStackNavigator} from "react-navigation"
 import HomeScreen from '../Home/HomeScreen'
 import LoginScreen from '../Login/LoginScreen'
import DetailScreen from "../Header/DetailScreen";
import AboutScreen from "../Route/RouteAboutScreen"
const AppStackNavigator = createStackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions:{
            header : null
        }
    },
    Home: {
        screen : HomeScreen,
        navigationOptions : {
            header: null
        }
    },
    Detail : DetailScreen, 
    About : AboutScreen
})

AppStackNavigator.navigationOptions={
    header : null,
}

class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>componentName</Text>
            </View>
        );
    }
}
export default AppStackNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});