import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppColors from "../components/AppColors";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


import Shopping from "../screens/shopping/shopping";
import Store from "../screens/store/store";
import Favorites from "../screens/favorites/favorites";

const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTabs.Navigator activeColor={AppColors.green} inactiveColor={AppColors.green_90} barStyle={{backgroundColor: AppColors.black}}>
            <AppTabs.Screen name="Store" component={Store} 
            options={{
                tabBarLabel: 'Store', 
                tabBarIcon:({color}) => (<MaterialCommunityIcons name="store-plus" color={color} size={30} />)
            }} />

            <AppTabs.Screen name="favorites" component={Favorites} 
              options={{
                tabBarLabel: 'Favorites', 
                tabBarIcon:({color}) => (<MaterialIcons name="favorite" color={color} size={30} />)
            }}  />

            <AppTabs.Screen name="Shopping" component={Shopping} 
            options={{
                tabBarLabel: 'Shopping', 
                tabBarIcon:({color}) => (<Fontisto name="shopping-basket-add" color={color} size={25} />)
            }} /> 
        </AppTabs.Navigator>
    )
}