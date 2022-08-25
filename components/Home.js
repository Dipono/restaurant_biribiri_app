import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
class Home extends Component {
    render () {
        return (
            <View>
                <Header></Header>
                <Text>Hello World!</Text>
            </View>
            
        )
    }
}
export default Home;