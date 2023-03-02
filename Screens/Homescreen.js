import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Podcast from '../Components/Podcasts';

const Homescreen = () => {
return(<SafeAreaView style={styles.container}>
   <Podcast/>
</SafeAreaView>)

}

export default Homescreen;

const styles = StyleSheet.create({
container:{


}


})