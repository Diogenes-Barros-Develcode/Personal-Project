import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {EspecificationParams} from '../../@types/navigation';
import {Background} from '../../components/Background';
import {ColorAcivitiesCard} from '../../components/ColorActivitiesCard';

import {styles} from './styles';

interface ThemeProps {
  id: string;
  imageToColor: string;
  imageToColorJPG: string;
}

interface UserThemeProps {
  id: string;
  name: string;
  imageToColor: string;
  imageToColorJPG: string;
}

export function EspecificationThemePage() {
  const route = useRoute();
  const theme = route.params as EspecificationParams;
  const [userTheme, setUserTheme] = useState<UserThemeProps[]>([]);

  const navigation = useNavigation();

  function handleActivities({id, imageToColor}: ThemeProps) {
    navigation.navigate('Activities', {id, imageToColor});
  }

  const renderItem = ({item}: {item: ThemeProps}) => {
    return (
      <ColorAcivitiesCard data={item} onPress={() => handleActivities(item)} />
    );
  };

  useEffect(() => {
    try {
      axios(
        `http://172.22.19.61:3333/users/${theme.favoriteThemeId}/themeEspecification`,
      ).then(response => {
        setUserTheme(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Background>
      <FlatList
        data={userTheme}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>{theme.name}</Text>
                <Image source={{uri: theme.themeImage}} style={styles.image} />
              </View>
              <Text style={styles.characteristics}>
                {theme.characteristics}
              </Text>
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
            </View>
            <FlatList
              data={userTheme}
              keyExtractor={item => item.id}
              horizontal
              renderItem={renderItem}
            />
          </>
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
