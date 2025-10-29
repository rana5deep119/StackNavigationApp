// import React from 'react';
import React, { useState } from 'react';
import { View, Text,  Image, StyleSheet, Pressable ,  FlatList, TouchableOpacity,  ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  const [selected, setSelected] = useState('Wed');

  const dates = [
    { day: 'Sun', date: 22 },
    { day: 'Mon', date: 23 },
    { day: 'Tue', date: 24 },
    { day: 'Wed', date: 25 },
    { day: 'Thu', date: 26 },
    { day: 'Fri', date: 27 },
    { day: 'Sat', date: 28 },
  ];
  return (
    <View >
      
       <View style={styles.header}>
        <Pressable onPress={() =>navigation.navigate('Profile')}>
        <View style={styles.circle}>
          <Image style={{width:"100%", height:"100%",}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgCmC5qEFbPRJ8u8y-1ue4kyZI5OmR9tCbQ&s"}}/>
          </View>
          </Pressable>
        <Text>Hello Sandra</Text>
        <EvilIcons name="search" size={24} color="black" />
       </View>

      <View style={styles.imagecont}>
        <Image style={{width:'100%', height:"100%"}}
         source={{uri:'https://motionify.co/wp-content/uploads/2024/01/ui-ux-banner.jpg'}}/>
      </View>
      
        <View style={styles.container}>
      <FlatList
        horizontal
        data={dates}
        keyExtractor={(item) => item.day}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => {
          const isSelected = item.day === selected;
          return (
            <TouchableOpacity
              onPress={() => setSelected(item.day)}
              style={[styles.item, isSelected && styles.selectedItem]}
            >
   
              <View
      style={[ styles.dot,
                  { backgroundColor: isSelected ? '#fff' : '#000' },
                ]}  /> 
      <Text style={[ styles.day,
                  { color: isSelected ? '#fff' : '#333' }, ]}
              >{item.day}
    </Text>
      <Text
style={[styles.date,{ color: isSelected ? '#fff' : '#333' }, ]}>
  {item.date}
              </Text>
    </TouchableOpacity>
          );
        }}
      />
    </View>
      
 <View style={styles.mainContainer}>
      <Text style={styles.heading}>Your plan</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, { backgroundColor: '#fbbf24' }]}>
          <Text style={styles.level}>Medium</Text>
          <Text style={styles.title}>Yoga Group</Text>
          <Text style={styles.details}>25 Nov.</Text>
          <Text style={styles.details}>14:00–15:00</Text>
          <Text style={styles.details}>A5 room</Text>
 <View style={styles.trainerRow}>
   <Image source={{ uri: 'https://i.pravatar.cc/100?img=5' }}
              style={styles.trainerImage}
            />
   <View>
   <Text style={styles.trainerLabel}>Trainer</Text>
    <Text style={styles.trainerName}>Tiffany Way</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: '#93c5fd' }]}>
          <Text style={styles.level}>Light</Text>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.details}>28 Nov.</Text>
          <Text style={styles.details}>18:00–19:30</Text>
          <Text style={styles.details}>A2 room</Text>

          <View style={styles.iconRow}>
            <Ionicons name="logo-instagram" size={22} color="#fff" />
            <Ionicons name="logo-youtube" size={22} color="#fff" />
            <Ionicons name="logo-twitter" size={22} color="#fff" />
          </View>
        </View>
      </ScrollView>
    </View>


      
    </View>
  );
}

const styles= StyleSheet.create({
  imagecont:{
     width: "95%",
     borderRadius: 20,
     overflow: 'hidden', 
     height:200,
     marginLeft:'auto',
     marginRight:'auto',  
  },
  header:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },
  circle: {
  width: 40,
  height: 40,
  borderRadius: 20,
  overflow: 'hidden', 

},
 container: {
    marginTop: 10,
  },
 item:{
    width: 55,
    height: 100,
    borderRadius: 25,
    backgroundColor: '#f3f3f3',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItem:{
    backgroundColor: '#000',
  },
  day:{
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  date:{
    fontSize: 16,
    fontWeight: '700',
    marginTop: 3,
  },
  dot:{
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: 4,
  },
   mainContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 15,
  },
  card: {
    width: 180,
    borderRadius: 20,
    padding: 15,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  level: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginVertical: 4,
  },
  details: {
    fontSize: 13,
    color: '#333',
  },
  trainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  trainerImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  trainerLabel: {
    fontSize: 12,
    color: '#333',
  },
  trainerName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#a78bfa',
    borderRadius: 12,
    marginTop: 20,
    paddingVertical: 8,
  },
})
