import { Image, StyleSheet, Text,Table, View} from 'react-native';
import React, { Component } from 'react';
class Home extends Component {
    render () {
        const nav = ">"
        return (
            
            <View style={styles.container}>
               <View style={styles.title}>
                <Text style={styles.title}>BIRIVIRI</Text>
               </View>
               <View style={styles.x}><Text  style={styles.x}>X</Text></View>



               <View style={styles.categories}>
                  <Image source={require('../assets/images/cart.png')} style={{width:16, height:17, left:300,top:33,}}/>
                  <Image source={require('../assets/images/R.png')} style={{width:16, height:17, left:260,top:16,}}/>
                  <Image source={require('../assets/images/search.png')} style={{width:16, height:17, left:215,top:0,}}/>

               </View>
               <View style={styles.line}>
                <View style={styles.breakfast}><Text  style={styles.x}>Breakfast</Text></View><View style={styles.forward1}><Text style={styles.forward1}>{nav}</Text></View>

                 <View style={styles.line2}></View>

                  <View style={styles.lunch}><Text  style={styles.x}>Lunch</Text></View><View style={styles.forward2}><Text style={styles.forward2}>{nav}</Text></View>

                  <View style={styles.line3}></View> 

                  <View style={styles.Supper}><Text  style={styles.x}>Supper</Text></View><View style={styles.forward2}><Text style={styles.forward2}>{nav}</Text></View>
                  <View style={styles.line4}></View> 

                  <View style={styles.Beverage}><Text  style={styles.x}>Beverage</Text></View><View style={styles.forward2}><Text style={styles.forward2}>{nav}</Text></View>
                  <View style={styles.line5}></View>
               </View>
            </View>





        )

    }
}

const styles = StyleSheet.create({

     container : {
       flexGrow: 1,
       backgroundColor:"#ffff",

     },
     title :{
     width:70,
     left: 12,
     color:"#0000000",
     fontWeight:300,
     top:73,
     height:19,
     fontFamily:'inter',
     fontSize:15,
     fontWeight:700,
     fontStyle:'normal'



     },
     images: {

       top:87,
       flexDirection:"row",
       left:800,
       fontWeight:700,
       fontSize:15,
       fontStyle:'normal'


     },
     categories:{
     left:-55

     },
     line:{

         width:291,
         height:1,
         border:0.2,
         top: 25,
         left:10,
         color:"#0000",
         backgroundColor: "black"


     },
     x:{
          fontWeight:300,
               top:53,
               height:19,
               fontFamily:'inter',
               fontSize:15,
               fontWeight:800,
               fontStyle:'normal',
              left:290
     },
     breakfast:{

        left:1,
        top:20,
        fontFamily:'Inter',
        fontSize:12,
        fontWeight:16,
        lineHeight:13

     },
       line2:{

              width:291,
              height:1,
              border:0.2,
              top: 25,
              left:4,
              color:"#0000",
              backgroundColor: "black"


          },
          forward1:{

                     fontFamily:'Inter',
                     fontSize:30,
                     fontWeight:800,
                     fontStyle:'normal',
                     lineHeight:13,
                     left:260,
                     height:19
          },
           lunch:{

                  left:1,
                  top:40,
                  fontFamily:'Inter',
                  fontSize:12,
                  fontWeight:16,
                  lineHeight:13

               },
          forward2:{

                             fontFamily:'Inter',
                             fontSize:30,
                             fontWeight:800,
                             fontStyle:'normal',
                             lineHeight:13,
                             left:260,
                             top:25,
                             height:19
                  },
       line3:{

                     width:291,
                     height:1,
                     border:0.2,
                     top: 35,
                     left:4,
                     color:"#0000",
                     backgroundColor: "black"
                     


                 },
                 line4:{

                    width:291,
                    height:1,
                    border:0.2,
                    top: 40,
                    left:4,
                    color:"#0000",
                    backgroundColor: "black"
        

                },
                 Supper:{

                    left:1,
                    top:50,
                    fontFamily:'Inter',
                    fontSize:12,
                    fontWeight:16,
                    lineHeight:13
  
                 },
                 Beverage:{

                    left:1,
                    top:50,
                    fontFamily:'Inter',
                    fontSize:12,
                    fontWeight:16,
                    lineHeight:13
  
                 },
                 line5:{

                    width:291,
                    height:1,
                    border:0.2,
                    top: 45,
                    left:4,
                    color:"#0000",
                    backgroundColor: "black"
        

                },




});
export default Home;