import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage} from './redux/login'
class Home extends Component {

    render() {

        return (
            <View>
                <Header></Header>
                <Text>Hello World!</Text>
            </View>
            

        )
    }
}
export default Home;