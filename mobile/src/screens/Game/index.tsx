import { useEffect, useState } from 'react';

import { SafeAreaView, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'

import { THEME } from '../../theme';
import { styles } from './styles';

import { GameParams } from '../../@types/navigation';

import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Backgroud } from '../../components/Backgroud';
import { Heading } from '../../components/Heading';


export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function hendleGoBack() {
    navigation.goBack();

  }

  useEffect(() => {
    fetch(`http://192.168.1.8:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Backgroud>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={hendleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e começe a jogar!"
        />


      
          
            <DuoCard data={duos[0]} />
        
        

      </SafeAreaView>
    </Backgroud>
  );
}