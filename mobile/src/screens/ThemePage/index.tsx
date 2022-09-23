import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ThemeParams} from '../../@types/navigation';
import {Background} from '../../components/Background';

import {styles} from './styles';
import chevronLeft from '../../assets/chevron-left.png';
import axios from 'axios';
import {EspecificCard} from '../../components/EspecificCard';

interface ThemeEspecificationProps {
  id: string;
  name: string;
  characteristics: string;
  speciesType: string;
  themeImage: string;
  whereLived: string;
  whereLivedImage: string;
  imageToColor: string;
  favoriteThemeId: string;
}

export function ThemePage() {
  const route = useRoute();
  const theme = route.params as ThemeParams;
  const navigation = useNavigation();
  const [themeEspecification, setThemeEspecification] = useState<
    ThemeEspecificationProps[]
  >([]);

  function handleGoBack() {
    navigation.goBack();
  }

  const renderItem = ({item}: {item: ThemeEspecificationProps}) => {
    return (
      <EspecificCard data={item} onPress={() => handleOpenScreenTheme(item)} />
    );
  };

  function handleOpenScreenTheme({
    id,
    name,
    characteristics,
    speciesType,
    themeImage,
    whereLived,
    whereLivedImage,
    imageToColor,
    favoriteThemeId,
  }: ThemeEspecificationProps) {
    navigation.navigate('EspecificationThemePage', {
      id,
      name,
      characteristics,
      speciesType,
      themeImage,
      whereLived,
      whereLivedImage,
      imageToColor,
      favoriteThemeId,
    });
  }

  useEffect(() => {
    try {
      axios(
        `http://172.22.19.61:3333/users/${theme.id}/themeEspecification`,
      ).then(response => {
        setThemeEspecification(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Background>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.button}>
          <Image source={chevronLeft} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{theme.name}</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={themeEspecification}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </Background>
  );
}
