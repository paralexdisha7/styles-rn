import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Disha 1',
      imageUrl:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      uid: 2,
      name: 'Disha 2',
      imageUrl:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      uid: 3,
      name: 'Disha 3',
      imageUrl:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, imageUrl}) => (
          <View style={styles.userCard} key={uid}>
            <Text style={styles.userName}>{name}</Text>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {
    flex:1,
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'center',
    margin:8,
    gap:20,
    backgroundColor:'#d8c8c8',
    padding:10,
    width:300
  },
  userName: {
    fontWeight:'900',
    fontSize:20
  },
  userImage: {
    height:50,
    width:50,
    borderRadius:100
  },
});
