import { createStackNavigator, createAppContainer } from 'react-navigation';

import login from './src/pages/login';
import environmentStatus from './src/pages/environmentStatus';
import requestForLock from './src/pages/requestForLock';

const MainNavigator = createStackNavigator({
    Login: { screen: login },
    RequestForLock: { screen: requestForLock },
    Home:{screen:environmentStatus},
    //Help: { screen: help }
},
    {
        headerMode: 'none'
    })






const App = createAppContainer(MainNavigator);

export default App;