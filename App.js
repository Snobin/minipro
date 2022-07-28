import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Attendance from './screens/Attendance';
import S1 from './screens/S1';
import S2 from './screens/S2';
import S3 from './screens/S3';
import S4 from './screens/S4';
import S5 from './screens/S5';
import S6 from './screens/S6';
//import fees from './screens/fees';
import Noduees from './screens/Noduees';
import { createDrawerNavigator } from '@react-navigation/drawer';
import{createStackNavigator}from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import ECE from './screens/ECE';
import EEE from './screens/EEE';
import CSE from './screens/CSE';
import ME from './screens/ME';
import notes from './screens/notes';
//import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;

const Stack = createNativeStackNavigator();
const stack=createStackNavigator();
const drawer=createDrawerNavigator();
console.log('accepted')

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" options={{title:"Home Screen" ,headerTitleAlign:"center"}} component={HomeScreen} />
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="S3" component={S3} />
        <Stack.Screen name="S4" component={S4} />
        <Stack.Screen name="S5" component={S5} />
        <Stack.Screen name="S6" component={S6} />
        <Stack.Screen name="ECE" component={ECE} />
        <Stack.Screen name="EEE" component={EEE} />
        <Stack.Screen name="CSE" component={CSE} />
        <Stack.Screen name="ME" component={ME} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Noduees" component={Noduees} />
        <Stack.Screen name="notes" component={notes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
