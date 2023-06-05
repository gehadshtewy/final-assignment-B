import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { TabsNavigator } from "./src/navigation/index.js";
import { DefaultTheme, Provider } from 'react-native-paper';
import AppColors from './src/components/AppColors.js';

 const theme = {
  ...DefaultTheme,
  colors: {
   ...DefaultTheme.colors,
   secondaryContainer: AppColors.black
  }
 } 

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
       <TabsNavigator />
     </NavigationContainer>
    </Provider>
  );
}


