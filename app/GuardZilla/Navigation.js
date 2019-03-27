import { createStackNavigator } from 'react-navigation';
import app from './App';
import environmentStatus from './src/components/environmentStatus/environmentStatus';
import requestForDemo from './src/components/requestForDemo/requestForDemo';
const Navigation = createStackNavigator({
    app: { screen: app },
    environmentStatus: { screen: environmentStatus },
    requestForDemo: { screen: requestForDemo },

},
    {
        headerMode: 'none'
    }
)


export default Navigation