import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {EspecificationParams} from '../../@types/navigation';
import {Background} from '../../components/Background';

import {styles} from './styles';

export function EspecificationThemePage() {
  const route = useRoute();
  const theme = route.params as EspecificationParams;

  const navigation = useNavigation();

  function handleActivities(id) {
    navigation.navigate('Activities', {id});
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{theme.name}</Text>
          <Image source={{uri: theme.themeImage}} style={styles.image} />
        </View>
        <Text style={styles.characteristics}>{theme.characteristics}</Text>
        <View style={styles.wrapperTextAndImage}>
          <View style={styles.whereLived}>
            <Text style={styles.whereLivedText}>{theme.whereLived}</Text>
          </View>
          <Image
            source={{uri: theme.whereLivedImage}}
            style={styles.whereLivedImage}
          />
        </View>
        <Text style={styles.type}>
          O {theme.name} é do tipo {theme.speciesType}.
        </Text>
        <TouchableOpacity onPress={handleActivities}>
          <Text style={styles.decriptionType}>Atividades</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
