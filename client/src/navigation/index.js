import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppColors from "../components/AppColors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/////
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
/////
///Shopping Screen
import Shopping from "../screens/shopping/shopping";
//favorite screen
import Favorites from "../screens/favorites/favorites";
import ProductDetailsInFavorite from "../screens/favorites/productDetailsinfavorite";
///store screen
import Store from "../screens/store/store";
import Products from "../screens/store/products";
import ProductDetails from "../screens/store/productDetails.js";
import AddProduct from "../screens/store/Addproduct";
import AddCategory from "../screens/store/AddCategory.js";

const defaultNavOption = {
    headerStyle: {backgroundColor:AppColors.black},
    headerTintColor: AppColors.green,
    headerTitleStyle: {fontFamily: 'RobotoSlab-Medium'}
}

///create stack navigator
const StoreStackNavigator = createNativeStackNavigator();
export const StoreStack = () => {
    return(
        <StoreStackNavigator.Navigator screenOptions={defaultNavOption}>
            <StoreStackNavigator.Screen name='Category' component={Store} />
            <StoreStackNavigator.Screen name='Products' component={Products} />
            <StoreStackNavigator.Screen name='ProductDetails' component={ProductDetails} />
            <StoreStackNavigator.Screen name='AddProduct' component={AddProduct} />
            <StoreStackNavigator.Screen name='AddCategory' component={AddCategory} />
        </StoreStackNavigator.Navigator>
    )
}
 
const FavoriteStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoriteStackNavigator.Navigator screenOptions={defaultNavOption}>
           <FavoriteStackNavigator.Screen name='Favorites' component={Favorites} />
           <FavoriteStackNavigator.Screen name='ProductDetails' component={ProductDetailsInFavorite} />
        </FavoriteStackNavigator.Navigator>
    )
}

const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTabs.Navigator activeColor={AppColors.green} inactiveColor={AppColors.green_90} barStyle={{backgroundColor: AppColors.black}}>
            <AppTabs.Screen name="StoreTab" component={StoreStack} 
            options={{ tabBarLabel: 'Store', tabBarIcon:({color}) => (<MaterialCommunityIcons name="store-plus" color={color} size={30} />)}} />

            <AppTabs.Screen name="favoritesTab" component={Favorites} 
              options={{tabBarLabel: 'Favorites', tabBarIcon:({color}) => (<MaterialIcons name="favorite" color={color} size={30} />)}}  />

            <AppTabs.Screen name="ShoppingTab" component={Shopping} 
            options={{tabBarLabel: 'Shopping', tabBarIcon:({color}) => (<Fontisto name="shopping-basket-add" color={color} size={25} />)}} /> 
        </AppTabs.Navigator>
    )
}