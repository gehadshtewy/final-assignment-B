import React, {useState, useEffect} from "react";
import { View, Text,FlatList,Image,TouchableOpacity,TextInput} from "react-native";
import AppStyle from "../../components/AppStyle";
import axios from "axios";
import AppColors from "../../components/AppColors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { Avatar } from "react-native-paper";
const Shopping = (props) => {
  
    const [producInCart,setProducInCart] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    console.log(producInCart);

   useEffect(() => {
    getAllProductsInCart();
   },[]);

   useEffect(() => {
    sumTotalPrice();
   },[producInCart]);

   const getAllProductsInCart =async () => {
       //const api = "http://10.0.0.15:3002/api/products/get_all_product_in_cart";
       const api = "http://10.70.0.61:3002/api/products/get_all_product_in_cart";
       try {
           const response = await axios.get(api);
           const updatProducts = response.data.message.map(product => ({
            ...product,
            quantity: 0
           }));
           setProducInCart(updatProducts);
       } 
       catch (error) {
          //console.log(error.message); 
       }
   }
   const addone = async (id) => {
          setProducInCart(prevState => {
            return prevState.map(product => {
                if(product._id === id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    };
                }
                return product;
            });
          });
   }

   const minusOne = async (id) => {
    setProducInCart(prevState => {
        return prevState.map(product => {
            if(product._id === id && product.quantity > 0) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                };
            }
            return product;
        });
      });
   }

   const sumTotalPrice = () => {
    let totalPrice = 0;
    producInCart.forEach(product => {
        totalPrice += product.productId.productPrice * product.quantity;
    });
    setTotalPrice(totalPrice);
   }
     const datar=producInCart;
     
      
        

    return(
           <>
        <View style={AppStyle.contenerproduct}>
            
            <View style={AppStyle.contenerproduct}>
                <FlatList 
                    data={datar}
                    keyExtractor={item => item.id}
                    renderItem={itemRow => 
                        <>
                        <View style={{backgroundColor:AppColors.white,height:130,marginBottom:15}}>
                         <View style={AppStyle.imageContainershop}>    
                            <Image style={AppStyle.image1} source={{ uri:itemRow.item.productId.productImage }} />
                            <View style={{marginLeft:10}}>
                               <Text style={AppStyle.name}>{itemRow.item.productId.productName} <TouchableOpacity onPress={() => {deleteProduct(itemRow.item._id)}}><AntDesign name="delete" color={AppColors.red} size={25} /></TouchableOpacity></Text>
                                 <Text style={AppStyle.price}>Price:{itemRow.item.productId.productPrice} ₪</Text>
                                  
                                    <View style={{flexDirection:'row'}}>
                                            <TouchableOpacity style={{marginTop:4}} onPress={() => {minusOne(itemRow.item._id)}}><Foundation name="minus" color={AppColors.red} size={18} /></TouchableOpacity>
                                                <TextInput 
                                                    style={AppStyle.textpriceshopping}
                                                    keyboardType="default"
                                                    placeholder="1"
                                                    value={itemRow.item.quantity.toString()}
                                                    onChangeText={ () => {}}
                                                />
                                            <TouchableOpacity style={{marginTop:4}} onPress={() => {addone(itemRow.item._id)}}><Foundation name="plus" color={AppColors.red} size={18} /></TouchableOpacity>
                                            <Text style={{marginLeft:10,fontSize:18}}>price :{itemRow.item.productId.productPrice * itemRow.item.quantity} ₪</Text>

                                        
                                    </View>
                            </View>
                          </View>  
                        </View>    
                            </>
                                }  
                />        
            </View>
            
        </View>
             <View style={AppStyle.totlalPrice}>
                <Text style={AppStyle.totlalPriceText}>TotalPrice : {totalPrice} ₪</Text>
                
                
              </View>
        </> 
         
    )
}

                     
export default Shopping;