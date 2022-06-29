import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import TinderScreen from '../screens/TinderCard';
import Profil from '../screens/Profil';
import BottomTabs from './BottomTabs';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return <> 
  {/* équivalent à <Routes> sur react-router */}
      <Stack.Navigator> 
      <Stack.Screen options={{ headerShown: false }} name="Root" component={BottomTabs}/>
        {/* équivalent à <Route> sur react-router */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="TinderScreen" component={TinderScreen} />
      </Stack.Navigator>
  </>
}

export default RootNavigator;