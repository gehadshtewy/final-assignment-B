import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image,FlatList } from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from 'axios';
import ProductList from "../../components/productlist";
import AppColors from "../../components/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Products = (props) => {
    console.log(props.route.params._id);
    const [productArray,setProductArray] = useState([]);
    
    useEffect(() => {
        //getAllProducts();
        getAllProductIncategoryId();
    },[]);

    const getAllProductIncategoryId =async () => {   
        //const api = `http://10.0.0.15:3002/api/products//get_product_by_id2/${props.route.params._id}`;
        const api = `http://10.70.0.61:3002/api/products//get_product_by_id2/${props.route.params._id}`;
        try {
            const response = await axios.get(api);
            setProductArray(response.data.message);
        } catch (error) {
            
        }
    }
    
   const data1 = productArray;
    console.log(data1);
    return(
        <View style={[AppStyle.containerp,{alignItems:'center',justifyContent:'center'}]}>
            <Text style={AppStyle.title}></Text>
            <FlatList 
                data={data1}
                keyExtractor={item => item.id}
                renderItem={itemRow => 
                    <TouchableOpacity style={AppStyle.cart} onPress={e=>{props.navigation.navigate('ProductDetails',itemRow.item)}}>
                    <Image style={AppStyle.image} source={{uri:itemRow.item.productImage}} />
                    <View>
                    <Text style={AppStyle.product_name}>{itemRow.item.productName}</Text>
                    <Text style={AppStyle.pricety}>Price:{itemRow.item.productPrice} ₪</Text>
                    </View>
                    </TouchableOpacity>  
                    }  
           />

            <TouchableOpacity style={[AppStyle.btn,{width:50,borderRadius:25,marginTop:20}]} onPress={() => {props.navigation.navigate('AddProduct')}}>
                <Text style={AppStyle.btn_text}><MaterialCommunityIcons name="plus-thick" color={AppColors.white} size={28} /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Products;