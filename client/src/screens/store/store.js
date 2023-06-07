import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppStyle from "../../components/AppStyle";
const Store = (props) => {
    return(
        <View style={AppStyle.container} >
            <Text>Store screen</Text>

            <TouchableOpacity style={AppStyle.btn}>
                <Text style={AppStyle.btn_text}>Go TO SUB-CATEGORIES</Text>
            </TouchableOpacity>
        </View>
    )//2:38
}
  

export default Store;