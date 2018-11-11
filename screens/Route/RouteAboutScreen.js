import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import SearchScreen from '../searchbar/index'
import AboutScreen from '../About/About'
import FavoriteScreen from '../toast/index'
import DetailScreen from '../DetailNews/index'
import {createStackNavigator} from "react-navigation"
 
const AppAboutScreen = createStackNavigator ({
    about : AboutScreen,
    search : SearchScreen,
    favorite : FavoriteScreen,
    detail : DetailScreen,
})

export default AppAboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});