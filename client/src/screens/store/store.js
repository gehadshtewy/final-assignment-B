import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Alert,FlatList,Image,Button } from "react-native";
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";
import CategoryList from "../../components/categorylist";
import { Avatar } from "react-native-paper";
import { auth } from "../../utilis/Firebase-Config";

const Store = (props) => {
 
    const fierbaseUser= auth.currentUser;
    const [CategoryArray,setCategoryArray] = useState([]);
    const [dataUser,setDataUser] = useState(null);
    useEffect(() => {
        getAllCategory();
        getUserData();
    },[]);
    
    const getUserData = async() => {
        //const api = "http://10.0.0.15:3002/api/products/getMyDetails";
        const api = "http://10.70.0.61:3002/api/products/getMyDetails";
        try {
            const user = {uid: auth.currentUser.uid};
            const response = await axios.post(api, {user});
            setDataUser(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategory =async () => { 
        //const api = "http://10.0.0.15:3002/api/products/get_all_categories";
        const api = "http://10.70.0.61:3002/api/products/get_all_categories";
        try {
            const response = await axios.get(api);
            setCategoryArray(response.data.message);
        } 
        catch (error) {
           console.log(error.message); 
        }
    }
      //const datacaty = CategoryArray;
     // console.log(CategoryArray);
    return(
        <View style={AppStyle.containerp} >
            {
                dataUser && (
                    <>
                    <View style={[AppStyle.viewAvatarUser,{flexDirection:'row'}]}>
                        <Avatar.Image source={{uri: dataUser.avatar}} size={70} style={{marginRight:10}} />
                        <Text>{dataUser.firstName +' ' + dataUser.lastName}</Text>
                        <TouchableOpacity style={[AppStyle.btn,{width:50,borderRadius:25,marginTop:20,marginLeft:120}]} onPress={() => {props.navigation.navigate('AddCategory')}}>
                            <Text style={AppStyle.btn_text}><MaterialCommunityIcons name="plus-thick" color={AppColors.white} size={28} /></Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )
            }
            <FlatList 
              data={CategoryArray}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={itemRow => 
                <View style={[AppStyle.listcart,{width:150,flexDirection:'row'}]}>
                <View style={AppStyle.new_cart}>
                    <Avatar.Image source={{uri:itemRow.item.categoryLogo}} size={80} />
                    <Text style={[AppStyle.text_price,{marginLeft:5}]}>{itemRow.item.categoryName}</Text>
                    <TouchableOpacity style={[AppStyle.btn,{width:'60%',height:40,paddingHorizontal:20}]} onPress={() => {props.navigation.navigate('Products',itemRow.item)}}>
                     <Text style={AppStyle.btn_text}>GO</Text>
                    </TouchableOpacity>
               </View>
            </View>
                }
                
            />     
            
            
            
        </View>
        
    )
}

export default Store;