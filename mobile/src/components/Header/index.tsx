import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

interface UserProps {
  userName: string;
  userPhotoUrl: string;
}

interface Props {
  data: UserProps;
}

export function Header({data}: Props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: data.userPhotoUrl}} style={styles.cover} />
      <Text style={styles.name}>{data.userName}</Text>
    </View>
  );
}
