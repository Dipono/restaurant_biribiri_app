import {StyleSheet, View, Text } from 'react-native'
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'
import { db } from './firebase';
import { collection, getDocs, query } from 'firebase/firestore'


export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { dataGallary: [], category: [] }
}

async allProfucts() {
    const dbRef = collection(db, 'foodType')

    const data = await getDocs(dbRef);
    const category = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    this.setState({ category: category })
    category.map(async (elem) => {
        const subCollectRef = collection(db, `foodType/${elem.id}/gallery`);
        const foodDetails = await getDocs(subCollectRef);
        const gallery = foodDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        this.setState({ dataGallary: gallery })
    })

}

render() {
  this.allProfucts()
  return(
    <View style={styles.categories}>
    {this.state.category.map((cat, xid) => (
        <View key={xid}>
            <Text style={styles.categoryText} onPress={() => searchProduct(cat.catName)}>{cat.category}</Text>
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