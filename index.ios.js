// Temporarily disable yellow error messages for demo env
console.disableYellowBox = true;

import make_it_happen_frontend from './app/HomePage.js';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('make_it_happen_frontend', () => make_it_happen_frontend);
