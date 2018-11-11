import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image

} from "react-native";
import Category from '../categoryComponent/index'
const {width, height} = Dimensions.get('window')
class index extends Component {
    render() {
        return (
            <View style={{marginBottom:10}}>
                <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700'}}>
                                What can we help you find, Varun?
                            </Text>

                            <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../asset/img1.png')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../asset/img2.png')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../asset/img1.png')}
                                        name="Resturant"
                                    />
                                    <Category imageUri={require('../asset/img1.png')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../asset/img2.png')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../asset/img1.png')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
            </View>
        );
    }
}
export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});