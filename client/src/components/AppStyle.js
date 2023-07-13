import { StyleSheet } from "react-native"
import AppColors from './AppColors.js';
import { shadow } from "react-native-paper";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:30,marginBottom:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:AppColors.gray_10
    },
    containerp:{
        flex:1
    },
    containershopping:{
        width:'100%',display:'flex',alignItems:'center',justifyContent:'center',
        height:650,backgroundColor:AppColors.gray_20,marginTop:50
    },
    contenerproduct:{
        width:'100%',backgroundColor:AppColors.Blue_Gray,marginTop:20,flex:1
    },
    container10:{
        flex:1,
        padding:10,
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
        width:'100%',backgroundColor: '#f2f2f2',
        paddingHorizontal:20,paddingTop:20,marginLeft:20,marginBottom:20
        },
    cart:{
        width:'100%',
        height:120,
        flexDirection:'row',
        alignItems:'center',
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
        width:200, height:100,resizeMode:'stretch'
    },
    product_name:{
        fontWeight:'700',  fontSize:16, marginTop:2, textAlign:'center',marginRight:5
    },
    price_con:{
        width:'40%',marginTop:10,
    alignItems:'center',justifyContent:'center'
    },
    pricety:{
        fontWeight:'600',  fontSize:20,marginLeft:10
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
        width:'150%',
        alignItems:'center',
        justifyContent:'center',
        height:160,
        backgroundColor:AppColors.gray_10,
        borderRadius:12,
    },
    ///style productDetalis
    imageContainer:{
        
    },
    imageContainershop:{
        width:'100%',height:130,paddingHorizontal:10,flexDirection:'row',marginTop:10
    },
    image1: {
        resizeMode:'stretch',width:180,height:120

    },
    image10: {
        resizeMode:'stretch',width:'100%',height:160,marginTop:10,paddingHorizontal:20

    },
    infoContainer: {
      padding: 10,backgroundColor:AppColors.white
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: '#787878',
      marginBottom: 16,
    },
    stylebtn: {
        flexDirection:'row',alignItems:'center',justifyContent:'center',
    },
    ///
    inputstyle:{
        flexDirection:'row',alignItems:'center',justifyContent:'center'
    },
    inputstyleText:{
        width:'90%',height:40,backgroundColor:AppColors.white,
        padding:10,marginLeft:20,borderRadius:20
    },
    textstyle:{
        width:'90%',marginTop:5,marginLeft:15,padding:10,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginBottom:5
    },
    textpriceshopping:{
        width:30,height:30,backgroundColor:AppColors.white,
        fontSize:25,paddingLeft:5,marginLeft:5

        
    },
    //for login screen
    logo:{
        width:500,resizeMode:'contain',marginTop:20,
    },
    form_container:{
        width:'100%',
        marginTop:20,
        marginBottom:50,
        alignItems:'center'
    },
    Screen_titel:{
        fontFamily:'RobotoSlab-Bold',
        color:AppColors.black,fontSize:30
    },
    Screen_context:{
        fontFamily:'RobotoSlab-Regular',
        color:AppColors.black,
        fontSize:16,
        marginTop:10,
        textAlign:'center'
    },
     input:{
        width:'100%',
        height:60,
        backgroundColor:AppColors.gray_20,
        marginTop:12,
        borderRadius:30,
        fontFamily:'RobotoSlab-Regular',
        fontSize:18,
        paddingHorizontal:20
    },
    btnL: {
        width:'100%',backgroundColor:AppColors.Iridium, height:50,borderRadius:30,
        alignItems:'center', justifyContent:'center',shadowColor:AppColors.black,
        shadowOffset:{width:2, height:2},shadowOpacity:3.70,shadowRadius:6,
        elevation:4,marginBottom:15
    },
    simple_btn_text:{
        fontFamily:'RobotoSlab-Medium',
        fontSize:16,
        color:AppColors.black
    },
    viewAvatarUser:{
       alignItems:'center',justifyContent:'center',marginBottom:5,

    },
    totlalPrice:{
        marginTop:20,width:'90%',height:65,backgroundColor:AppColors.Blue_Gray,
        padding:10,marginVertical:10,marginLeft:22,borderRadius:30,flexDirection:'row'
    },
    totlalPriceText:{
        fontSize:25,marginLeft:20,color:AppColors.black
    },

})