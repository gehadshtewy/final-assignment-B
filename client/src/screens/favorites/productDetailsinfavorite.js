import React, {useState, useEffect} from "react";
import { View, Text,Image} from "react-native";
import AppStyle from "../../components/AppStyle";

const FavoriteDetailsInFavorite = () => {
    return(
        <View style={AppStyle.container}>
            <Text>FavoriteDetailsInFavorite screen</Text>
            <View style={AppStyle.container} >
            <Text>ProductDetails screen</Text>
            <View style={AppStyle.cart}>
               <Image style={AppStyle.image} source={{uri:props.route.params.productImage}} />
                    <View>
                    <Text style={AppStyle.product_name}>{props.route.params.productName}</Text>
                    <Text style={AppStyle.pricety}>Price:{props.route.params.productPrice}</Text>
                    <Text style={AppStyle.pricety}>discription:{props.route.params.discription}</Text>
                    </View>
            </View>
        </View>
        </View>
    )
}
  

export default FavoriteDetailsInFavorite;