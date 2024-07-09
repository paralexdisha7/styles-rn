import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWeb = websiteLink => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What't new in JavaScript</Text>
        </View>
        <Image
        source={{
            uri:'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg'
        }}
        style={styles.cardImage}
        />
        <TouchableOpacity
            onPress={() => openWeb('https://www.pdfen.com/merge/merge-word-to-pdf-pdfa')}
        >
            <Text>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffcc00',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    overflow: 'hidden',
    borderRadius: 5,
  },
  elevated: {
    // elevation:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
  },
  headingContainer:{
    padding:15,
    // backgroundColor:'yellow'
  },
  headerText:{
    fontWeight:'900',
    fontSize:24
  },
  cardImage:{
   height:100, 
    width:400
  }
});
