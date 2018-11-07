import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
class ProfileScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="ios-person" size ={25} color={tintColor}></Icon>
        )
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text>ProfilScreen</Text>
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});