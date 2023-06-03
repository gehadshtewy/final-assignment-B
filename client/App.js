import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { TabsNavigator } from "./src/navigation/index.js";
export default function App() {
  return (
    <NavigationContainer>
       <TabsNavigator />
    </NavigationContainer>
  );
}


