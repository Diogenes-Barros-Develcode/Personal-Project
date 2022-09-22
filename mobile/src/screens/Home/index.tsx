import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../../components/Header';
import {styles} from './styles';
import {Background} from '../../components/Background';
import {ThemeCard} from '../../components/ThemeCard';

interface UserProps {
  id: string;
  userName: string;
  userPhotoUrl: string;
  _count: {
    themes: number;
  };
}

interface UserThemeProps {
  id: string;
  name: string;
  themeImage: string;
}

export function Home() {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [userTheme, setUserTheme] = useState<UserThemeProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    try {
      axios(
        'http://172.22.19.61:3333/users/840954c5-fbda-4486-be36-d900f70b6d0c/favoritethemes',
      ).then(response => {
        setUserTheme(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderItem = ({item}: {item: UserThemeProps}) => {
    return (
      <ThemeCard data={item} onPress={() => handleOpenScreenTheme(item)} />
    );
  };

  function handleOpenScreenTheme({id, name}: UserThemeProps) {
    navigation.navigate('ThemePage', {id, name});
  }

  useEffect(() => {
    try {
      axios(
        'http://172.22.19.61:3333/users/840954c5-fbda-4486-be36-d900f70b6d0c',
      ).then(response => {
        setUserData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header data={userData} />
        </View>

        <View style={styles.favoriteView}>
          <Text style={styles.favoriteText}>
            {userData?._count?.themes > 1
              ? `Você tem ${userData?._count?.themes} temas favoritos`
              : `Você tem ${userData?._count?.themes} tema favorito`}
          </Text>
        </View>

        <FlatList
          data={userTheme}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
