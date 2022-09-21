import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ThemeParams} from '../../@types/navigation';
import {Background} from '../../components/Background';

import {styles} from './styles';
import chevronLeft from '../../assets/chevron-left.png';

export function ThemePage() {
  const route = useRoute();
  const theme = route.params as ThemeParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <View style={styles.container} />
      <TouchableOpacity onPress={handleGoBack}>
        <Image source={chevronLeft} style={styles.icon} />
      </TouchableOpacity>
      <Text>{theme.name}</Text>
    </Background>
  );
}
