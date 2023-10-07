import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Home } from './components/Home';
import { Search } from './components/Search';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Play } from './components/Play';
import { User } from './components/User';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator detachInactiveScreens screenOptions={{ headerShown: false, }}>
        <Tab.Screen name="Home" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='home' size={30} /> }, tabBarShowLabel: false }} component={Home} />
        <Tab.Screen name="Search" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='search' size={30} /> }, tabBarShowLabel: false }} component={Search} />
        <Tab.Screen name="Play" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='play' size={30} /> }, tabBarShowLabel: false }} component={Play} />
        <Tab.Screen name="User" options={{ tabBarIcon: ({ color, size }) => { return <Icon name='user' size={30} /> }, tabBarShowLabel: false }} component={User} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}


