import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,Image } from "react-native";
import axios from 'axios';
import AppStyle from "./AppStyle";
import AppColors from "./AppColors";
import { Avatar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


const ProductList = (props,{onPress}) => {
    return (
           <TouchableOpacity style={AppStyle.cart} onPress={onPress}>
            <Image style={AppStyle.image} source={{uri:props.data1.productImage}} />
            <View>
              <Text style={AppStyle.product_name}>{props.data1.productName}</Text>
              <Text style={AppStyle.pricety}>Price:{props.data1.productPrice}</Text>
              
            </View>
           </TouchableOpacity>

              );
                };

        {/*
        <View style={AppStyle.listcart}>
              <View style={AppStyle.cart}>
                  <View style={AppStyle.left_sied}>
                    {
                      props.data1 && (
                                <>
                                <Image style={AppStyle.image} source={{uri: props.data1.productImage}} />
                                <Text style={AppStyle.product_name}>{props.data1.productName}</Text>
                                </>
                            )
                    }
                  </View>
                  <View style={AppStyle.price_con}>
                    {
                      props.data1 && (
                                <>
                                <Text style={AppStyle.text_price}>Price:</Text>
                                  <Text style={AppStyle.pricety}>{props.data1.productPrice}₪</Text>
                                </>
                            )
                    }
                  </View>
                <View style={AppStyle.icon}>
                  <Text style={AppStyle.iconin}><Fontisto name="shopping-basket-add" color={AppColors.red} size={28}  /></Text>
                  <Text><MaterialIcons name="favorite" color={AppColors.red} size={28} /></Text>
                </View>
                  </View>.....*/}



          {/*
          <View style={AppStyle.cart}>
            <View style={AppStyle.left_sied}>
                  {
                  data && (
                              <>
                              <Image style={AppStyle.image} source={{uri:data[0].productImage}} />
                              <Text style={AppStyle.product_name}>{data[0].productName}</Text>
                              </>
                          )
                  }
              </View>
              <View style={AppStyle.price_con}>
              {
                data && (
                          <>
                          <Text style={AppStyle.text_price}>Price:</Text>
                            <Text style={AppStyle.pricety}>{data[0].productPrice}₪</Text>
                          </>
                      )
              }
              </View>
              <View style={AppStyle.icon}>
                <Text style={AppStyle.iconin}><Fontisto name="shopping-basket-add" color={AppColors.red} size={28} /></Text>
                <Text><MaterialIcons name="favorite" color={AppColors.red} size={28} /></Text>
              </View>
          </View>
          
        </View>*/}
    
  
  export default ProductList;