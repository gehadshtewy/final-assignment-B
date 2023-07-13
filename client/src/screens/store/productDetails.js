import React, {useState, useEffect} from "react";
import { View, Text, Image,TouchableOpacity,Alert,FlatList,TextInput,SafeAreaView} from "react-native";
import AppStyle from "../../components/AppStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import AppColors from "../../components/AppColors";
import { NavigationContainer } from "@react-navigation/native";
const ProductDetails = (props) => {
     console.log(props);
    //const [comment,setComment] = useState();
    const [writeComment,setWriteComment] = useState("");
    const [commentArray,setCommentArray] = useState([]);
    const [activeStar, setActiveStar] = useState(-1);
    const producIdInComment = props.route.params;
    const AddProductInFavorite = async () => { 
        //const api = "http://10.0.0.15:3002/api/products/add_new_product-in-favorite";
        const api = "http://10.70.0.61:3002/api/products/add_new_product-in-favorite";
        try {
            const userf = {
                productId: props.route.params
            }
            await axios.post(api, {userf})
            .then(results => {
                console.log(results);
                Alert.alert("Ok,Add in favorite...");
            })
            .catch(error => {
                console.log(error);
            })
        } 
        catch (error) {
           console.log(error.message); 
        }
    }
    ///
    const AddProductInCart = async () => {
        //const api = "http://10.0.0.15:3002/api/products/add_product_in_cart";
        const api = "http://10.70.0.61:3002/api/products/add_product_in_cart";
        try {
            const userr = {
                productId: props.route.params,
            }
            await axios.post(api, {userr})
            .then(resultss => {
                //console.log(resultss);
                Alert.alert("Ok,Add in Cart...");
            })
            .catch(error => {
                //console.log(error);
            })
        } 
        catch (error) {
          //console.log(error.message); 
        }
    }
    ///
    const postwriteComment = async () => {
        //const api = "http://10.0.0.15:3002/api/products/add_new_comment";
        const api = "http://10.70.0.61:3002/api/products/add_new_comment";
        try {
            const userm = {
                productId:props.route.params,
                writeComment:writeComment
            }
            await axios.post(api, {userm})
            .then(resultss => {
                //console.log(resultss);
                Alert.alert("the comment Added");
            })
            .catch(error => {
                //console.log(error);
            })
        } 
        catch (error) {
          //console.log(error.message); 
        }
    }
    //get comment
    useEffect(() => {
        getAllComments();
       },[]);
      
      const getAllComments =async () => {  
        //const api = `http://10.0.0.15:3002/api/products/get_all_comment/${props.route.params._id}`;
        const api = `http://10.70.0.61:3002/api/products/get_all_comment/${props.route.params._id}`;
        try {
            const response = await axios.get(api);
            setCommentArray(response.data.message);
        } 
        catch (error) {
           //console.log(error.message); 
        }
    }

    return(
        <View>
            <View style={AppStyle.imageContainer}>
               <Image style={AppStyle.image10} source={{uri:props.route.params.productImage}} />
             </View>  
                    <View style={AppStyle.infoContainer}>
                        <Text style={AppStyle.name}>{props.route.params.productName}</Text>
                        <Text style={AppStyle.price}>Price:{props.route.params.productPrice}</Text>
                        <Text style={AppStyle.description}>discription:{props.route.params.discription}</Text>

                        <View style={AppStyle.stylebtn}>
                        <TouchableOpacity style={[AppStyle.btn,{width:50,marginRight:10,marginTop:20,backgroundColor:"#f2f2f2"}]} onPress={() => {AddProductInFavorite()}}>
                        <Text style={AppStyle.btn_text}><MaterialIcons name="favorite-border" color={AppColors.red} size={28} /></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[AppStyle.btn,{width:50,marginRight:10,marginTop:20,backgroundColor:"#f2f2f2"}]} onPress={() => {AddProductInCart()}}>
                        <Text style={AppStyle.btn_text}><Fontisto name="shopping-basket-add" color={AppColors.red} size={28} /></Text>
                        </TouchableOpacity>

                        </View>

                        <View>
                            <View style={[AppStyle.inputstyle,{marginBottom:20}]}>
                                <TextInput 
                                   style={AppStyle.inputstyleText}
                                   keyboardType="default"
                                   placeholder="Comment"
                                   value={writeComment}
                                   onChangeText={(e) => {setWriteComment(e)}}
                                />
                                <TouchableOpacity onPress={() => {postwriteComment(),getAllComments()}}>
                                    <Text><MaterialIcons name="add-comment" color={AppColors.green} size={40} /></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:AppColors.gray_20,width:'100%',height:155}}>
                                <FlatList 
                                    data={commentArray}
                                    keyExtractor={item => item.id}
                                    renderItem={itemRow => 
                                        
                                            <Text style={AppStyle.textstyle}>{itemRow.item.writeComment}</Text>
                                        
                                }
                                />
                            </View>
                        </View>
                    </View>
        </View>
    )
}
  

export default ProductDetails;