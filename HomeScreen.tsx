import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const HomeScreen = ({ navigation }) => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text6}>Bienvenue, Lucas !</Text>
        <Text style={styles.text2}>Ma progression</Text>
        <View style={styles.blueRectangle} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoreTasks')}>
        <Text style={styles.buttonText}>Voir les tâches</Text>
      </TouchableOpacity>
        <Text style={styles.text3}>Tâches en cours</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.greyRectangle} />
        <View style={styles.greyRectangle2} />
        <View style={styles.greyRectangle3} />
        <View style={styles.greyRectangle4} />
        <CheckBox
          style={{ position: 'absolute', top: 294, left: 100 }}
          disabled={false}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <View>
        <CheckBox
          style={{ position: 'absolute', top: 354, left: 100 }}
          disabled={false}
          value={isSelected2}
          onValueChange={(newValue) => setSelection2(newValue)}
        />
    </View>

        <CheckBox
          style={{ position: 'absolute', top: 414, left: 100 }}
          disabled={false}
          value={isSelected3}
          onValueChange={setSelection3}
        />
        <Text style={{ position: 'absolute', top: 301, left: 100 }}>Faire les courses</Text>
        <Text style={{ position: 'absolute', top: 361, left: 100 }}>Finir le ménage</Text>
        <Text style={{ position: 'absolute', top: 420, left: 100 }}>Terminer les devoirs</Text>
      </View>
      <Text style={styles.text4}>Mes groupes</Text>
      <View style={styles.greyRectanglebas} />
      <View style={styles.greyRectanglebas2} />
      <View style={styles.greyRectanglebas3} />
      <TouchableOpacity style={styles.button1} onPress={() => console.log('Le bouton pour creer une tache a été cliqué!')}>
          <Text style={styles.buttonText1}>+</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageuser: {
    width: 35,
    height: 35,
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    top: 40,

  },
  text2: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    top: 90,
    left: 26,

  },
  text3: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    top: 245,
    left: 26,

  },
  text4: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    top: 489,
    left: 26,

  },
  text6: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 45,
    left: 20,

  },
  greyRectanglebas: {
    width: 100,
    height: 70,
    backgroundColor: '#B6B7B8',
    position: 'absolute',
    top: 520,
    borderRadius: 20,
    left: 27,
  },
  greyRectanglebas2: {
    width: 100,
    height: 70,
    backgroundColor: '#B6B7B8',
    position: 'absolute',
    top: 520,
    borderRadius: 20,
    left: 140,
  },
  greyRectanglebas3: {
    width: 100,
    height: 70,
    backgroundColor: '#B6B7B8',
    position: 'absolute',
    top: 520,
    borderRadius: 20,
    left: 253,
  },


  blueRectangle: {
    width: 330,
    height: 100,
    backgroundColor: '#0FC2FB',
    position: 'absolute',
    top: 127,
    left: 22,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    position: 'absolute',
    top: 158,
    left: 220,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  button1: {
    height: 40,
    width: 120,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 12,
    position: 'absolute',
    top: 620,
    left: 127,
    backgroundColor: '#0FC2FB',
  
  },
  buttonText1: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute',
    left: 49,
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyRectangle: {
    width: 330,
    height: 200,
    backgroundColor: '#B6B7B8',
    position: 'absolute',
    top: 270,
    borderRadius: 20,
    left: 22,
  },

  greyRectangle2: {
    width: 290,
    height: 50,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 285,
    borderRadius: 15,
    left: 42,
  },
  greyRectangle3: {
    width: 290,
    height: 50,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 345,
    borderRadius: 15,
    left: 42,
  },
  greyRectangle4: {
    width: 290,
    height: 50,
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    top: 405,
    borderRadius: 15,
    left: 42,
  },




});

export default App;
