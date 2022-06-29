import Home from '../screens/Home';
import TinderCard from '../screens/TinderCard';
import Profil from '../screens/Profil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profil" component={Profil} />
      <Tab.Screen name="TinderCard" component={TinderCard} />
    </Tab.Navigator>
  );
}

export default Tabs;