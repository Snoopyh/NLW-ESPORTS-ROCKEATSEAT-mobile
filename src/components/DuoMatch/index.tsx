import { View , Modal , ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';


import { Heading } from '../../components/Heading';
import React, { useState } from 'react';

interface Props extends ModalProps{
  discord: string;
  onClose:() => void;
}

export function DuoMatch({ discord,onClose, ...rest}: Props) {
  const [isCoping , setIsCoping] = useState(false)

  async function handleCopyDiscordUserToClipBoard(){
    setIsCoping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord Copiado','Usuario copiado para voce encontrar essa pessoa!')
    setIsCoping(false)
  }
  return (
    <Modal
    animationType='fade'
    transparent
    statusBarTranslucent
    {...rest}
    >
    <View style={styles.container}>
      <View style={styles.content}>
      <TouchableOpacity
      onPress={onClose}
      style={styles.closeIcon}
      >
        <MaterialIcons
        name='close'
        size={20}
        color={THEME.COLORS.CAPTION_500}
        />
      </TouchableOpacity>
        <CheckCircle
        size={64}
        color={THEME.COLORS.SUCCESS}
        weight="bold"
        />
        <Heading
        title='Let’s play!'
        subtitle='Agora é só começar a jogar!'
        style={{alignItems:'center', marginTop:24}}
        />

        <Text style={styles.label}>
          Adicione no Discord
        </Text>
      <TouchableOpacity 
      style={styles.discordButton}
      onPress={handleCopyDiscordUserToClipBoard}
      disabled={isCoping}
      >
        <Text style={styles.discord}>
          {isCoping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
       </Text>
      </TouchableOpacity>
      </View>

    </View>
    </Modal>
  );
}