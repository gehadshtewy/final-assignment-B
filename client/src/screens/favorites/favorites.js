import React, {useState, useEffect} from "react";
import { View, Text,FlatList, TouchableOpacity,Image} from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from "axios";
import AppColors from "../../components/AppColors";

const Favorites = (props) => {
    const [producInFavorite,setProducInFavorite] = useState([]);

   useEffect(() => {
    getAllProductsInFavorite();
   },[]);

   const getAllProductsInFavorite =async () => {  
      //const api = "http://10.0.0.15:3002/api/products/get_all_product-in-favorite";
      const api = "http://10.70.0.61:3002/api/products/get_all_product-in-favorite";
       try {
           const response = await axios.get(api);
           setProducInFavorite(response.data.message);
       } 
       catch (error) {
          //console.log(error.message); 
       }
   }
     const datap=producInFavorite;
     console.log(datap);
    return(
        <View style={[AppStyle.container,{marginTop:100}]}>
            <Text style={{fontSize:30,color:AppColors.Byzantium}}>Favorites screen</Text>
            <View style={AppStyle.containerp}>
                <Text style={AppStyle.title}></Text>
                <FlatList 
                    data={datap}
                    keyExtractor={item => item.id}
                    renderItem={itemRow => 
                        <TouchableOpacity style={AppStyle.cart} onPress={e=>{props.navigation.navigate('ProductDetails',itemRow.item.productId)}}>
                            <Image style={AppStyle.image} source={{uri:itemRow.item.productId.productImage}} />
                            <View>
                            <Text style={AppStyle.product_name}>{itemRow.item.productId.productName}</Text>
                            <Text style={AppStyle.pricety}>Price:{itemRow.item.productId.productPrice}</Text>
                            </View>
                        </TouchableOpacity>  
                        }  
                />
            </View>
        </View>
    )
}
  

export default Favorites;