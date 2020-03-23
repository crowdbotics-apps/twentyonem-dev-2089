import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ProfilesBlueprintNavigator from '../features/ProfilesBlueprint/navigator';
import UserProfile742Navigator from '../features/UserProfile742/navigator';
import UserProfile741Navigator from '../features/UserProfile741/navigator';
import UserProfile740Navigator from '../features/UserProfile740/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
UserProfile742: { screen: UserProfile742Navigator },
UserProfile741: { screen: UserProfile741Navigator },
UserProfile740: { screen: UserProfile740Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
