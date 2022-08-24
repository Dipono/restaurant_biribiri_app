import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import React, { Component } from 'react';

const data = [
    {
        id: 1, category: 'breakfast', gallery: [
            {
                id: 1, image: require('../assets/breakfast/pexels-alexander-mils-2103949.jpg'), itemType: 'cereal', price: '75.00',
                ingredient: 'granola, peach, plain yoghurt, cereal'
            },
            {
                id: 2, image: require('../assets/breakfast/pexels-julian-jagtenberg-103124.jpg'), itemType: 'Pancake', price: '70.00',
                ingredient: 'honey , strawberry, pancake'
            },
            {
                id: 3, image: require('../assets/breakfast/pexels-pixabay-414555.jpg'), itemType: 'Cappuccino', price: '55.00',
                ingredient: 'Milk, cappaccino, scones, cappuccino'
            },
        ]
    },
    {
        id: 2, category: 'Lunch', gallery: [
            {
                id: 1, image: require('../assets/lunch/pexels-pixabay-461382.jpg'), itemType: 'Burger', price: '35.00',
                ingredient: 'tomatoes, bread, cucumber, lettuce'
            },
            {
                id: 2, image: require('../assets/lunch/pexels-robin-stickel-70497.jpg'), itemType: 'Burger', price: '70.00',
                ingredient: 'chips, bread, burger, lettuce, creamy mayonnaise, jack cheese slice, gourmet patty'
            },
            {
                id: 3, image: require('../assets/lunch/pexels-pixabay-315755.jpg'), itemType: 'Pizza', price: '60.00',
                ingredient: 'chicken, cheese'
            },
        ]
    },
    {
        id: 3, itemType: 'Dinner', gallery: [
            {
                id: 1, image: require('../assets/supper/OIP (19).jpg'), itemType: 'Pap', price: '40.00',
                ingredient: 'pap, wors, chakalaka'
            },
            {
                id: 2, image: require('../assets/supper/OIP (21).jpg'), itemType: 'Pap', price: '35.00',
                ingredient: 'Pap and Steak'
            },
            {
                id: 3, image: require('../assets/supper/R (3).jpg'), itemType: 'Pap', price: '34.00',
                ingredient: 'Pap and tripe(mala mogodu)'
            },
        ]
    },
    {
        id: 4, itemType: 'Bevarage', gallery: [
            {
                id: 1, image: require('../assets/bev/OIP (21).jpg'), itemType: 'Alcohol', price: '20.00',
                ingredient: 'beer'
            },
            {
                id: 2, image: require('../assets/bev/pexels-posawee-suwannaphati-391213.jpg'), itemType: 'Alcohol', price: '25.00',
                ingredient: 'wine'
            },
            {
                id: 3, image: require('../assets/bev/pexels-bruno-scramgnon-1337825.jpg'), itemType: 'Juice', price: '20.00',
                ingredient: 'watermelon'
            },
        ]
    }

]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { dataSource: data[0].gallery, filteredProducts:[] }
    }
    render() {
        const { dataSource } = this.state
        function addToCart(data) {
            //alert('added to cart')
            var date = new Date()
            //console.log(date.getTime())
            data.id = date.getTime()
            console.log(data)
        }

        function searchProduct(itemWord) {
            var filterProduct 
            filterProduct = dataSource.filter((value) => {
                return value.ingredient.toLowerCase().includes(itemWord.toLowerCase());
            })

            if(itemWord === 'All') filterProduct= dataSource
            
            console.log(filterProduct)
        }
        return (
            <View>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <View style={styles.image}>
                    <Image source={require('../assets/breakfast/pexels-julian-jagtenberg-103124.jpg')} style={styles.mainImage} />
                </View>
                <View style={styles.categories}>
                    <Text style={styles.categoryText} onPress={() => searchProduct('All')}>All</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Bread')}>Bread</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Cereal')}>Cereal</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Pancake')}>Pancake</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Coffee')}>Coffee</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Cappuccino')}>Cappuccino</Text>
                    <Text style={styles.categoryText} onPress={() => searchProduct('Tea')}>Tea</Text>
                </View>

                <View style={styles.gallaryView} >
                    <ScrollView>
                        {this.state.dataSource.map((data, xid) => (
                            <View style={styles.viewItem} key={xid}>
                                <View style={styles.itemImage}>
                                    <Image source={data.image} style={styles.singlImageItem} />
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.price}>R {data.price}</Text>
                                    <View >
                                        <Text style={styles.name}>{data.itemType}</Text>
                                        <Text style={styles.ingredient}>{data.ingredient}</Text>
                                    </View>
                                </View>
                                <View style={styles.addCart} >
                                    <Text style={styles.addToCart} onPress={() => addToCart(data)}>+</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        borderWidth: 1,
    },
    image: {
        marginTop: 30,
        height: 128,
    },
    mainImage: { width: '100%', height: '100%' },
    brewarText: {
        fontSize: 20,
        color: 'white',
    },

    categories: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    categoryText: {
        margin: 15
    },
    gallaryView: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    viewItem: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        width: '100%',
        margin: 4,
    },
    itemImage: {
        height: 128,
        width: '45%'
    },
    singlImageItem: {
        height: '100%',
        width: '100%',

    },
    description: {
        marginTop: 25,
        width: '45%',
        marginLeft: 5
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    addCart: {
        textAlign: 'right'
    },
    addToCart: {
        fontSize: 25,
        marginTop: -5
    }
})
export default Home;