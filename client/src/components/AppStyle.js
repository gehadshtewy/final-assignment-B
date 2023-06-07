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
        alignItems:'center', justifyContent:'center'//2:44
    },
    btn_text: {},
})