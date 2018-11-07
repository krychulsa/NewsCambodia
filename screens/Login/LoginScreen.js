import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {Button, Container} from "native-base"
import HomeScreen from "../Home/HomeScreen";
class LoginScreen extends Component {
    static navigationOptions = {
        header : null,
    }
    render() {
        return (
            <Container style={styles.container}>
                <Button onPress = {()=> this.props.navigation.navigate('Home')}>
                    <Text>Home Screen</Text>
                </Button>

            </Container>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});