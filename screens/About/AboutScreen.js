import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "native-base";

class AboutScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="home" style={{color:tintColor, fontSize:27}}></Icon>
        )
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text>AboutScreen</Text>
            </View>
        );
    }
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});