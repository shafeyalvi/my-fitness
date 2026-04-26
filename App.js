import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { ExerciseProvider } from './src/context/ExerciseContext';
import HomeScreen from './src/screens/HomeScreen';
import ExerciseDetailScreen from './src/screens/ExerciseDetailScreen';
import AddExerciseScreen from './src/screens/AddExerciseScreen';
import CompletedScreen from './src/screens/CompletedScreen';
import QuotesScreen from './src/screens/QuotesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0f172a',
          borderTopColor: '#1e293b',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
        },
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#475569',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.3,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Completed') {
            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          } else if (route.name === 'Quotes') {
            iconName = focused ? 'sparkles' : 'sparkles-outline';
          } else if (route.name === 'AddExercise') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return (
            <View style={{ position: 'relative' }}>
              <Ionicons name={iconName} size={24} color={color} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Exercises' }}
      />
      <Tab.Screen
        name="AddExercise"
        component={AddExerciseScreen}
        options={{ tabBarLabel: 'Add New' }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{ tabBarLabel: 'Completed' }}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={{ tabBarLabel: 'Motivation' }}
      />
    </Tab.Navigator>
  );
};

// Root Stack Navigator (allows Exercise Detail to be pushed on top of tabs)
const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <ExerciseProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </ExerciseProvider>
  );
}
