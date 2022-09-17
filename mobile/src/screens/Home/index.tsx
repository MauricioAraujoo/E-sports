import React, { useEffect, useState } from 'react'
import { Image, FlatList,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png'

import { Backgroud } from '../../components/Backgroud';
import { GameCard, GameCardPops } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardPops[]>([]);
  
  const navigation = useNavigation();


  function handleOpenGame({ id, title, bannerUrl}: GameCardPops){
    navigation.navigate('game', { id, title, bannerUrl});
  }

  useEffect(() => {
    fetch('http://192.168.1.8:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  return (
    <Backgroud>
    <SafeAreaView style={styles.container}>
      <Image 
      source={logoImg} 
      style={styles.logo} 
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
    </Backgroud>
  );
}