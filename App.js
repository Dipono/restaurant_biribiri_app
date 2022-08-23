import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
  const [SearchWord, setSearchWord] = useState('')

  function handleWeather() {
    console.log(SearchWord)
    alert(12)
  }
 
  let weather = (
    <View style={styles.wheatherBody}>
      <View style={styles.upperWeather}>
        <View style={styles.upperWheatherDetails}>
          <View style={styles.upperLeft}>
            <Text style={styles.city}>Pretoria</Text>
            <Text style={styles.Temperature}>12°C</Text>
          </View>
          <View style={styles.upperRight}>
            <Text>Image</Text>
            <Text style={styles.description}>clear sky</Text>
          </View>
        </View>
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput placeholder='type city, town' style={styles.controlForm} onChangeText={(e) => setSearchWord(e)} />
        <Pressable onPress={handleWeather} style={styles.searchBtn}><Text style={styles.searchTxt}>Search</Text></Pressable>
      </View>
      {weather}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218, 204, 195, 0.884)',
    height: '100vh',
  },
  formGroup: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50
  },
  controlForm: {
    height: 40,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  searchBtn: {
    marginTop: 15,
    height: 35,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  searchTxt: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  wheatherBody: {
    backgroundColor: 'rgba(0, 0, 0, 0.507)',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: 'auto',
    color: 'black',
    borderRadius: 9,
  },
});
