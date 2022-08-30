import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'
import { displayProduct} from '.'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { resturentProducts: [], category: [] }
    }

    async allProfucts(){

    }

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