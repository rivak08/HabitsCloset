//import { StatusBar } from 'expo-status-bar';
//import { Linking, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

//import React, { useState } from 'react';



/*export default function App() {
  return (
    <View style={styles.container}>
      <Text> This WILL work</Text>
      <StatusBar style="auto" />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefbd8',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Courier New",
    fontSize: 50,

  },
});*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login validation here

    // Navigate to the search screen if the login is successful
    navigation.navigate('Search');
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
