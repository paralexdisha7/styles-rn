import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Fancy cards</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
          // resizeMode='contain'
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Abstract</Text>
          <Text style={styles.cardLabel}>Lorem, ipsum.</Text>
          <Text style={styles.cardDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            consequatur?
          </Text>
          <Text style={styles.footer}> praesentium doloribus?</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#a2a2a29f',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    overflow:'hidden',
    borderRadius:5
  },
  elevated: {
    // elevation:1,
    shadowColor:'#000',
    shadowOffset:{
        width:2,
        height:2
    },
    shadowOpacity:0.5
  },
  cardImage: {
    height: 180,
    width: 500,
  },
  cardBody: {
    flex: 1,
    padding:8,
  },
  cardTitle: {
    fontSize:30,
    color:'#000',
    paddingVertical:4
  },
  cardLabel: {},
  cardDesc: {},
  footer: {},
});
