import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image,FlatList } from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from 'axios';
import ProductList from "../../components/productlist";
import AppColors from "../../components/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Products = (props) => {
   
    const [productArray,setProductArray] = useState([]);
   
     function renderProduct({item:product}){
        return(
            <ProductList
              {...product}
              onPress={() => {
                 props.navigation.navigate('ProductDetails',{productId:product.id})
              }}
            />
        )
     }
    
    
    useEffect(() => {
        getAllProducts();
    },[]);

    const getAllProducts =async () => {
        const api = "http://10.0.0.15:3002/api/products/get_all_product";
        try {
            const response = await axios.get(api);
            setProductArray(response.data.message);
        } 
        catch (error) {
           console.log(error.message); 
        }
    }
   //console.log(productArray);
   const data1 = productArray;
    console.log(props.data);
    return(
        <View style={AppStyle.container}>
            <Text style={AppStyle.title}></Text>
            <FlatList 
                data={data1}
                keyExtractor={item => item.id}
                renderItem={itemRow => <ProductList data1={itemRow.item} />}
               
           />
            {/*<TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('ProductDetails')}}>
                <Text style={AppStyle.btn_text}>GO TO ProductDetails</Text>
            </TouchableOpacity>*/}

            <TouchableOpacity style={[AppStyle.btn,{width:100,borderRadius:25,marginTop:20}]} onPress={() => {props.navigation.navigate('AddProduct')}}>
                <Text style={AppStyle.btn_text}>Add<MaterialCommunityIcons name="plus-circle-outline" color={AppColors.white} size={28} /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Products;