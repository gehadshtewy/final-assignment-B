import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import AppStyle from "../../components/AppStyle";
const SubCategory = (props) => {
    return(
        <View style={AppStyle.container} >
            
            
                <TouchableOpacity style={[AppStyle.btn,{width:200,height:200}]} onPress={() => {props.navigation.navigate('Products')}}>
                    <Text style={AppStyle.btn_text}>GO TO CARS PRODUCT</Text>
                </TouchableOpacity>

        </View>
    )
}
/*
export const screenOptions = (navData) => {
    return {
        headerTitle: navData.route.params.car
    }
}*/
  
export default SubCategory;