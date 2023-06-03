import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppColors from "../components/AppColors";

import Shopping from "../screens/shopping/shopping";
import Store from "../screens/store/store";
import Favorites from "../screens/favorites/favorites";

const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTabs.Navigator activeColor={AppColors.green} inactiveColor={AppColors.green_90} barStyle={{backgroundColor: AppColors.black}}>
            <AppTabs.Screen name="Store" component={Store} />
            <AppTabs.Screen name="favorites" component={Favorites} />
            <AppTabs.Screen name="Shopping" component={Shopping} />
        </AppTabs.Navigator>
    )
}