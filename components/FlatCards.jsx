import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.CardContainer}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>purple</Text>
        </View>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center'
  },
  CardContainer: {
    flex:1,
    flexDirection:'row',
    padding:8,
    
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:4
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card3: {
    backgroundColor: '#53ef68',
  },
  card2: {
    backgroundColor: '#ef53dd',
  },
});
