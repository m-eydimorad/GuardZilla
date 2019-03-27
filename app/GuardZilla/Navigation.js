import {createStackNavigator} from 'react-navigation';

import login from './src/pages/login';
import environmentStatus from './src/pages/environmentStatus';
import requestForLock from './src/pages/requestForLock';

const Navigation=createStackNavigator({
    Login:{screen:login},
    Home:{screen:environmentStatus},
    RequestForLock:{screen:requestForLock}
},
{
    headerMode:'none'
})

export default Navigation;