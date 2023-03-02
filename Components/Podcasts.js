import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const Podcast = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* Image */}
      <Image source={{
        uri: "https://unsplash.com/photos/OKLqGsCT8qs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2NDAwOTA4&force=true"
      }}
        style={styles.Image}
      />
      <View style={styles.info}>
        <Text style={styles.heading}>Speak with: <Text style={styles.author}>The Unknown Podcast</Text></Text>
      </View>

      {/* Title*/}
      <Text style={styles.title}>Speak with The Unknown</Text>

      {/* Description*/}
      <Text style={styles.description}>The only podcast elevating the unknown heroes we should know about</Text>
    </SafeAreaView>
  );
};

export default Podcast;

const styles = StyleSheet.create({
  container: {
    width: 381,
    height: "95%",
    alignSelf: "center",
    justifyContent: "flex-start"
  },
  Image: {
    height: 281,
    width: "100%"
  },
title:{
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10
},
description:{
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10
}
  
});
