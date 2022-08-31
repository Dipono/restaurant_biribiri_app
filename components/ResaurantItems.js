import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
// import { Image } from 'react-native-web';
export default function ResaurantItems() {
    const LocalRestaurant = [
        {
        name:"Brewers Family Restaurant & Take Aways",
        image_uri:"https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
        categories:["Burger","Chips"],
        price:"R",
        reviews:875,
        ratings:4.3
    },
        {
        name:"Brewers Family Restaurant & Take Aways",
        image_uri:"https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
        categories:["Burger","Chips"],
        price:"R",
        reviews:875,
        ratings:4.3
    },
        {
        name:"Brewers Family Restaurant & Take Aways",
        image_uri:"https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
        categories:["Burger","Chips"],
        price:"R",
        reviews:875,
        ratings:4.3
    },
        {
        name:"Brewers Family Restaurant & Take Aways",
        image_uri:"https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
        categories:["Burger","Chips"],
        price:"R",
        reviews:875,
        ratings:4.3
    },
        {
        name:"Wimpy",
        image_uri:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
        categories:["breakfast","burger"],
        price:"R",
        reviews:648,
        ratings:3.8
    },
        {
        name:"Roots Grill Soshanguve",
        image_uri:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
        categories:["Kota","Chicken"],
        price:"R",
        reviews:15,
        ratings:3.6
    },


]
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
        {LocalRestaurant.map((restuarant,index)=> 
            <View key={index} style={{marginTop:10, padding:15, backgroundColor:"white"}}>
        <ResuatrantImage images={restuarant.image_uri}/>
        <ResaurantInfo name={restuarant.name}  ratings={restuarant.ratings}/>
    </View>
)}
    </TouchableOpacity>

  )
}

const ResuatrantImage = (props) =>{
    return(
        <>
           <Image source = {{uri:props.images} } 
            style={{width:"100%", height:180}}/>

            <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
                <MaterialCommunityIcons name = 'heart-outline' size={24} color='white'/>
            </TouchableOpacity>
        </>
     
    )
    
   
};

const ResaurantInfo=(props)=>{
    return(
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
            <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
        <Text style={{fontSize:13, color:"grey"}}>30-45  ~ min</Text>
            </View>


      <View style={{backgroundColor:"#eee", height:30,width:30, alignItems:"center",justifyContent:"center", borderRadius:15}}>
      <Text >{props.ratings}</Text>
      </View>
       
        </View>
    )
}