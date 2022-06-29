import {Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <Button
    title="Go to profil"
    onPress={() => navigation.navigate('Profil')}
  />  
  )
}

export default Home;