import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage} from './redux/login'
class Home extends Component {

    render() {

        return (
            <View >
                <Text >Welcome</Text>
            </View>
        )
    }
}
export default Home;