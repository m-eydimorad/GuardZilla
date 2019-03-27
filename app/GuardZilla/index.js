
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
//import Navigation from './Navigation';
import Login from './src/pages/login';
//import EnvironmentStatus from './src/pages/environmentStatus';
//import RequestForLock from './src/pages/requestForLock';

AppRegistry.registerComponent(appName, () => Login);
