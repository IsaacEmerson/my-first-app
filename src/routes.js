import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './components/main';

const AppNavigator = createStackNavigator({
    Main: {
        screen: Main
    }
});
  
export default createAppContainer(AppNavigator);