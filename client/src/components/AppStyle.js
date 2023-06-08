import { StyleSheet } from "react-native"
import AppColors from './AppColors.js';

export default StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:AppColors.gray_10
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
})