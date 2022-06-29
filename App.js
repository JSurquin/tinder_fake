import RootContainer from './navigation/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // equivalent à browserRouter
    <NavigationContainer>
    <RootContainer/>
    </NavigationContainer>
  );
}
