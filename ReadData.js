import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import cio from 'cheerio-without-node-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.$ = cio.load('<p class="hello" style="color: red">Hello world</p>');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.$('.hello').text()}</Text>
                <Text style={styles.text}>{this.$('.hello').attr('style')}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30
    }
});