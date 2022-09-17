
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />

      <DuoInfo
        label='Tempo de Jogo'
        value="6 anos "
      />

      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias`}
      />

      <DuoInfo
        label='Chamada de áudio?'
        value="sim"
      />

    </View>
  );
}