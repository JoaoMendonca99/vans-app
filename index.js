// index.js
import 'react-native-gesture-handler'; // ✅ importante p/ navegação funcionar sem crashes
import 'react-native-reanimated';
import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that you render the app container component if the whole app is not already mounted.
registerRootComponent(App);
