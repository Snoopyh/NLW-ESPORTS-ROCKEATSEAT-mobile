import { useEffect , useState } from 'react';

import { View,  } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps{
  hourEnd: string,
    hourStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weakDays:string[],
    yearsPlaying: number,
}

interface Props {
  data: DuoCardProps;
}


export function DuoCard({data}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="nome"
        value={data.name}
     />
      <DuoInfo
        label="Tempo de Jogo"
        value={`${data.yearsPlaying} anos`}
     />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weakDays.length} dias` }
     />
      <DuoInfo
        label="Chamada de áudio?"
        value="Sim"
        colorValue="#34D399"
     />

    </View>
  );
}