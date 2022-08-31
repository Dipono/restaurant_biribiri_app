import { Image, Text, View, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ResaurantItems from './ResaurantItems';
import Delivery from './Delivery';
const axios = require('axios')
class Home extends Component {

    
    render() {
        
        return (
            <View>
                <Header></Header>
                <Image source={require("../assets/images/Breward.jpg")} style={{width:"100%",height:180}} />
                <NavBar/>
                <ScrollView>
                     <ResaurantItems /> 
                </ScrollView>
                <Delivery />
            </View>
        )
    }
}


export default Home;