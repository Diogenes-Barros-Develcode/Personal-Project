import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';
import {THEME} from '../../theme';

interface UserThemeProps {
  id: string;
  imageToColorJPG: string;
}

interface Props extends TouchableOpacityProps {
  data: UserThemeProps;
}

export function ColorAcivitiesCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        source={{uri: data.imageToColorJPG}}
        style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer} />
      </ImageBackground>
    </TouchableOpacity>
  );
}
