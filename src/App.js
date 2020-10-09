import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return(
    <View>

      <View>
        <Text style={styles.header}>CLARUSWAY</Text>
        <Text style={styles.metin}>FULLSTACK TEAM</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Merhaba</Text>
          <Text>React-Native dünyasına hoşgeldiniz!</Text>
          <Text>Fullstack React Native öğreniyor!</Text>
          <Text>React Native öğrenmek çok heyecanlı!</Text>
        </View>        
      </View>

      <View style={styles.image}>
      <Text style={{color: 'red', textAlign : 'center', fontSize: 20, fontWeight: 'bold'}}>Kolaylık ve neşeyle zafer bizim olacak!</Text>
        <Image source={require('../img/yıldırım.jpg')} style={{width: 300, height: 200}}/>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    color: 'white',
    marginTop: 50,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  metin: {
    backgroundColor: 'orange',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 20,
    marginRight:20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 4
  },
  text: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    margin: 15,
    padding: 15
  },
  image : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;