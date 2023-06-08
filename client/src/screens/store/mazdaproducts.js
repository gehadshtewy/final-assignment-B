import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppStyle from "../../components/AppStyle";
const MazdaProducts = (props) => {
    return(
        <View style={AppStyle.container} >
            <Text>Products screen</Text>
            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('ProductDetails')}}>
                <Text style={AppStyle.btn_text}>GO TO ProductDetails</Text>
            </TouchableOpacity>
        </View>
    )
}
  

export default MazdaProducts;