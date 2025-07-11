
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import JustDialScreen from './screens/JustDialScreen';
import IndiaMartScreen from './screens/IndiaMartScreen';
import OLXScreen from './screens/OLXScreen';
import ChatbotScreen from './screens/ChatbotScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#6200ee' },
          tabBarActiveTintColor: '#fff',
        }}
      >
        <Tab.Screen name="JustDial" component={JustDialScreen} />
        <Tab.Screen name="IndiaMart" component={IndiaMartScreen} />
        <Tab.Screen name="OLX" component={OLXScreen} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
