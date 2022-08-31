import { StyleSheet, View, Text, Button } from 'react-native'
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'
import { db } from './firebase';
import { collection, getDocs, query } from 'firebase/firestore'
const axios = require('axios')

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { dataGallary: [], category: [], imageGallery:[] }
  }

  async allProfucts() {
    /*const dbRef = collection(db, 'foodType')

    const data = await getDocs(dbRef);
    const category = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    category.map(async (elem) => {
      const subCollectRef = collection(db, `foodType/${elem.id}/gallery`);
      const foodDetails = await getDocs(subCollectRef);
      const gallery = foodDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id, category: elem }));
      this.setState({ category: category })

      //this.setState({ dataGallary: gallery })
    })*/
    var foodArray= []
    const foodData = await axios.get('https://foodbukka.herokuapp.com/api/v1/menu');
    this.setState({dataGallary: foodData.data.Result})
    for(var count =0; count < foodData.data.Result.length; count++){
      foodArray.push(this.state.dataGallary[count].images)
    }

    this.setState({imageGallery: foodArray})
  }

  searchProduct() {
    console.log(this.state.dataGallary)
    console.log(this.state.imageGallery)

  }

  render() {
    this.allProfucts()
    return (
      <View style={styles.categories}>
        <Button onPress={() => this.searchProduct('hjdhjd')}>get values</Button>
        {this.state.category.map((cat, xid) => (
          <View key={xid}>
            <Text style={styles.categoryText} onPress={() => this.searchProduct(cat.catName)}>{cat.category}</Text>
          </View>
        ))}
      </View>
    )

  }


}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryText: {
    margin: 15
  },
})