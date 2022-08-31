import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ResaurantItems from './ResaurantItems';
class Home extends Component {

  

    render() {
        // this.allProfucts()
        return (
            <View>
                <Header></Header>
                <Image source={require("../assets/images/Breward.jpg")} style={{width:"100%",height:180}} />
                <NavBar/>
                <ResaurantItems/>


            </View>


        )
    }
}


export default Home;