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

interface UserThemeProps {
  id: string;
  name: string;
  themeImage: string;
}

interface Props extends TouchableOpacityProps {
  data: UserThemeProps;
}

export function ThemeCard({data, ...rest}: Props) {
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
