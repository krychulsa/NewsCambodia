import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
//import { Icon } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

class SettingScreen extends Component {

    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="ios-settings" color={tintColor} size={25}></Icon>
        )
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text>SettingScreen</Text>
            </View>
        );
    }
}
export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});