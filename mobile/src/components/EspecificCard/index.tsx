import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import {styles} from './styles';
import {THEME} from '../../theme';

interface ThemeEspecificationProps {
  id: string;
  name: string;
  characteristics: string;
  speciesType: string;
  themeImage: string;
}

interface Props extends TouchableOpacityProps {
  data: ThemeEspecificationProps;
}

export function EspecificCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{uri: data.themeImage}} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
