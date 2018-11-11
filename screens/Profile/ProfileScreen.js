import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon, Container, Content } from "native-base";
import HeaderComponent from '../CustomeComponents/headerComponents/index'
class ProfileScreen extends Component {
    static navigationOptions = {
        header:null,
        tabBarLabel : null,
        tabBarIcon : ({tintColor}) =>(
            <Icon name="person" style= {{color:tintColor, fontSize:27}}></Icon>
        )
    } 

    render() {
        return (
            <Container style={styles.container}>
                <HeaderComponent/>

                <Content padder>
                    <Text>ProfilScreen</Text>
                </Content>
            </Container>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff'
    }
});