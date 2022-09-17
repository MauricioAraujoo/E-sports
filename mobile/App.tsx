
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';


import { Routes } from './src/routes';
import { Backgroud } from './src/components/Backgroud';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Backgroud>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoad ? <Routes /> : <Loading /> }
    </Backgroud>
  );
}



