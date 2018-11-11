/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import GetData from './GetData'
//import ReadDate from './ReadData'
import DetailScreen from './screens/Header/DetailScreen'
import AppTabNavigator from './screens/Route/RouteConfigure'
import AboutScreen from './screens/About/About'
import About from './screens/About/index'
import RouteAboutScreen from './screens/Route/RouteAboutScreen'
import index from './screens/Home/HomeScreen'
AppRegistry.registerComponent(appName, () => index);
