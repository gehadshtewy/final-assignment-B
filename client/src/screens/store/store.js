import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Alert,FlatList,Image } from "react-native";
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";
import CategoryList from "../../components/categorylist";
import { Avatar } from "react-native-paper";

const Store = (props) => {

    const [CategoryArray,setCategoryArray] = useState([]);
    useEffect(() => {
        getAllCategory();
    },[]);

    const getAllCategory =async () => {
        const api = "http://10.0.0.15:3002/api/products/get_all_categories";
        try {
            const response = await axios.get(api);
            setCategoryArray(response.data.message);
        } 
        catch (error) {
           console.log(error.message); 
        }
    }
      //const datacaty = CategoryArray;
      //console.log(datacaty);
    return(
        <View style={AppStyle.container} >
            <Text>Store screen</Text>
            {
              CategoryArray && (
                CategoryArray.map((record) => (
                    <View key={record.id} style={[AppStyle.listcart,{width:'50%',flexDirection:'row'}]}>
                        <View style={AppStyle.new_cart}>
                            <Avatar.Image source={{uri:record.categoryLogo}} size={80} />
                            <Text style={[AppStyle.text_price,{marginLeft:5}]}>{record.categoryName}</Text>
                            <TouchableOpacity style={[AppStyle.btn,{width:'100%',height:40,paddingHorizontal:20}]} onPress={() => {props.navigation.navigate('Products')}}>
                             <Text style={AppStyle.btn_text}>GO</Text>
                            </TouchableOpacity>
                       </View>
                    </View>
                ))
              )
            }
            
           {/*
           <FlatList 
                data={datacaty}
                keyExtractor={item => item.id}
                renderItem={itemRow => <CategoryList datacaty={itemRow.item} />}
           />
             
            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('Products')}}>
                <Text style={AppStyle.btn_text}>GO TO CARS</Text>
            </TouchableOpacity> */}
            {/*
            <TouchableOpacity style={AppStyle.btn}>
                <Text style={AppStyle.btn_text}>GO TO CLOTHES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={AppStyle.btn}>
                <Text style={AppStyle.btn_text}>GO TO MOBILES</Text>
            </TouchableOpacity>
*/} 
            <TouchableOpacity style={[AppStyle.btn,{width:100,borderRadius:25,marginTop:20}]} onPress={() => {props.navigation.navigate('AddCategory')}}>
                <Text style={AppStyle.btn_text}>Add<MaterialCommunityIcons name="plus-circle-outline" color={AppColors.white} size={28} /></Text>
            </TouchableOpacity>
        </View>
    )
}
/*
export const screenOptions = (navData) => {
    return {
        headerTitle: 'CATEGOTIES',
        headerRight: () => (
           <MaterialCommunityIcons
            onPress={() => {Alert.alert('Hello')}}
            name="plus-circle-outline"
            color={AppColors.green}
            size={28}
           />
        )
    }
}*/
  

export default Store;