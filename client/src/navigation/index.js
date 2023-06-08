import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppColors from "../components/AppColors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/////
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
/////
import Shopping from "../screens/shopping/shopping";
import Favorites from "../screens/favorites/favorites";
///store screen
import Store, {screenOptions as StoreScreenOption } from "../screens/store/store";
import subCategory, {screenOptions as subCategoryScreenOption } from "../screens/store/subCategory";
import Products from "../screens/store/products";
import ProductDetails from "../screens/store/productDetails";
import MazdaProducts from "../screens/store/mazdaproducts";

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
            <StoreStackNavigator.Screen name='Category' component={Store} options={StoreScreenOption} />
            <StoreStackNavigator.Screen name='subCategory' component={subCategory} options={subCategoryScreenOption} />
            <StoreStackNavigator.Screen name='Products' component={Products} />
            <StoreStackNavigator.Screen name='ProductDetails' component={ProductDetails} />
            <StoreStackNavigator.Screen name='MazdaProducts' component={MazdaProducts} />
        </StoreStackNavigator.Navigator>
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