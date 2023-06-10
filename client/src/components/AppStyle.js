import { StyleSheet } from "react-native"
import AppColors from './AppColors.js';
import { shadow } from "react-native-paper";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:AppColors.gray_10,
        width:'100%'
    },
    title:{
        color:AppColors.green,
        fontSize:25,
        fontFamily: 'RobotoSlab-Medium'
    },
    btn: {
        width:'100%',backgroundColor:AppColors.green, height:50,borderRadius:30,
        alignItems:'center', justifyContent:'center',shadowColor:AppColors.black,
        shadowOffset:{width:2, height:2},shadowOpacity:3.70,shadowRadius:6,
        elevation:4,marginBottom:15
    },
    btn_text: {
        color:AppColors.white,
        fontSize:18,
        fontFamily: 'RobotoSlab-Medium'
    },
    input:{
        width:'100%', height:60,backgroundColor:AppColors.green,
        marginTop:12,borderRadius:30,fontFamily:'RobotoSlab-Regular',
        fontSize:20,
        paddingHorizontal:20

    },
    listcart:{
        flex:1,backgroundColor: '#f2f2f2',
        paddingHorizontal:10,paddingTop:20
    },
    cart:{
        width:'100%',
        height:170,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        borderRadius:12,
        marginBottom:10
    },
    left_sied:{
        width:'40%',
        alignItems:'flex-start',justifyContent:'flex-start',marginTop:10,marginRight:20
    },
    image:{
        width:100, height:100
    },
    product_name:{
        fontWeight:'700',  fontSize:16, marginTop:2, textAlign:'center',marginRight:5
    },
    price_con:{
        width:'40%',marginTop:10,
    alignItems:'center',justifyContent:'center'
    },
    pricety:{
        fontWeight:'600',  fontSize:20
    },
    text_price:{
        fontWeight:'600',  fontSize:20
    },
    icon:{
        alignItems:'flex-end',justifyContent:'flex-end',marginTop:90,flexWrap:'wrap',
        
    },
    iconin:{
        marginBottom:15
    },
    new_cart:{
        width:'100%',
        height:200,
        backgroundColor:'#ffffff',
        borderRadius:12,
    },
})