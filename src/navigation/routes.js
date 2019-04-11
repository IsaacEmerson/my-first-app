import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../components/main';
import Product from '../components/product';

const AppNavigator = createStackNavigator(
    {
        Main: Main,
        Product: Product,
    },
    {
        initialRouteName: 'Main',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    }
);

export default createAppContainer(AppNavigator);