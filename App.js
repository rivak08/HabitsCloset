import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import logo from '/Users/Riva_Kajangu/code-workstation/HabitsCloset/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Homescreen from './Screens/Homescreen';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Find Your Next Guest</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
  <View style={styles.container}>
        <Homescreen/>
        <StatusBar style="auto"/>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 299,
    height: 192,
    marginBottom: 60,
    padding: 50,
  },
  title: { //to remove login above Email box
    fontSize: 24,
    marginBottom: 80,
  }, 
  input: {
    width: '80%',
    height: 40,
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    width: '80%',
    padding: 12,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform the search and update the results here

    // Example data for demonstration purposes
    setResults([
      { id: 1, name: 'Speaker 1', topics: ['Topic 1', 'Topic 2'] },
      { id: 2, name: 'Speaker 2', topics: ['Topic 2', 'Topic 3'] },
      { id: 3, name: 'Speaker 3', topics: ['Topic 1', 'Topic 3'] },
    ]);
  };

  return (
    <View>
      <TextInput
        placeholder="Search by topics"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.topics.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const LoginScreen = ({ navigation }) => {
  // ...
};


export default App;

