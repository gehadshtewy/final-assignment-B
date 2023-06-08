import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Store = (props) => {
    return(
        <View style={AppStyle.container} >
            <Text>Store screen</Text>
             
            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('subCategory',{car:'CARS'})}}>
                <Text style={AppStyle.btn_text}>GO TO CARS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={AppStyle.btn}>
                <Text style={AppStyle.btn_text}>GO TO CLOTHES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={AppStyle.btn}>
                <Text style={AppStyle.btn_text}>GO TO MOBILES</Text>
            </TouchableOpacity>
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: 'CATEGOTIES',
        headerRight: () => (
           <MaterialCommunityIcons
            onPress={() => {Alert.alert('Hello')}}
            name="plus-circle-outline"
            color={AppColors.green}
            size={28}
           />
        )
    }
}
  

export default Store;