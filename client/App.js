import React,{useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { TabsNavigator } from "./src/navigation/index.js";
import { DefaultTheme, Provider } from 'react-native-paper';
import AppColors from './src/components/AppColors.js';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

 const theme = {
  ...DefaultTheme,
  colors: {
   ...DefaultTheme.colors,
   secondaryContainer: AppColors.black
  }
 } 

 SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsloaded] = useFonts({
    'RobotoSlab-Regular': require('./assets/font/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Medium': require('./assets/font/RobotoSlab-Medium.ttf'),
    'RobotoSlab-Bold': require('./assets/font/RobotoSlab-Bold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if(fontsloaded)
    await SplashScreen.hideAsync();
  },[fontsloaded])

  if(!fontsloaded){
    return null;
  }

  return (
    <Provider theme={theme}>
      <SafeAreaView style={{flex:1}} onLayout={onLayoutRootView}>
       <NavigationContainer>
        <TabsNavigator />
       </NavigationContainer>
     </SafeAreaView>
    </Provider>
  );
}


