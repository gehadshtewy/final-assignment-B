import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,Image } from "react-native";
import axios from 'axios';
import AppStyle from "./AppStyle";
import AppColors from "./AppColors";
import { Avatar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Products from '../screens/store/products.js';

const CategoryList = (props) => {
    return (
        <View style={AppStyle.listcart}>
              <View style={AppStyle.new_cart}>
                 {
                    props.datacaty && (
                        <>
                          <Avatar.Image source={{uri:props.datacaty.categoryLogo}} size={100} />
                          <Text style={AppStyle.text_price}>{props.datacaty.categoryName}</Text>
                        </>
                    )
                 }
                   <TouchableOpacity style={[AppStyle.btn,{width:'100%',height:40,paddingHorizontal:20}]} onPress={() => {props.navigation.navigate('Products')}}>
                             <Text style={AppStyle.btn_text}>GO</Text>
                          </TouchableOpacity>
              </View>

        </View>
    );
  }; 
  
  export default CategoryList;







