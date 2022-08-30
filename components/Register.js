import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Register extends Component {

	render(){
		return(
			<View style={styles.container}>
			  <TextInput style={styles.inputBox}
                          underlineColorAndroid='rgba(0,0,0,0)'
                          placeholder="First Name"
                          placeholderTextColor = "#blue"
                          selectionColor="#fff"
                          keyboardType="default"
                          onSubmitEditing={()=> this.password.focus()}
                          />
               <TextInput style={styles.inputBox}
                      underlineColorAndroid='rgba(0,0,0,0)'
                      placeholder="Last Name"
                      placeholderTextColor = "#blue"
                      selectionColor="#fff"
                      keyboardType="default"
                      onSubmitEditing={()=> this.password.focus()}
                      />
             <TextInput style={styles.inputBox}
                                   underlineColorAndroid='rgba(0,0,0,0)'
                                   placeholder="Contact number"
                                   placeholderTextColor = "#blue"
                                   selectionColor="#fff"
                                   keyboardType="numeric"
                                   onSubmitEditing={()=> this.password.focus()}
                                   />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor = "#blue"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />

          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#blue"
              ref={(input) => this.password = input}
              />
           <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        placeholderTextColor = "#blue"
                        ref={(input) => this.password = input}
                        />
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type} SIGN-UP</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    height:30,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    fontWeight:600,
    paddingHorizontal:16,
    fontSize:16,
    color:'#Blue',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});