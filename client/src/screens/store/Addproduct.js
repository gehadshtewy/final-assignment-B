import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput,Alert } from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from 'axios';


const AddProduct = (props) => {

    const [productName,setProductName] = useState();
    const [productPrice,setProductPrice] = useState();
    const [categoryId,setCategoryId] = useState();
    const [productImage,setProductImage] = useState();
    const [discription,setDiscription] = useState();

    const AddProductInStore = async () => {
        const api = "http://10.0.0.15:3002/api/products/add_new_product";
        try {
            const user = {
                productName:productName,
                productImage:productImage,
                productPrice:productPrice,
                categoryId:categoryId,
                discription:discription
            }
            await axios.post(api, {user})
            .then(results => {
                console.log(results);
                Alert.alert("Ok,");
            })
            .catch(error => {
                console.log(error);
            })
        } 
        catch (error) {
           console.log(error.message); 
        }
    }
     
    return(
        <View style={AppStyle.container} >
            <Text>Add product</Text>
            
            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Product Name"
              value={productName}
              onChangeText={(e) => {setProductName(e)}}
            />

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Product Price"
              value={productPrice}
              onChangeText={(e) => {setProductPrice(e)}}
            />

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Category id"
              value={categoryId}
              onChangeText={(e) => {setCategoryId(e)}}
            />

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Product Image"
              value={productImage}
              onChangeText={(e) => {setProductImage(e)}}
            />

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="discription"
              value={discription}
              onChangeText={(e) => {setDiscription(e)}}
            />   

            <TouchableOpacity style={[AppStyle.btn, {marginTop:10}]} onPress={() => {AddProductInStore()}}>
                <Text style={AppStyle.btn_text}>Add Product</Text>
            </TouchableOpacity>
            
        </View>
    )
}
  

export default AddProduct;