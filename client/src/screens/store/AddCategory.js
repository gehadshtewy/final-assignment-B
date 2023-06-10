import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from 'axios';


const AddCategory = (props) => {

    const [categoryName,setCategoryName]= useState("");
    const [categoryLogo,setCategoryLogo] = useState("");

    const AddCategoryInStore = async () => {
        const api = "http://10.0.0.15:3002/api/products/add_new_category";
        try {
            const userc = {
                categoryName: categoryName,
                categoryLogo: categoryLogo
            }
            await axios.post(api, {userc})
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
            <Text>AddCategory screen</Text>

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Category Name"
              value={categoryName}
              onChangeText={(e) => {setCategoryName(e)}}
            />

            <TextInput 
              style={AppStyle.input}
              keyboardType="default"
              placeholder="Category Logo"
              value={categoryLogo}
              onChangeText={(e) => {setCategoryLogo(e)}}
            />

            <TouchableOpacity style={[AppStyle.btn, {marginTop:10}]} onPress={() => {AddCategoryInStore()}}>
                <Text style={AppStyle.btn_text}>Add Category</Text>
            </TouchableOpacity>
        </View>
    )
}
  

export default AddCategory;