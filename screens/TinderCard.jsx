import { useEffect, useState, useCallback } from 'react';
import TinderCard from 'react-tinder-card';
import {Text, Button} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import { Container, CardContainer, CardImage, Card, CardTitle } from '../styled/style';

const TinderScreen = () => {

  const [myData, setMyData] = useState();
  // les données que je vais stocker
  const [lastDirection, setLastDirection] = useState()
  // la dernière direction du swipe
  const [yourMatch, setYourMatch] = useState(false);
  // si j'ai match ou non (un boolean)


  // au chargement du composant
  // je vais fetch les données de l'api 
  // les transformer en json
  // et en suite je vais ajouter la clef matched true à tout les utilisateurs
  // via une boucle map() 
  // et en suite je vais mettre à jour l'état "myData", avec les données
  // avec setMyData()
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(
      data => {
    data.results.map((user) => user.matched = true)
    setMyData(data);
      }
      );
  }, [])

  // je créer une fonction qui va s'apeller quand on swipe (via la props swipe de react-tinder-card)
  const onSwipe = (direction, matched) => {
    setLastDirection(direction);
    if (direction === "right" && matched) {
      setYourMatch(true);
    }

  }

  // quand je change de page, je change de FOCUS 
  // donc quand je change de focus, je remet yourMatch à false
  // pour refaire voir à nouveau les cartes "tinder"
  useFocusEffect(
    useCallback(() => {
      return () => setYourMatch(false);
    }, [])
  );

  // j'ai créer une fonction qui va rendre aléatoire le jeu de données 
  // les utilisateurs dans le tableau
  // et filtrer uniquement si c'est des femmes dans notre exemple
  const sortMyDataAndFilter = () => {
    return myData.results.sort(() => (Math.random() > .5) ? 1 : -1).filter(user => user.gender === "female");
  }

  return (
    <Container>
    <CardContainer>
      {/* si yourMatch === true, j'ai donc un match donc je fais voir le message d'avertissement */}
      {yourMatch ?
            <>
              <Text>Félicitations vous avez matché avec cette personne !</Text>
              <Button title="Matching">Voir le profil de la personne</Button>
            </>
            :
            // si non (par défaut je n'ai aucun match): je continue l'action précedente
            // c'est à dire afficher les tinder card
            (
              myData?.results && sortMyDataAndFilter().map((user, index) => 
              <TinderCard onSwipe={(direction) => onSwipe(direction, user.matched)} key={index}>
              <Card>
                <CardImage source={{uri: user.picture.large}}>
                  <CardTitle>{user.name.first + " " + user.name.last}</CardTitle>
                </CardImage>
              </Card>
            </TinderCard>    
            )
            )}
    </CardContainer>
    {/* si j'ai choisis à gauche , je n'aime pas par défaut , si non j'aime ! */}
    {lastDirection && <Text>{lastDirection === "left" ? "Vous n'aimez pas" : "Vous aimez !"}</Text>}
  </Container> 
  )
}

export default TinderScreen;