/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'


const Entering = () => {

    const scheme = useColorScheme();
    const CustomLightTheme = {
        ...DefaultTheme,
        colors: {
        ...DefaultTheme.colors,
        }
    };

    const CustomDarkTheme = {
        ...DarkTheme,
        colors: {
        ...DarkTheme.colors,
        }
    }

    return (
        <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
            <App />
        </NavigationContainer>
    )

}

AppRegistry.registerComponent(appName, () => Entering);
