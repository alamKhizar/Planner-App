import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'; // Fixed import
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import Entypo from '@expo/vector-icons/Entypo';
import {s} from 'react-native-wind'
import './wind.config.ts'
import HomeScreen from './Components/Screens/HomeScreen.js';
import SearchScreen from './Components/Screens/SearchScreen.js';
import AddScreen from './Components/Screens/AddScreen.js';
import FavoritesScreen from './Components/Screens/FavoritesScreen.js';
import ProfileScreen from './Components/Screens/ProfileScreen.js';

// Import the necessary font files
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator(); // Initialize the Tab Navigator




export default function App() {
  const [fontLoaded] = useFonts({
    'Poppins-Medium': require('./Fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./Fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Light': require('./Fonts/Poppins/Poppins-Light.ttf'),
    'Syncopate-Bold': require('./Fonts/Syncopate/Syncopate-Bold.ttf'),
    'Syne-ExtraBold': require('./Fonts/Syne/static/Syne-ExtraBold.ttf'),
    'Syne-Bold': require('./Fonts/Syne/static/Syne-Bold.ttf'),
    'Dm-Sans': require('./Fonts/DM_Sans/static/DMSans-Bold.ttf'),
    'Dm-SansMedium': require('./Fonts/DM_Sans/static/DMSans-Medium.ttf'),
  });

  if (!fontLoaded) {
    return null; // Optionally, you could show a loading spinner here
  }

  return (
    <NavigationContainer 
     
    >
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#f2f2f2', // Tab bar background color
            paddingLeft: 48,
            paddingRight: 48,
            shadowOpacity: 0, // Remove shadow
            elevation: 0, // Remove elevation (Android shadow)
            borderTopWidth: 0, // Remove border at the top
            borderBottomWidth: 0, // Remove border at the bottom
            position: 'absolute', // Position the tab bar at the bottom
            left: 0,
            right: 0,
            bottom: 35, // Position it at the bottom of the screen

          },
          tabBarActiveTintColor: '#F85353',
          tabBarInactiveTintColor: '#adadad',
          tabBarLabel: () => null, // Hide titles for all screens
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
             
              <Entypo name="home"  size={32} color={color} />

            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
      
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="add" size={40} color={color} />
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={32} color={color} />
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={32} color={color} />
            ),
            headerShown: false, // Hide the header (top bar) for this screen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
