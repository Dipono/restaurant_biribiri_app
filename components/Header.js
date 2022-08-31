import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Cart from './cart'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false,
            openCart: false,
            openSearch: false,
            openUser: false
        }
    }

    menuOpen(){
        this.setState({ openMenu: true })
        console.log(this.state.openMenu)
    }
    
    render() {
        /* function menuOpen(){
            setState({openMenu: true})
            console.log('dhdhjdfhj')
            console.log(openMenu)
        } */
        return (
            <View style={styles.main}>
                <View style={styles.logo}>
                    <Text style={styles.logoText} >BIRIBIRI</Text>
                </View>
                <View style={styles.nav}>
                    <Image source={require('../assets/images/search.png')} style={styles.img} />
                    <Image source={require('../assets/images/circle-user-solid.svg')} style={styles.img} />
                    <TouchableOpacity onPress={() =>this.setState({ openCart: true })}><Image source={require('../assets/images/cart-shopping-solid.svg')} style={styles.img} /></TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.setState({ openMenu: true })}><Image source={require('../assets/images/menu.png')} style={styles.img}  /></TouchableOpacity>
                </View>
                <Modal transparent={true} visible={this.state.openMenu}>
                    <View style={styles.modal}>
                        <Text>menu</Text>
                        <Text onPress={() =>this.setState({ openMenu: false })} style={styles.cancelModal}>X</Text>
                    </View>
                    
                </Modal>
                <Modal transparent={true} visible={this.state.openCart}>
                    <View style={styles.modal}>
                        <Text>cart</Text>
                        <Text onPress={() =>this.setState({ openCart: false })} style={styles.cancelModal}>X</Text>
                        <Cart />
                    </View>
                    
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 25,
        flexDirection: 'row',
        position: 'relative',

    },
    logo: {
        width: '75%',
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
        marginTop: 5,
    },
    img: {
        width: 16,
        height: 17,
        marginRight: 5,
        marginLeft: 5,
    },
    profile: {
        flexDirection: 'row',
        
    },
    right: {
        flexDirection: 'row',
        position: 'absolute',
        right: '2%'
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1
    },
    cancelModal: {
        textAlign: 'right',
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Header;