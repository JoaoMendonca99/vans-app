import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that you render the app container component if the whole app is not already mounted.
registerRootComponent(App);
