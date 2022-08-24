import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons';

export default function Cart() {
    return (
        <View style={styles.container}>
            
                <StatusBar backgroundColor='#000000' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Total Price: </Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Total Items: </Text>
                </View>
        
            
            <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.checkOut, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 530
                        }]}
                    >
                        <Text style={[styles.textCheckOut, {
                            color: '#009387',
                            fontWeight: 'bold',
                        }]}>Check Out</Text>

                    </TouchableOpacity>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000',
        fontWeight: 'bold',
        top: 40
    },
    checkOut: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
        
    }
});

